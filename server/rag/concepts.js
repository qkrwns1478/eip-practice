import { pstExams } from '../../src/assets/pstData.js';
import { getCodeLanguage } from '../../src/utils/codeQuestions.js';

// Explicit labels reviewed against the source questions, not vector neighbors or distractor options.
// These labels are separate from embedding documents: editing labels never requires re-embedding.
export const conceptDefinitions = [
  { id: 'ospf', label: 'OSPF·링크 상태·최단 경로', aliases: ['OSPF', '링크 상태', 'link state', '다익스트라', 'Dijkstra'], sources: ['2020-3:383', '2022-2:194', '2024-1:47', '2026-2:264'] },
  { id: 'rip', label: 'RIP·거리 벡터', aliases: ['RIP', '거리 벡터', 'distance vector', '홉 수', 'hop count'], sources: ['2022-2:194', '2023-3:158', '2024-2:71'] },
  { id: 'routing', label: '라우팅 프로토콜 분류', aliases: ['라우팅', 'routing', 'BGP', 'IGP', 'EGP', '경로 제어'], sources: ['2020-3:383', '2022-2:194', '2023-3:158', '2024-1:47', '2024-2:71', '2026-2:264'] },
  { id: 'join', label: '조인(SQL·관계 모델)', aliases: ['JOIN', '조인', '자연 조인', '동등 조인', '외부 조인'], sources: ['2021-2:306', '2021-3:330', '2022-3:202', '2023-3:159', '2024-1:48', '2024-3:83', '2026-1:258'] },
  { id: 'normalization', label: '정규화·함수 종속·반정규화', aliases: ['정규화', '반정규화', '함수 종속', 'normalization', 'functional dependency'], sources: ['2020-1:357', '2021-1:288', '2022-2:198', '2024-2:62'] },
  { id: 'transaction', label: '트랜잭션·ACID·회복', aliases: ['트랜잭션', 'ACID', '원자성', 'ROLLBACK', 'UNDO', 'REDO'], sources: ['2020-1:348', '2020-2:367', '2021-2:303', '2022-1:162'] },
  { id: 'keys', label: '데이터베이스 키·무결성', aliases: ['기본키', '기본 키', '후보키', '후보 키', '슈퍼키', '외래키', '외래 키', '무결성', 'primary key', 'foreign key'], sources: ['2022-1:177', '2023-3:160', '2024-3:95', '2025-1:8'] },
  { id: 'relational', label: '관계 모델·관계 대수', aliases: ['관계 대수', '관계 모델', '릴레이션', '카디널리티', 'cardinality', '튜플', 'division'], sources: ['2020-3:390', '2021-1:296', '2022-3:202', '2023-1:112', '2023-3:159', '2024-1:48', '2024-2:64', '2025-1:8', '2025-3:236'] },
  { id: 'coverage', label: '테스트 커버리지', aliases: ['커버리지', 'coverage', '문장 커버리지', '분기 커버리지', '조건 커버리지', 'MC/DC'], sources: ['2021-2:309', '2023-1:119', '2023-2:126', '2024-1:54', '2024-3:93', '2025-1:15', '2025-2:31', '2025-3:222'] },
  { id: 'patterns', label: '디자인 패턴', aliases: ['디자인 패턴', 'GoF', 'Proxy', 'Adapter', 'Bridge', 'Observer', 'Singleton', 'Factory', 'Iterator', 'Visitor'], sources: ['2020-4:402', '2021-2:313', '2021-3:325', '2022-3:203', '2023-1:111', '2023-2:131', '2024-2:70', '2024-3:86', '2025-1:14', '2025-2:27', '2026-1:242', '2026-2:271'] },
  { id: 'access', label: '접근 통제', aliases: ['접근 통제', '접근통제', '접근 제어', 'DAC', 'MAC', 'RBAC'], sources: ['2021-1:298', '2023-3:147', '2025-3:238'] },
  { id: 'scheduling', label: 'CPU 스케줄링', aliases: ['스케줄링', 'SJF', 'SRT', 'RR', '라운드로빈', '라운드 로빈', 'round robin', '평균 대기시간'], sources: ['2022-3:216', '2024-2:72', '2025-2:24', '2025-2:33', '2026-2:268'] },
  ...['C', 'Java', 'Python', 'SQL'].map(language => ({
    id: `language-${language.toLowerCase()}`, label: `${language} 코드`, language,
    aliases: language === 'C' ? ['C언어', 'C 언어'] : language === 'Java' ? ['Java', '자바'] : language === 'Python' ? ['Python', '파이썬'] : ['SQL', '쿼리'], sources: [],
  })),
];

export function createConceptIndex(exams = pstExams, definitions = conceptDefinitions) {
  const memberships = new Map(definitions.map(concept => [concept.id, new Set(concept.sources)]));
  const records = new Map();
  for (const exam of exams) for (const [index, question] of exam.questions.entries()) {
    const id = `${exam.key}:${question.id}`;
    if (records.has(id)) continue;
    const language = getCodeLanguage(question);
    records.set(id, { id, questionId: question.id, year: Number(exam.year), round: exam.round, examKey: exam.key,
      number: index + 1, sourceLabel: `${exam.year}년 ${exam.round}회 ${index + 1}번`, question,
      conceptIds: definitions.filter(concept => memberships.get(concept.id).has(id) || (concept.language && concept.language === language)).map(concept => concept.id),
    });
  }
  return { records, definitions };
}

export const conceptIndex = createConceptIndex();

export function sourceReference(record) {
  return { id: record.id, questionId: record.questionId, examKey: record.examKey, year: record.year,
    round: record.round, number: record.number, sourceLabel: record.sourceLabel, question: record.question.question };
}

export function aggregateTrends(index = conceptIndex) {
  const records = [...index.records.values()];
  const coverage = rows => ({ totalQuestions: rows.length, classifiedQuestions: rows.filter(row => row.conceptIds.length).length,
    unclassifiedQuestions: rows.filter(row => !row.conceptIds.length).length, totalExams: new Set(rows.map(row => row.examKey)).size });
  const years = [...new Set(records.map(row => row.year))].sort((a, b) => b - a);
  return {
    coverage: coverage(records), byYear: years.map(year => ({ year, ...coverage(records.filter(row => row.year === year)) })),
    concepts: index.definitions.map(concept => {
      const rows = records.filter(row => row.conceptIds.includes(concept.id));
      return { id: concept.id, label: concept.label, questionCount: rows.length, examCount: new Set(rows.map(row => row.examKey)).size,
        sources: rows.map(sourceReference) };
    }).sort((a, b) => b.questionCount - a.questionCount || a.id.localeCompare(b.id)),
  };
}

function containsTerm(text, term) {
  const normalized = text.toLowerCase();
  if (/^[a-z0-9 /-]+$/i.test(term)) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, 'i').test(normalized);
  }
  return normalized.replace(/\s+/g, '').includes(term.toLowerCase().replace(/\s+/g, ''));
}

// No query embedding: explicit concepts and original text supply the tutor's evidence.
export function retrieveTutorSources(query, index = conceptIndex) {
  const matched = index.definitions.filter(concept => concept.aliases.some(alias => containsTerm(query, alias)));
  // A broad language label must not drown out a named concept such as SQL JOIN.
  const concepts = matched.some(concept => !concept.language) ? matched.filter(concept => !concept.language) : matched;
  const tokens = [...new Set(query.match(/[A-Za-z][A-Za-z0-9/-]*|[가-힣]{2,}/g) || [])]
    .filter(token => !/^(어떻게|기출문제|문제|설명|차이|시험|출제|알려줘|알려주세요)$/.test(token));
  const candidates = [...index.records.values()].map(record => {
    // Distractors alone are not proof that a concept was examined.
    const text = [record.question.question, record.question.passageOrCode, record.question.answer, record.question.alt, ...(record.question.alts || [])].filter(Boolean).join('\n');
    const topicMatches = concepts.filter(concept => record.conceptIds.includes(concept.id));
    const textMatches = tokens.filter(token => containsTerm(text, token)).length;
    return { record, topicMatches, score: topicMatches.length * 10 + textMatches };
  }).filter(row => concepts.length ? row.topicMatches.length : row.score > 0)
    .sort((a, b) => b.score - a.score || b.record.year - a.record.year || a.record.id.localeCompare(b.record.id));
  const selected = new Map();
  let size = 0;
  const add = candidate => {
    if (!candidate || selected.has(candidate.record.id) || selected.size >= 6) return;
    const record = candidate.record;
    const length = JSON.stringify(record.question).length;
    if (size + length > 18000) return;
    size += length;
    selected.set(record.id, record);
  };
  // Include evidence for each named concept before filling the remaining result slots.
  for (const concept of concepts) add(candidates.find(row => row.record.conceptIds.includes(concept.id)));
  for (const candidate of candidates) add(candidate);
  return { records: [...selected.values()], conceptIds: concepts.map(concept => concept.id) };
}
