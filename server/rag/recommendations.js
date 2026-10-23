import { questionCatalog } from './questions.js';
import { searchSimilarQuestions } from './search.js';

export async function recommendQuestions(input, { search = searchSimilarQuestions, catalog = questionCatalog, signal } = {}) {
  const known = values => [...new Set(values.filter(id => catalog.byQuestionId.has(id)))];
  const wrong = known(input.wrongQuestions);
  const bookmarks = known(input.bookmarkedQuestions);
  const wrongSet = new Set(wrong);
  const bookmarkSet = new Set(bookmarks);
  const excluded = new Set([...known(input.solvedQuestions), ...wrong, ...known(input.excludeQuestionIds || [])]);
  const bookmarkSeeds = bookmarks.filter(id => !wrongSet.has(id));
  const seeds = [...wrong.slice(-20).reverse().map(id => ({ id, type: 'wrong', priority: 0 })),
    ...bookmarkSeeds.slice(-10).reverse().map(id => ({ id, type: 'bookmark', priority: 1 }))];
  const candidates = new Map();
  for (const seed of seeds) {
    if (signal?.aborted) break;
    let matches;
    try { matches = await search(catalog.byQuestionId.get(seed.id).question, { k: 20, excludeQuestionIds: [...excluded], signal }); }
    catch { continue; }
    for (const match of matches) {
      const record = catalog.records.get(match.id);
      if (!record || record.metadata.questionId === seed.id || excluded.has(record.metadata.questionId) ||
        !Number.isFinite(match.score) || match.score < 0 || match.score > 1) continue;
      const previous = candidates.get(record.id);
      if (previous && (previous.priority < seed.priority || (previous.priority === seed.priority && previous.score >= match.score))) continue;
      candidates.set(record.id, {
        id: record.id, questionId: record.metadata.questionId, examKey: record.metadata.examKey,
        topic: record.metadata.topic, score: match.score, priority: seed.priority,
        bookmarked: bookmarkSet.has(record.metadata.questionId), reason: { type: seed.type, questionId: seed.id },
      });
    }
  }
  const fingerprint = record => record.document.replace(/\s+/g, ' ').trim().toLowerCase();
  const seen = new Set([...excluded].map(id => fingerprint(catalog.byQuestionId.get(id))));
  const recommendations = [...candidates.values()]
    .sort((a, b) => a.priority - b.priority || Number(b.bookmarked) - Number(a.bookmarked) || b.score - a.score || a.questionId - b.questionId)
    .filter(row => {
      const signature = fingerprint(catalog.records.get(row.id));
      if (seen.has(signature)) return false;
      seen.add(signature); return true;
    }).slice(0, 3).map(({ priority, bookmarked, ...row }) => row);
  return { recommendations, limited: wrong.length > 20 || bookmarkSeeds.length > 10 };
}

function send(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(body));
}

export function createRecommendationMiddleware({ search = searchSimilarQuestions } = {}) {
  return async (req, res, next) => {
    if (req.url?.split('?')[0] !== '/api/recommendations') return next();
    if (req.method !== 'POST') return send(res, 405, { error: 'POST 요청만 지원합니다.' });
    if (req.headers.origin) {
      try {
        if (new URL(req.headers.origin).host !== req.headers.host) return send(res, 403, { error: '허용되지 않은 요청입니다.' });
      } catch { return send(res, 403, { error: '허용되지 않은 요청입니다.' }); }
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);
    const abort = () => controller.abort();
    res.on('close', abort);
    try {
      let body;
      if (req.body !== undefined) body = typeof req.body === 'string' || Buffer.isBuffer(req.body) ? req.body.toString() : JSON.stringify(req.body);
      else {
        body = '';
        for await (const chunk of req) {
          body += chunk.toString();
          if (Buffer.byteLength(body) > 16000) return send(res, 413, { error: '요청 크기가 너무 큽니다.' });
        }
      }
      if (Buffer.byteLength(body) > 16000) return send(res, 413, { error: '요청 크기가 너무 큽니다.' });
      let input;
      try { input = JSON.parse(body); } catch { return send(res, 400, { error: '잘못된 요청입니다.' }); }
      const ids = value => Array.isArray(value) && value.length <= questionCatalog.records.size && value.every(Number.isInteger);
      if (!input || !ids(input.wrongQuestions) || !ids(input.bookmarkedQuestions) || !ids(input.solvedQuestions) ||
        (input.excludeQuestionIds !== undefined && !ids(input.excludeQuestionIds))) return send(res, 400, { error: '학습 기록을 확인해주세요.' });
      const result = await recommendQuestions(input, { search, signal: controller.signal });
      if (!res.destroyed) send(res, 200, result);
    } catch {
      if (!res.destroyed) send(res, 200, { recommendations: [], limited: false });
    } finally { clearTimeout(timeout); res.off('close', abort); }
  };
}
