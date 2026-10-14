import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parse, compileTemplate } from '@vue/compiler-sfc';
import * as Vue from 'vue';
import { pstData, pstExams } from '../src/assets/pstData.js';
import { codeLanguages, getCodeLanguage, getCodeQuestions } from '../src/utils/codeQuestions.js';

function loadOptions(path, bindings) {
  const { descriptor } = parse(readFileSync(new URL(path, import.meta.url), 'utf8'));
  const script = descriptor.script.content
    .replace(/^import .*;\r?$/gm, '')
    .replace('export default', 'return');
  return {
    options: new Function(...Object.keys(bindings), script)(...Object.values(bindings)),
    template: descriptor.template.content,
  };
}

function createQuiz(storage = new Map()) {
  const { options } = loadOptions('../src/components/PstQuiz.vue', {
    pstData, pstExams, CodeVisualizer: {}, codeLanguages, getCodeLanguage, getCodeQuestions,
    localStorage: {
      getItem: (key) => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
      removeItem: (key) => storage.delete(key),
    },
  });
  const quiz = { ...options.data(), $refs: {}, $nextTick: (callback) => callback() };
  for (const [name, method] of Object.entries(options.methods)) quiz[name] = method.bind(quiz);
  for (const [name, getter] of Object.entries(options.computed)) {
    Object.defineProperty(quiz, name, { get: getter.bind(quiz) });
  }
  quiz.mount = () => options.mounted.call(quiz);
  return quiz;
}

for (const destination of ['random', 'bookmarks', 'wrong', 'code']) {
  for (const graded of [false, true]) {
    test(`mock exam resumes after ${destination} practice with ${graded ? 'grading' : 'a draft'}`, () => {
      const storage = new Map();
      const quiz = createQuiz(storage);
      quiz.selectedExamKey = '2021-1';
      quiz.startMockExamQuiz();
      quiz.nextQuestion();
      const questionId = quiz.currentQuestion.id;
      quiz.userAnswer = graded ? quiz.currentQuestion.answer : '작성 중인 답';
      if (graded) quiz.checkAnswer();
      const answer = quiz.userAnswer;

      if (destination === 'random') quiz.openRandomQuiz();
      else if (destination === 'code') { quiz.openCodeMode(); quiz.startCodeQuiz(); }
      else {
        quiz.showMode = destination;
        quiz.startReviewQuestion(pstData[0].id, destination);
      }
      quiz.userAnswer = quiz.currentQuestion.answer;
      quiz.checkAnswer();
      quiz.nextQuestion();
      const totalCount = quiz.totalCount;
      quiz.openMockExamMode();
      assert.equal(quiz.showMode, 'quiz');
      assert.equal(quiz.playMode, 'mockExam');
      assert.equal(quiz.selectedExamKey, '2021-1');
      assert.equal(quiz.currentQuestionIndex, 1);
      assert.equal(quiz.currentQuestion.id, questionId);
      assert.equal(quiz.userAnswer, answer);
      assert.equal(quiz.answered, graded);
      assert.equal(quiz.isCorrect, graded);
      assert.equal(quiz.totalCount, totalCount);
      // Selecting the same round also resumes rather than starting over.
      quiz.showMode = 'mockExam';
      quiz.startMockExamQuiz();
      assert.equal(quiz.currentQuestionIndex, 1);
      assert.equal(quiz.userAnswer, answer);

      quiz.openRandomQuiz();
      const restored = createQuiz(storage);
      restored.mount();
      restored.openMockExamMode();
      assert.equal(restored.currentQuestion.id, questionId);
      assert.equal(restored.userAnswer, answer);
      assert.equal(restored.answered, graded);
      restored.nextQuestion();
      assert.equal(restored.currentQuestionIndex, 2);
    });
  }
}

test('completed and explicitly reset mock exams start at the first question', () => {
  const quiz = createQuiz();
  quiz.startMockExamQuiz();
  for (let i = 0; i < quiz.mockExamQuestions.length; i++) quiz.nextQuestion();
  assert.equal(quiz.mockExamSession, null);
  quiz.openMockExamMode();
  assert.equal(quiz.showMode, 'mockExam');
  quiz.startMockExamQuiz();
  assert.equal(quiz.currentQuestionIndex, 0);
  quiz.nextQuestion();
  quiz.openRandomQuiz();
  quiz.resetProgress();
  quiz.confirmModal.onConfirm();
  assert.equal(quiz.mockExamSession, null);
  quiz.openMockExamMode();
  assert.equal(quiz.showMode, 'mockExam');
});

test('mock exam question five never changes the random quiz number or answer', () => {
  const quiz = createQuiz();
  quiz.mount();
  const firstRandomId = quiz.currentQuestion.id;
  quiz.userAnswer = '퀴즈 첫 답안';
  quiz.startMockExamQuiz();
  for (let i = 0; i < 4; i++) quiz.nextQuestion();
  const examId = quiz.currentQuestion.id;
  quiz.userAnswer = '모의고사 5번 답안';
  quiz.openRandomQuiz();
  assert.equal(quiz.currentQuestionIndex, 0);
  assert.equal(quiz.questionTitle, '문제 1');
  assert.equal(quiz.currentQuestion.id, firstRandomId);
  assert.equal(quiz.userAnswer, '퀴즈 첫 답안');
  quiz.nextQuestion();
  quiz.nextQuestion();
  const randomId = quiz.currentQuestion.id;
  quiz.userAnswer = quiz.currentQuestion.answer;
  quiz.checkAnswer();
  const totalCount = quiz.totalCount;
  for (let i = 0; i < 3; i++) {
    quiz.openMockExamMode();
    assert.equal(quiz.currentQuestionIndex, 4);
    assert.equal(quiz.currentQuestion.id, examId);
    assert.equal(quiz.userAnswer, '모의고사 5번 답안');
    assert.equal(quiz.answered, false);
    quiz.openRandomQuiz();
    assert.equal(quiz.questionTitle, '문제 3');
    assert.equal(quiz.currentQuestion.id, randomId);
    assert.equal(quiz.userAnswer, quiz.currentQuestion.answer);
    assert.equal(quiz.answered, true);
    assert.equal(quiz.isCorrect, true);
    quiz.checkAnswer();
    assert.equal(quiz.totalCount, totalCount);
  }
});

test('first random session starts at question one when loaded progress belongs to a mock exam', () => {
  const storage = new Map();
  const quiz = createQuiz(storage);
  quiz.startMockExamQuiz();
  for (let i = 0; i < 4; i++) quiz.nextQuestion();
  const restored = createQuiz(storage);
  restored.mount();
  assert.equal(restored.questionTitle, '문제 1');
  assert.equal(restored.userAnswer, '');
  assert.equal(restored.answered, false);
  restored.openMockExamMode();
  assert.equal(restored.currentQuestionIndex, 4);
});

test('random, code, bookmark and wrong review sessions resume independently, including after reload', () => {
  const storage = new Map();
  const quiz = createQuiz(storage);
  quiz.mount();
  quiz.nextQuestion();
  quiz.userAnswer = '무작위 퀴즈 답';
  const randomId = quiz.currentQuestion.id;
  quiz.startCodeQuiz();
  quiz.nextQuestion();
  const codeIds = [...quiz.codeSessionIds];
  quiz.userAnswer = '코드 답';
  quiz.bookmarkedQuestions = pstData.slice(0, 3).map(q => q.id);
  quiz.wrongQuestions = pstData.slice(3, 6).map(q => q.id);
  quiz.startBookmarkedQuestion(quiz.bookmarkedQuestions[1]);
  quiz.userAnswer = quiz.currentQuestion.answer;
  quiz.checkAnswer();
  const bookmarkId = quiz.currentQuestion.id;
  quiz.startWrongQuestion(quiz.wrongQuestions[2]);
  const wrongId = quiz.currentQuestion.id;
  quiz.userAnswer = '오답 복습 답';
  quiz.startMockExamQuiz();
  quiz.nextQuestion();
  const totalCount = quiz.totalCount;

  const restored = createQuiz(storage);
  restored.mount();
  assert.equal(restored.currentQuestion.id, randomId);
  assert.equal(restored.currentQuestionIndex, 1);
  assert.equal(restored.userAnswer, '무작위 퀴즈 답');
  restored.openCodeMode();
  restored.resumeCodeQuiz();
  assert.deepEqual(restored.codeSessionIds, codeIds);
  assert.equal(restored.currentQuestion.id, codeIds[1]);
  assert.equal(restored.currentQuestionIndex, 1);
  assert.equal(restored.userAnswer, '코드 답');
  restored.startBookmarkedQuestion(bookmarkId);
  assert.equal(restored.currentQuestion.id, bookmarkId);
  assert.equal(restored.currentQuestionIndex, 1);
  assert.equal(restored.answered, true);
  assert.equal(restored.isCorrect, true);
  restored.startWrongQuestion(wrongId);
  assert.equal(restored.currentQuestionIndex, 2);
  assert.equal(restored.userAnswer, '오답 복습 답');
  assert.equal(restored.answered, false);
  restored.openMockExamMode();
  assert.equal(restored.currentQuestionIndex, 1);
  assert.equal(restored.userAnswer, '');
  assert.equal(restored.totalCount, totalCount);
});

// Exercise Vue's actual mounting and caching without a browser dependency.
function createRenderer() {
  const node = (text = '') => ({ text, children: [], parent: null });
  const remove = (child) => {
    if (child.parent) {
      const siblings = child.parent.children;
      siblings.splice(siblings.indexOf(child), 1);
      child.parent = null;
    }
  };
  return Vue.createRenderer({
    createElement: () => node(),
    createText: node,
    createComment: node,
    setText: (target, text) => { target.text = text; },
    setElementText: (target, text) => { target.text = text; },
    parentNode: (target) => target.parent,
    nextSibling: (target) => {
      const siblings = target.parent?.children || [];
      return siblings[siblings.indexOf(target) + 1] || null;
    },
    patchProp: () => {},
    remove,
    insert: (child, parent, anchor = null) => {
      remove(child);
      const index = anchor ? parent.children.indexOf(anchor) : parent.children.length;
      parent.children.splice(index, 0, child);
      child.parent = parent;
    },
  });
}

test('past exam tab preserves the mock exam, draft and grading across tab switches', async () => {
  const storage = new Map();
  const localStorage = {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  };
  const { options: PstQuiz } = loadOptions('../src/components/PstQuiz.vue', {
    pstData, pstExams, CodeVisualizer: {}, codeLanguages,
    getCodeLanguage, getCodeQuestions, localStorage,
  });
  let quiz;
  let mountCount = 0;
  const mount = PstQuiz.mounted;
  PstQuiz.mounted = function () {
    quiz = this;
    mountCount++;
    mount.call(this);
  };
  PstQuiz.render = () => Vue.h('div');
  const KeywordQuiz = { render: () => Vue.h('div') };
  const { options: App, template } = loadOptions('../src/App.vue', {
    KeywordQuiz, PstQuiz, localStorage,
  });
  const { code, errors } = compileTemplate({
    source: template, filename: 'App.vue', id: 'tab-test',
    compilerOptions: { hoistStatic: false },
  });
  assert.deepEqual(errors, []);
  const helpers = code.match(/import \{(.+?)\} from "vue"/)[1]
    .replace(/ as /g, ':');
  App.render = new Function('Vue', code
    .replace(/import \{.+?\} from "vue"/, `const {${helpers}} = Vue`)
    .replace('export function render', 'return function render'))(Vue);
  const app = createRenderer().createApp(App);
  const root = app.mount({ children: [], parent: null });
  try {
    root.currentTab = 'PstQuiz';
    await Vue.nextTick();
    const firstInstance = quiz;
    quiz.selectedExamKey = '2021-1';
    quiz.startMockExamQuiz();
    quiz.userAnswer = quiz.currentQuestion.answer;
    quiz.checkAnswer();
    quiz.nextQuestion();
    quiz.userAnswer = '입력 중인 답안';
    const questionId = quiz.currentQuestion.id;

    async function switchTabs() {
      root.currentTab = 'GeoQuiz';
      await Vue.nextTick();
      root.currentTab = 'PstQuiz';
      await Vue.nextTick();
      assert.equal(quiz, firstInstance);
      assert.equal(mountCount, 1);
      assert.equal(quiz.playMode, 'mockExam');
      assert.equal(quiz.selectedExamKey, '2021-1');
      assert.equal(quiz.currentQuestionIndex, 1);
      assert.equal(quiz.currentQuestion.id, questionId);
      assert.equal(quiz.showMode, 'quiz');
    }

    await switchTabs();
    assert.equal(quiz.userAnswer, '입력 중인 답안');
    assert.equal(quiz.answered, false);
    assert.equal(quiz.correctCount, 1);
    assert.equal(quiz.totalCount, 1);

    quiz.userAnswer = quiz.currentQuestion.answer;
    quiz.checkAnswer();
    await switchTabs();
    assert.equal(quiz.userAnswer, quiz.currentQuestion.answer);
    assert.equal(quiz.answered, true);
    assert.equal(quiz.isCorrect, true);
    assert.equal(quiz.correctCount, 2);
    assert.equal(quiz.totalCount, 2);
    quiz.checkAnswer();
    assert.equal(quiz.totalCount, 2);
    quiz.nextQuestion();
    assert.equal(quiz.currentQuestionIndex, 2);
  } finally {
    app.unmount();
  }
});
