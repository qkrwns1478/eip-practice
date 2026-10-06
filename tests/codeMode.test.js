import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parse, compileScript } from '@vue/compiler-sfc';
import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { pstData, pstExams } from '../src/assets/pstData.js';
import { codeLanguages, getCodeLanguage, getCodeQuestions } from '../src/utils/codeQuestions.js';
import { getCodeTrace } from '../src/assets/codeTraces.js';

const source = readFileSync(new URL('../src/components/PstQuiz.vue', import.meta.url), 'utf8');
const script = source.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/^import .*;\r?$/gm, '').replace('export default', 'return');
function createQuiz(storage = new Map()) {
  const localStorage = { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value), removeItem: key => storage.delete(key) };
  const options = new Function('pstData', 'pstExams', 'CodeVisualizer', 'codeLanguages', 'getCodeLanguage', 'getCodeQuestions', 'localStorage', script)(pstData, pstExams, {}, codeLanguages, getCodeLanguage, getCodeQuestions, localStorage);
  const quiz = { ...options.data(), $refs: {}, $nextTick: callback => callback() };
  for (const [name, method] of Object.entries(options.methods)) quiz[name] = method.bind(quiz);
  for (const [name, getter] of Object.entries(options.computed)) Object.defineProperty(quiz, name, { get: getter.bind(quiz) });
  quiz.mount = () => options.mounted.call(quiz);
  return quiz;
}
const question = id => pstData.find(q => q.id === id);
const final = id => getCodeTrace(question(id)).steps.at(-1);

test('classifies source-only questions, including uppercase JAVA, syntax-only and blank exercises', () => {
  assert.equal(getCodeLanguage(question(122)), 'Java');
  assert.equal(getCodeLanguage(question(109)), 'C');
  assert.equal(getCodeLanguage(question(154)), 'Python');
  assert.equal(getCodeLanguage(question(228)), 'Java');
  assert.equal(getCodeLanguage({ question: 'Java 설명', passageOrCode: null }), null);
  assert.equal(getCodeLanguage({ question: 'SQL', passageOrCode: 'CREATE TABLE foo (name VARCHAR(20));' }), 'SQL');
  assert.deepEqual(codeLanguages.map(language => getCodeQuestions(pstData, language).length), [48, 42, 19, 22]);
});

test('SQL classification includes queries in options and images, and query-writing conditions', () => {
  for (const id of [7, 113, 116, 137, 146, 183, 272, 273, 274, 279]) {
    assert.equal(getCodeLanguage(question(id)), 'SQL', `SQL question ${id}`);
  }
  assert.equal(getCodeLanguage({ question: 'SQL이란 무엇인가?', passageOrCode: null }), null);
  assert.equal(getCodeLanguage(question(159)), null); // Relational algebra is not a SQL exercise.
  assert.equal(getCodeLanguage({ question: '실행 결과', passageOrCode: 'select count(*) from employees;' }), 'SQL');
});

test('every code question has bounded source anchors and an initial frame without spoilers', () => {
  for (const q of getCodeQuestions(pstData).filter(q => getCodeLanguage(q) !== 'SQL')) {
    const trace = getCodeTrace(q);
    assert.ok(trace, `missing trace ${q.id}`);
    assert.equal(trace.steps[0].output, '');
    assert.deepEqual(trace.steps[0].variables, {});
    for (const frame of trace.steps.slice(1)) {
      assert.ok(frame.line >= 1 && frame.line <= q.passageOrCode.split('\n').length, `invalid anchor ${q.id}: ${frame.at}`);
      assert.ok(frame.explanation);
    }
  }
});

test('SQL sessions filter by exam, grade and restore questions without inline source', () => {
  const storage = new Map();
  const quiz = createQuiz(storage);
  quiz.selectedCodeLanguage = 'SQL';
  quiz.selectedCodeExamKey = '2026-2';
  quiz.codeQuestionOrder = 'ordered';
  assert.deepEqual(quiz.filteredCodeQuestions.map(q => q.id), [272, 273, 274, 279]);
  quiz.startCodeQuiz();
  assert.equal(quiz.currentQuestion.passageOrCode, null);
  assert.match(quiz.questionTitle, /SQL 코드 문제/);
  quiz.userAnswer = quiz.currentQuestion.answer;
  quiz.checkAnswer();
  assert.equal(quiz.isCorrect, true);
  assert.equal(quiz.correctCount, 1);
  const restored = createQuiz(storage);
  restored.loadProgress();
  assert.equal(restored.selectedCodeLanguage, 'SQL');
  assert.equal(restored.currentQuestion.id, 272);
  assert.equal(restored.answered, true);
  restored.nextQuestion();
  assert.equal(restored.currentQuestion.id, 273);
});

test('teaching traces calculate memory updates, recursion and overloads', () => {
  assert.deepEqual(final(11).variables.arr, [[9, 5, 2], [7, 4, 1], [8, 3, 6]]);
  assert.equal(final(11).output, '13');
  assert.deepEqual(final(96).variables.arr, [3, 2, 1, 4, 4]);
  assert.deepEqual(final(254).variables.m, [[1], [2, 1], [3, 2, 1], [4, 3, 2, 1]]);
  assert.equal(final(13).variables.total, 54);
  assert.equal(final(148).output, '5040');
  assert.equal(final(151).output, '2');
  assert.equal(final(278).output, '1');
  assert.equal(final(247).output, '2');
  assert.equal(final(193).output, 'REMEMBER AND STR');
  assert.equal(final(252).output, '20');
  assert.equal(final(197).output, '61');
  assert.match(getCodeTrace(question(197)).note, /56/);
  const trace = getCodeTrace(question(13));
  const original = trace.steps[1].variables.total;
  final(13).variables.total = -1;
  assert.equal(getCodeTrace(question(13)).steps[1].variables.total, original);
});

test('language and exam filtering creates an ordered, isolated code session', () => {
  const quiz = createQuiz();
  quiz.selectedCodeLanguage = 'Python';
  quiz.selectedCodeExamKey = '2025-1';
  quiz.codeQuestionOrder = 'ordered';
  assert.deepEqual(quiz.filteredCodeQuestions.map(q => q.id), [17]);
  quiz.startCodeQuiz();
  assert.equal(quiz.playMode, 'code');
  assert.equal(quiz.currentQuestion.id, 17);
  assert.deepEqual(quiz.usedQuestions, []);
  quiz.userAnswer = '13';
  quiz.checkAnswer();
  quiz.checkAnswer();
  assert.equal(quiz.totalCount, 1);
  assert.equal(quiz.correctCount, 1);
  assert.deepEqual(quiz.solvedQuestions, [17]);
  quiz.toggleBookmark();
  assert.deepEqual(quiz.bookmarkedQuestions, [17]);
  quiz.nextQuestion();
  assert.equal(quiz.showMode, 'codePicker');
  assert.equal(quiz.currentQuestion, null);
});

test('random order contains every selected question once; skip resets answer without recording a solve', () => {
  const quiz = createQuiz();
  quiz.selectedCodeLanguage = 'all';
  quiz.selectedCodeExamKey = '2025-1';
  const ids = quiz.filteredCodeQuestions.map(q => q.id);
  quiz.startCodeQuiz();
  assert.deepEqual([...quiz.codeSessionIds].sort((a, b) => a - b), [...ids].sort((a, b) => a - b));
  quiz.userAnswer = 'unfinished';
  quiz.skipQuestion();
  assert.equal(quiz.currentQuestion.id, quiz.codeSessionIds[1]);
  assert.equal(quiz.userAnswer, '');
  assert.equal(quiz.totalCount, 0);
  assert.equal(quiz.answered, false);
  assert.equal(quiz.currentQuestionIndex, 1);
});

test('loading restores code queue and grading; entering past exams opens the random quiz', () => {
  const storage = new Map();
  const quiz = createQuiz(storage);
  quiz.startCodeQuiz();
  quiz.skipQuestion();
  quiz.userAnswer = 'wrong answer';
  quiz.checkAnswer();
  const restored = createQuiz(storage);
  restored.loadProgress();
  assert.equal(restored.playMode, 'code');
  assert.equal(restored.currentQuestion.id, quiz.currentQuestion.id);
  assert.equal(restored.currentQuestionIndex, 1);
  assert.deepEqual(restored.codeSessionIds, quiz.codeSessionIds);
  assert.equal(restored.answered, true);
  assert.equal(restored.userAnswer, 'wrong answer');
  assert.ok(restored.wrongQuestions.includes(quiz.currentQuestion.id));
  restored.mount();
  assert.equal(restored.playMode, 'random');
  assert.equal(restored.showMode, 'quiz');
  assert.equal(restored.answered, false);
  assert.equal(restored.userAnswer, '');
  assert.equal(restored.totalCount, quiz.totalCount);
  assert.deepEqual(restored.codeSessionIds, quiz.codeSessionIds);
  assert.ok(restored.usedQuestions.includes(restored.currentQuestion.id));
});

test('completed and invalid saved code sessions open the random quiz; legacy saves still restore', () => {
  const storage = new Map();
  const quiz = createQuiz(storage);
  quiz.selectedCodeLanguage = 'Python';
  quiz.selectedCodeExamKey = '2025-1';
  quiz.startCodeQuiz();
  quiz.nextQuestion();
  const restored = createQuiz(storage);
  restored.mount();
  assert.equal(restored.showMode, 'quiz');
  assert.equal(restored.playMode, 'random');
  assert.ok(restored.currentQuestion);
  storage.set('pstQuiz_progress', JSON.stringify({ playMode: 'code', codeSessionIds: [999999], currentQuestion: question(5) }));
  const invalid = createQuiz(storage);
  invalid.mount();
  assert.equal(invalid.showMode, 'quiz');
  assert.equal(invalid.playMode, 'random');
  assert.ok(invalid.currentQuestion);
  storage.set('pstQuiz_progress', JSON.stringify({ currentQuestion: question(5), correctCount: 3 }));
  const legacy = createQuiz(storage);
  legacy.mount();
  assert.equal(legacy.playMode, 'random');
  assert.equal(legacy.currentQuestion.id, 5);
  assert.equal(legacy.correctCount, 3);
});

test('exam and review practice continue to use the existing grading flow', () => {
  const quiz = createQuiz();
  quiz.selectedExamKey = '2025-1';
  quiz.startMockExamQuiz();
  assert.equal(quiz.playMode, 'mockExam');
  assert.equal(quiz.currentQuestion.id, pstExams.find(e => e.key === '2025-1').questions[0].id);
  quiz.nextQuestion();
  assert.equal(quiz.currentQuestionIndex, 1);
  quiz.startBookmarkedQuestion(17);
  assert.equal(quiz.playMode, 'review');
  assert.equal(quiz.currentQuestion.id, 17);
});

test('visualizer renders numbered code with hidden output before reveal, and trace controls after grading', async () => {
  const filename = new URL('../src/components/CodeVisualizer.vue', import.meta.url);
  const { descriptor } = parse(readFileSync(filename, 'utf8'), { filename: filename.pathname });
  let content = compileScript(descriptor, { id: 'visualizer-test', inlineTemplate: true }).content;
  content = content.replaceAll('from "vue"', `from ${JSON.stringify(import.meta.resolve('vue'))}`)
    .replaceAll("from 'vue'", `from ${JSON.stringify(import.meta.resolve('vue'))}`)
    .replace("from '../assets/codeTraces.js'", `from ${JSON.stringify(new URL('../src/assets/codeTraces.js', import.meta.url).href)}`);
  const { default: Visualizer } = await import(`data:text/javascript,${encodeURIComponent(content)}`);
  const hidden = await renderToString(createSSRApp(Visualizer, { question: question(13), language: 'Java', answered: false }));
  assert.match(hidden, /trace-source/);
  assert.match(hidden, /line-number/);
  assert.match(hidden, /실행 해설 보기/);
  assert.doesNotMatch(hidden, /trace-output/);
  const revealed = await renderToString(createSSRApp(Visualizer, { question: question(13), language: 'Java', answered: true }));
  assert.match(revealed, /기출 코드 해설 시뮬레이션/);
  assert.match(revealed, /자동 재생/);
  assert.match(revealed, /실행 단계 선택/);
  assert.match(revealed, /아직 출력이 없습니다/);
});
