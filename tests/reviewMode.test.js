import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { pstData, pstExams } from '../src/assets/pstData.js';
import { geoData } from '../src/assets/geoData.js';
import { keywordData } from '../src/assets/keywordData.js';
import { codeLanguages, getCodeLanguage, getCodeQuestions } from '../src/utils/codeQuestions.js';

function createQuiz(component, questions, storage = new Map()) {
  const source = readFileSync(new URL(`../src/components/${component}.vue`, import.meta.url), 'utf8');
  const script = source.match(/<script>([\s\S]*?)<\/script>/)[1]
    .replace(/^import .*;\r?$/gm, '').replace('export default', 'return');
  const localStorage = {
    getItem: key => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
    removeItem: key => storage.delete(key)
  };
  const options = new Function('pstData', 'pstExams', 'geoData', 'CodeVisualizer',
    'codeLanguages', 'getCodeLanguage', 'getCodeQuestions', 'localStorage', script)(
    pstData, pstExams, geoData, {}, codeLanguages, getCodeLanguage, getCodeQuestions, localStorage);
  const props = { questions, storagePrefix: 'reviewTest', initialView: 'quiz' };
  const quiz = { ...props, ...options.data.call(props), $refs: {}, $nextTick: callback => callback() };
  for (const [name, method] of Object.entries(options.methods)) quiz[name] = method.bind(quiz);
  return quiz;
}

for (const [label, component, questions] of [
  ['past exams', 'PstQuiz', pstData],
  ['concepts', 'GeoQuiz', geoData],
  ['keywords', 'GeoQuiz', keywordData]
]) {
  const ids = questions.filter(q => q.id).slice(0, 4).map(q => q.id);
  for (const [source, field, start] of [
    ['wrong', 'wrongQuestions', 'startWrongQuestion'],
    ['bookmarks', 'bookmarkedQuestions', 'startBookmarkedQuestion']
  ]) {
    test(`${label}: a single ${source} question finishes without drawing a random question`, () => {
      const quiz = createQuiz(component, questions);
      quiz[field] = [ids[1]];
      quiz.currentQuestionIndex = 15;
      quiz[start](ids[1]);
      assert.equal(quiz.currentQuestion.id, ids[1]);
      quiz.userAnswer = 'wrong answer';
      quiz.checkAnswer();
      assert.equal(quiz.totalCount, 1);
      quiz.nextQuestion();
      assert.equal(quiz.currentQuestion, null);
      assert.equal(quiz.showMode, source);
      assert.equal(quiz.answered, false);
      assert.deepEqual(quiz.usedQuestions, []);
    });

    test(`${label}: ${source} review advances only through the list and restores its position`, () => {
      const storage = new Map();
      const quiz = createQuiz(component, questions, storage);
      quiz[field] = [ids[0], ids[2], ids[3]];
      quiz[start](ids[2]);
      const restored = createQuiz(component, questions, storage);
      restored.loadProgress();
      restored.nextQuestion();
      assert.equal(restored.currentQuestion.id, ids[3]);
      assert.equal(restored.userAnswer, '');
      assert.equal(restored.answered, false);
      restored.nextQuestion();
      assert.equal(restored.currentQuestion, null);
      assert.equal(restored.showMode, source);
      assert.deepEqual(restored.usedQuestions, []);
    });
  }

  test(`${label}: removing the current bookmark does not skip the next remaining bookmark`, () => {
    const quiz = createQuiz(component, questions);
    quiz.bookmarkedQuestions = [ids[0], ids[2], ids[3]];
    quiz.startBookmarkedQuestion(ids[0]);
    quiz.toggleBookmark();
    quiz.removeBookmark(ids[2]);
    quiz.nextQuestion();
    assert.equal(quiz.currentQuestion.id, ids[3]);
    quiz.nextQuestion();
    assert.equal(quiz.showMode, 'bookmarks');
  });
}
