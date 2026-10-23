import { readFile } from 'node:fs/promises';
import { INDEX_PATH, assertCompatibleIndex, readRagConfig } from './config.js';
import { questionCatalog } from './questions.js';
import { cosineSimilarity, validVector } from './vectors.js';
const fingerprint = document => document.replace(/\s+/g, ' ').trim().toLowerCase();

export function createSearchService({ env = process.env, catalog = questionCatalog,
  loadIndex = async () => JSON.parse(await readFile(INDEX_PATH, 'utf8')) } = {}) {
  let loaded;
  let retryAfter = 0;
  return async function searchSimilarQuestions(query, options = {}) {
    let timer;
    try {
      const config = readRagConfig(env);
      if (!config.enabled || Date.now() < retryAfter || options.signal?.aborted) return [];
      // Known questions use precomputed vectors: no API calls or filesystem writes at runtime.
      const current = typeof query === 'object' && query ? catalog.byQuestionId.get(query.id)
        : typeof query === 'string' ? [...catalog.records.values()].find(row => row.document === query || row.question.question === query) : null;
      if (!current) return [];
      const k = options.k ?? 5;
      if (!Number.isInteger(k) || k < 1 || k > 20) return [];
      if (options.year !== undefined && !Number.isInteger(Number(options.year))) return [];
      if (options.round !== undefined && !Number.isInteger(Number(options.round))) return [];
      if (!loaded) loaded = Promise.resolve().then(loadIndex).catch(error => { loaded = null; throw error; });
      const index = await Promise.race([loaded, new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error('Index read timeout')), config.timeoutMs);
      })]);
      if (options.signal?.aborted) return [];
      assertCompatibleIndex(index, config);
      const usable = new Map();
      for (const row of index.records) {
        const source = row && catalog.records.get(row.id);
        if (source && row.contentHash === source.metadata.contentHash && validVector(row.embedding, config.dimensions)) usable.set(row.id, row);
      }
      const vector = usable.get(current.id)?.embedding;
      if (!vector) return [];
      const excludeId = options.excludeId || current.id;
      const excludeQuestionId = options.excludeQuestionId ?? current.metadata.questionId;
      const candidates = [];
      for (const [id, row] of usable) {
        const record = catalog.records.get(id);
        if (id === current.id || id === excludeId || record.metadata.questionId === excludeQuestionId) continue;
        if (options.year !== undefined && record.metadata.year !== Number(options.year)) continue;
        if (options.round !== undefined && record.metadata.round !== Number(options.round)) continue;
        if (record.metadata.questionType !== current.metadata.questionType || record.metadata.language !== current.metadata.language) continue;
        const score = cosineSimilarity(vector, row.embedding);
        if (!Number.isFinite(score) || score < config.minScore) continue;
        candidates.push({ id, questionId: record.metadata.questionId, examKey: record.metadata.examKey,
          year: record.metadata.year, round: record.metadata.round, sourceFile: record.metadata.sourceFile,
          score, topic: record.metadata.topic, question: record.question });
      }
      candidates.sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
      const seen = new Set([fingerprint(current.document)]);
      return candidates.filter(row => {
        const signature = fingerprint(catalog.records.get(row.id).document);
        if (seen.has(signature)) return false;
        seen.add(signature); return true;
      }).slice(0, k);
    } catch {
      loaded = null; retryAfter = Date.now() + 30000; return [];
    } finally { clearTimeout(timer); }
  };
}
export const searchSimilarQuestions = createSearchService();
