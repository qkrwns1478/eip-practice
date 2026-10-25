import { createHash } from 'node:crypto';
import { pstExams } from '../../src/assets/pstData.js';
import { getCodeLanguage } from '../../src/utils/codeQuestions.js';

export const DOCUMENT_VERSION = 1;
const text = value => typeof value === 'string' ? value : '';

// Classify only the question text, never its answer (recommendations must not reveal answers).
export function questionTopic(question, language = getCodeLanguage(question)) {
  if (language) return `${language} 코드·실행 흐름`;
  const body = `${text(question.question)}\n${text(question.passageOrCode)}`;
  for (const [pattern, topic] of [
    [/데이터베이스|SQL|정규화|트랜잭션|관계 대수|릴레이션|데이터 모델|인덱스/i, '데이터베이스'],
    [/네트워크|프로토콜|IP 주소|서브넷|라우팅|TCP|OSI/i, '네트워크'],
    [/보안|암호|공격|인증|취약점/, '정보보안'],
    [/테스트|테스팅|커버리지|결함/, '소프트웨어 테스트'],
    [/스케줄링|프로세스|페이지|교착|운영체제/, '운영체제'],
    [/디자인 패턴|객체지향|UML|응집도|결합도/i, '소프트웨어 설계'],
  ]) if (pattern.test(body)) return topic;
  return '정보처리기사 실기 개념';
}

// imageText is an extension point for a future OCR/vision pipeline. URLs are not semantic content.
export function normalizeQuestion(exam, question, { imageText = '' } = {}) {
  if (!exam || !/^\d{4}-\d+$/.test(exam.key) || !Number.isInteger(Number(exam.year)) ||
    !Number.isInteger(exam.round) || exam.round < 1 || exam.key !== `${exam.year}-${exam.round}` ||
    !question || !Number.isInteger(question.id)) return null;
  if (question.question != null && typeof question.question !== 'string') return null;
  if (question.passageOrCode != null && typeof question.passageOrCode !== 'string') return null;
  if (question.options != null && (!Array.isArray(question.options) || !question.options.every(option => typeof option === 'string'))) return null;
  if (typeof question.answer !== 'string' || !question.answer.trim()) return null;
  const title = text(question.question).trim();
  const passage = text(question.passageOrCode);
  const options = question.options || [];
  if (![title, passage, ...options, text(imageText)].some(value => value.trim())) return null;
  const language = getCodeLanguage(question) || '';
  const topic = questionTopic(question, language);
  const document = [
    '정보처리기사 실기 기출문제',
    `유형: ${language ? '코드' : '개념'} / 주제: ${topic}`,
    language && `프로그래밍 언어: ${language}`,
    title && `문제:\n${title}`,
    passage.trim() && `지문 또는 코드:\n${passage}`,
    options.length && `선택지:\n${options.join('\n')}`,
    text(imageText).trim() && `이미지에서 추출한 내용:\n${imageText}`,
  ].filter(Boolean).join('\n\n');
  const metadata = {
    questionId: question.id, examKey: exam.key, year: Number(exam.year), round: exam.round,
    answer: question.answer, sourceFile: `src/assets/pstData/${exam.key}.js`,
    hasImage: Boolean(question.imageUrl), imageTextAvailable: Boolean(text(imageText).trim()),
    questionType: language ? 'code' : 'concept', language, topic, documentVersion: DOCUMENT_VERSION,
  };
  // Includes official answers and alternatives so edited source rows cannot map to stale vectors.
  metadata.contentHash = createHash('sha256').update(JSON.stringify({ document, metadata, alt: question.alt, alts: question.alts })).digest('hex');
  return { id: `${exam.key}:${question.id}`, document, metadata, question };
}

export function createQuestionCatalog(exams = pstExams) {
  const records = new Map();
  const byQuestionId = new Map();
  const stats = [];
  for (const exam of exams) {
    let skipped = 0;
    let count = 0;
    for (const question of Array.isArray(exam.questions) ? exam.questions : []) {
      const record = normalizeQuestion(exam, question);
      if (!record || records.has(record.id)) { skipped++; continue; }
      records.set(record.id, record);
      byQuestionId.set(question.id, record);
      count++;
    }
    stats.push({ examKey: exam.key, count, skipped });
  }
  return { records, byQuestionId, stats };
}

export const questionCatalog = createQuestionCatalog();
