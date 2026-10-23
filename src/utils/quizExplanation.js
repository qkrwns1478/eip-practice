import { markRaw } from 'vue';

function answerContext(quiz) {
  const subItems = quiz.currentQuestion?.subItems;
  return JSON.stringify(subItems?.length
    ? { subAnswers: subItems.map(item => ({ userAnswer: item.userAnswer, isCorrect: item.isCorrect })) }
    : { userAnswer: quiz.userAnswer, isCorrect: quiz.isCorrect });
}

export function sanitizeRelatedQuestions(value) {
  if (!Array.isArray(value)) return [];
  const seen = new Set();
  const references = [];
  for (const row of value) {
    if (!row || !Number.isInteger(row.questionId) || typeof row.examKey !== 'string' ||
      !/^\d{4}-\d+$/.test(row.examKey) || row.id !== `${row.examKey}:${row.questionId}` || seen.has(row.id)) continue;
    seen.add(row.id);
    references.push({
      id: row.id, questionId: row.questionId, examKey: row.examKey,
      topic: typeof row.topic === 'string' ? row.topic.slice(0, 80) : '관련 개념',
    });
    if (references.length === 3) break;
  }
  return references;
}

export async function requestExplanationResult(quizType, questionId, input, signal) {
  const response = await fetch('/api/explanation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quizType, questionId, ...input }),
    signal,
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || '해설을 생성하지 못했습니다. 잠시 후 다시 시도해주세요.');
  if (typeof result.explanation !== 'string' || !result.explanation.trim()) throw new Error('해설 응답이 비어 있습니다. 다시 시도해주세요.');
  return { explanation: result.explanation, relatedQuestions: sanitizeRelatedQuestions(result.relatedQuestions) };
}

// Preserve the string-returning API used by note exports and other quiz types.
export async function requestExplanation(quizType, questionId, input, signal) {
  return (await requestExplanationResult(quizType, questionId, input, signal)).explanation;
}

// Only explanations belonging to bookmarks/wrong questions enter saved progress.
export function syncSavedExplanations(quiz) {
  const ids = new Set([...quiz.bookmarkedQuestions, ...quiz.wrongQuestions]);
  const storedIds = new Set([...ids].map(String));
  for (const id of Object.keys(quiz.savedExplanations)) {
    if (!storedIds.has(id)) delete quiz.savedExplanations[id];
  }
  if (ids.has(quiz.explanationQuestionId) && quiz.explanationText && quiz.explanationAnswerContext === answerContext(quiz)) {
    quiz.savedExplanations[quiz.explanationQuestionId] = {
      text: quiz.explanationText,
      context: quiz.explanationAnswerContext,
      relatedQuestions: sanitizeRelatedQuestions(quiz.explanationRelatedQuestions),
    };
  }
  return { ...quiz.savedExplanations };
}

export const quizExplanationMixin = {
  data() {
    return {
      savedExplanations: {},
      explanationQuestionId: null,
      explanationAnswerContext: null,
      explanationText: '',
      explanationRelatedQuestions: [],
      explanationError: '',
      explanationLoading: false,
      showExplanationModal: false,
      explanationController: null,
    };
  },
  watch: {
    'currentQuestion.id': {
      flush: 'sync',
      handler(id) { this.resetExplanation(id); },
    },
    showMode() { this.showExplanationModal = false; },
  },
  deactivated() { this.showExplanationModal = false; },
  beforeUnmount() { this.explanationController?.abort(); },
  methods: {
    resetExplanation(id = this.currentQuestion?.id) {
      this.explanationController?.abort();
      this.explanationController = null;
      this.explanationQuestionId = id ?? null;
      this.explanationAnswerContext = null;
      this.explanationText = '';
      this.explanationRelatedQuestions = [];
      this.explanationError = '';
      this.explanationLoading = false;
      this.showExplanationModal = false;
    },
    async openExplanation() {
      if (!this.answered || !this.currentQuestion) return;
      const context = answerContext(this);
      if (this.explanationQuestionId !== this.currentQuestion.id || this.explanationAnswerContext !== context) {
        this.resetExplanation();
        this.explanationAnswerContext = context;
        const saved = this.savedExplanations[this.currentQuestion.id];
        if (saved?.context === context) {
          this.explanationText = saved.text;
          this.explanationRelatedQuestions = sanitizeRelatedQuestions(saved.relatedQuestions);
        }
      }
      this.showExplanationModal = true;
      if (this.explanationText || this.explanationLoading) return;
      const id = this.currentQuestion.id;
      const controller = markRaw(new AbortController());
      this.explanationController = controller;
      this.explanationQuestionId = id;
      this.explanationLoading = true;
      this.explanationError = '';
      try {
        const result = await requestExplanationResult(this.storagePrefix, id, JSON.parse(context), controller.signal);
        if (this.explanationController !== controller || this.currentQuestion?.id !== id) return;
        this.explanationText = result.explanation;
        this.explanationRelatedQuestions = result.relatedQuestions;
        this.saveProgress();
      } catch (error) {
        if (!controller.signal.aborted && this.explanationController === controller) {
          this.explanationError = error.message || '해설을 불러오지 못했습니다.';
        }
      } finally {
        if (this.explanationController === controller) {
          this.explanationLoading = false;
          this.explanationController = null;
        }
      }
    },
  },
};
