import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { parse, compileTemplate } from '@vue/compiler-sfc';
import * as Vue from 'vue';
import { renderToString } from '@vue/server-renderer';
import { geoData } from '../src/assets/geoData.js';
import { keywordData, excludedKeywordQuestions } from '../src/assets/keywordData.js';

const source = readFileSync(new URL('../src/components/GeoQuiz.vue', import.meta.url), 'utf8');
const script = source.match(/<script>([\s\S]*?)<\/script>/)[1]
  .replace(/^import .*;\r?$/gm, '').replace('export default', 'return');
function createQuiz(questions, storagePrefix, storage = new Map(), initialView = 'quiz') {
  const localStorage = { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value), removeItem: key => storage.delete(key) };
  const options = new Function('geoData', 'localStorage', script)(geoData, localStorage);
  const props = { questions, storagePrefix, initialView };
  const quiz = { ...props, ...options.data.call(props), $refs: {}, $nextTick: callback => callback() };
  for (const [name, method] of Object.entries(options.methods)) quiz[name] = method.bind(quiz);
  for (const [name, getter] of Object.entries(options.computed)) Object.defineProperty(quiz, name, { get: getter.bind(quiz) });
  quiz.unmount = () => options.beforeUnmount.call(quiz);
  quiz.mount = () => options.mounted.call(quiz);
  return quiz;
}

test('all 130 source numbers are included or explicitly excluded, and figures exist', () => {
  const roots = keywordData.filter(q => q.id);
  assert.equal(roots.length, 113);
  const numbers = [...roots.map(q => q.id), ...excludedKeywordQuestions];
  assert.equal(new Set(numbers).size, 130);
  assert.deepEqual(numbers.sort((a, b) => a - b), Array.from({ length: 130 }, (_, i) => i + 1));
  for (const q of roots) {
    assert.ok(q.desc || keywordData.some(child => child.parentId === q.id));
    if (q.image) assert.ok(existsSync(new URL(`../public${q.image}`, import.meta.url)));
  }
  for (const child of keywordData.filter(q => q.parentId)) {
    assert.ok(roots.some(q => q.id === child.parentId));
    assert.ok(child.desc && child.keyword);
  }
});

test('opening study and switching question modes does not draw questions or change learning progress', () => {
  const storage = new Map();
  for (const questions of [keywordData, geoData]) {
    const quiz = createQuiz(questions, questions === geoData ? 'geoQuiz' : 'keywordQuiz', storage, 'study');
    quiz.mount();
    assert.equal(quiz.showMode, 'study');
    assert.equal(quiz.currentQuestion, null);
    assert.deepEqual(quiz.usedQuestions, []);
    assert.equal(quiz.totalCount, 0);
    assert.equal(quiz.studyQuestions.length, questions.filter(q => q.id).length);
    quiz.unmount();
  }
  assert.equal(storage.size, 0);
});

function compileRender(source) {
  const { descriptor } = parse(source);
  const { code, errors } = compileTemplate({ source: descriptor.template.content, id: 'keyword-view-test' });
  assert.deepEqual(errors, []);
  const renderCode = code.replace(/import \{([^}]+)\} from "vue"/, (_, helpers) => `const {${helpers.replace(/ as /g, ': ')}} = Vue;`)
    .replace('export function render', 'function render');
  return new Function('Vue', `${renderCode}; return render;`)(Vue);
}

test('study renders keyword questions, multi-part answers and diagrams without quiz inputs; legacy concepts remain intact', async () => {
  const options = new Function('geoData', 'localStorage', script)(geoData, { getItem: () => null });
  options.render = compileRender(source);
  const keyword = await renderToString(Vue.createSSRApp(options, { questions: keywordData, initialView: 'study', questionStudy: true }));
  assert.equal((keyword.match(/class="study-card"/g) || []).length, 113);
  assert.match(keyword, /시제품을 끊임없이/);
  assert.match(keyword, /<strong>정답<\/strong> 애자일/);
  assert.match(keyword, /<strong>정답<\/strong> 비기능/);
  assert.match(keyword, /<strong>정답<\/strong> CVS, Git, SVN/);
  for (const id of [7, 14, 40, 66, 98]) assert.match(keyword, new RegExp(`/images/keyword/${id}\\.png`));
  assert.doesNotMatch(keyword, /<input|원문 \d+번/);
  const legacy = await renderToString(Vue.createSSRApp(options, { questions: geoData, initialView: 'study' }));
  assert.match(legacy, /<h4>살충제 패러독스<\/h4>/);
  assert.match(legacy, /프로토콜의 3요소/);
  assert.doesNotMatch(legacy, /class="study-answer"/);
});

test('mode selector renders inside the existing toolbar and preserves the current study/review view', async () => {
  const wrapperSource = readFileSync(new URL('../src/components/KeywordQuiz.vue', import.meta.url), 'utf8');
  const wrapperScript = wrapperSource.match(/<script>([\s\S]*?)<\/script>/)[1]
    .replace(/^import .*;\r?$/gm, '').replace('export default', 'return');
  const quizOptions = new Function('geoData', 'localStorage', script)(geoData, { getItem: () => null });
  quizOptions.render = compileRender(source);
  const options = new Function('GeoQuiz', 'geoData', 'keywordData', 'localStorage', wrapperScript)(quizOptions, geoData, keywordData, { getItem: () => null, setItem: () => {} });
  options.render = compileRender(wrapperSource);
  const html = await renderToString(Vue.createSSRApp(options));
  assert.match(html.replace(/<!--[\s\S]*?-->/g, ''), /class="menu-bar icon-menu-bar"><select class="keyword-mode-select"/);
  assert.doesNotMatch(html, /keyword-header|<h1/);
  for (const view of ['study', 'bookmarks', 'wrong', 'stats']) {
    const state = { ...options.data(), $refs: { quiz: { showMode: view } } };
    options.methods.selectMode.call(state, 'geo');
    assert.equal(state.activeView, view);
    assert.equal(state.selectedMode, 'geo');
  }
});

test('keyword grading accepts aliases and unordered sets while rejecting duplicates and missing answers', () => {
  const quiz = createQuiz(keywordData, 'keywordQuiz');
  const question = id => keywordData.find(q => q.id === id);
  assert.equal(quiz.matchesAnswer(question(1), ' AGILE '), true);
  assert.equal(quiz.matchesAnswer(question(128), 'svn, CVS, git'), true);
  assert.equal(quiz.matchesAnswer(question(128), 'CVS,Git,Git'), false);
  assert.equal(quiz.matchesAnswer(question(128), 'Git,SVN'), false);
  assert.equal(quiz.matchesAnswer(question(128), 'CSV,Git,SVN'), false);
  assert.equal(quiz.matchesAnswer(question(109), 'Timing, 의미, 구문'), true);
  quiz.setupQuestion(question(128));
  quiz.userAnswer = 'Git, SVN, CVS';
  quiz.checkAnswer();
  assert.equal(quiz.isCorrect, true);
  assert.equal(quiz.correctCount, 1);
});

test('switching modes preserves legacy progress and incomplete multi-answer questions separately', () => {
  const storage = new Map();
  const geo = createQuiz(geoData, 'geoQuiz', storage);
  geo.setupQuestion(geoData.find(q => q.id === 1));
  geo.userAnswer = geo.currentQuestion.keyword;
  geo.checkAnswer();
  geo.toggleBookmark();
  const legacy = storage.get('geoQuiz_progress');

  const keyword = createQuiz(keywordData, 'keywordQuiz', storage);
  keyword.setupQuestion(keywordData.find(q => q.id === 3));
  keyword.currentQuestion.subItems[0].userAnswer = '기능';
  keyword.checkSubAnswer(0);
  keyword.currentQuestion.subItems[1].userAnswer = '비';
  keyword.toggleBookmark();
  keyword.unmount();
  assert.equal(storage.get('geoQuiz_progress'), legacy);

  const resumed = createQuiz(keywordData, 'keywordQuiz', storage);
  resumed.loadProgress();
  assert.equal(resumed.currentQuestion.id, 3);
  assert.equal(resumed.currentQuestion.subItems[0].answered, true);
  assert.equal(resumed.currentQuestion.subItems[1].userAnswer, '비');
  assert.deepEqual(resumed.usedQuestions, [3]);
  assert.deepEqual(resumed.bookmarkedQuestions, [3]);
  assert.equal(resumed.answered, false);
  assert.equal(resumed.correctCount, 1);

  const restoredGeo = createQuiz(geoData, 'geoQuiz', storage);
  restoredGeo.loadProgress();
  assert.equal(restoredGeo.currentQuestion.id, 1);
  assert.equal(restoredGeo.answered, true);
  assert.deepEqual(restoredGeo.bookmarkedQuestions, [1]);
});

test('reset only clears progress of the selected mode', () => {
  const storage = new Map([['geoQuiz_progress', 'legacy'], ['geoQuiz_lastSession', 'legacy-date']]);
  const quiz = createQuiz(keywordData, 'keywordQuiz', storage);
  quiz.setupQuestion(keywordData.find(q => q.id === 1));
  quiz.userAnswer = 'wrong';
  quiz.checkAnswer();
  quiz.resetProgress();
  quiz.confirmModal.onConfirm();
  assert.equal(storage.get('geoQuiz_progress'), 'legacy');
  assert.equal(storage.get('geoQuiz_lastSession'), 'legacy-date');
  assert.equal(quiz.totalCount, 0);
  assert.deepEqual(quiz.wrongQuestions, []);
});
