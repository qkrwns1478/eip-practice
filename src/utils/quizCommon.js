import { syncSavedExplanations, sanitizeRelatedQuestions } from "./quizExplanation.js";
import { syncSavedAnswers } from "./quizNotes.js";

export const commonQuizComputed = {
  canRemoveCorrectWrongQuestion() {
    const question = this.currentQuestion;
    return (
      this.playMode === "review" &&
      this.reviewSource === "wrong" &&
      this.answered &&
      question &&
      this.wrongQuestions.includes(question.id) &&
      (question.isMultiple
        ? question.subItems.every((item) => item.answered && item.isCorrect)
        : this.isCorrect)
    );
  },
  progressPercentage() {
    if (this.totalAvailableQuestions === 0) return 0;
    return (this.solvedQuestions.length / this.totalAvailableQuestions) * 100;
  },
  accuracyRate() {
    if (this.totalCount === 0) return 0;
    return (this.correctCount / this.totalCount) * 100;
  },
  isCurrentQuestionBookmarked() {
    return this.currentQuestion && this.bookmarkedQuestions.includes(this.currentQuestion.id);
  },
  lastSessionDate() {
    const saved = localStorage.getItem(`${this.storagePrefix}_lastSession`);
    if (!saved) return "아직 학습 기록이 없습니다";
    return new Date(saved).toLocaleString("ko-KR");
  },
};

export const commonQuizMethods = {
  showConfirm(title, message, onConfirm) {
    this.confirmModal = { title, message, onConfirm };
    this.showConfirmModal = true;
  },
  closeConfirmModal() {
    this.showConfirmModal = false;
  },
  showAlert(title, message) {
    this.alertModal = { title, message };
    this.showAlertModal = true;
  },
  closeAlertModal() {
    this.showAlertModal = false;
  },

  toggleBookmark() {
    if (!this.currentQuestion) return;
    const id = this.currentQuestion.id;
    const index = this.bookmarkedQuestions.indexOf(id);
    if (index > -1) this.bookmarkedQuestions.splice(index, 1);
    else this.bookmarkedQuestions.push(id);
    this.saveProgress();
  },
  removeBookmark(id) {
    const index = this.bookmarkedQuestions.indexOf(id);
    if (index > -1) {
      this.bookmarkedQuestions.splice(index, 1);
      this.discardReviewSession("bookmarks", id);
      this.saveProgress();
    }
  },
  removeWrongQuestion(id) {
    const index = this.wrongQuestions.indexOf(id);
    if (index > -1) {
      this.wrongQuestions.splice(index, 1);
      this.discardReviewSession("wrong", id);
      this.saveProgress();
    }
  },
  removeCorrectWrongQuestionAndNext() {
    if (!this.canRemoveCorrectWrongQuestion) return;
    const id = this.currentQuestion.id;
    this.wrongQuestions.splice(this.wrongQuestions.indexOf(id), 1);
    this.discardReviewSession("wrong", id);
    this.nextReviewQuestion();
  },
  discardReviewSession(source, id) {
    const session = this.practiceSessions?.[source];
    if ((session?.currentQuestionId ?? session?.currentQuestion?.id) === id) delete this.practiceSessions[source];
  },
  startBookmarkedQuestion(id) {
    this.startReviewQuestion(id, "bookmarks");
  },
  startWrongQuestion(id) {
    this.startReviewQuestion(id, "wrong");
  },
  nextReviewQuestion() {
    const ids = this.reviewSource === "bookmarks" ? this.bookmarkedQuestions : this.wrongQuestions;
    let nextIndex = this.currentQuestionIndex + 1;
    while (
      nextIndex < this.reviewSessionIds.length &&
      (!ids.includes(this.reviewSessionIds[nextIndex]) || !this.getQuestionById(this.reviewSessionIds[nextIndex]))
    )
      nextIndex++;
    if (nextIndex < this.reviewSessionIds.length) {
      this.currentQuestionIndex = nextIndex;
      this.setupQuestion(this.getQuestionById(this.reviewSessionIds[nextIndex]), false);
    } else {
      this.currentQuestion = null;
      this.userAnswer = "";
      this.answered = false;
      this.isCorrect = false;
      this.showMode = this.reviewSource;
      this.showAlert("복습 완료", "선택한 목록의 문제를 모두 풀었습니다.");
    }
    this.saveProgress();
  },
};

export function getCommonProgress(quiz) {
  return {
    correctCount: quiz.correctCount,
    wrongCount: quiz.wrongCount,
    totalCount: quiz.totalCount,
    bookmarkedQuestions: quiz.bookmarkedQuestions,
    solvedQuestions: quiz.solvedQuestions,
    wrongQuestions: quiz.wrongQuestions,
    savedAnswers: syncSavedAnswers(quiz),
    savedExplanations: syncSavedExplanations(quiz),
    usedQuestions: quiz.usedQuestions,
    currentQuestionIndex: quiz.currentQuestionIndex,
    currentQuestion: quiz.currentQuestion,
    playMode: quiz.playMode,
    reviewSource: quiz.reviewSource,
    reviewSessionIds: quiz.reviewSessionIds,
    isCorrect: quiz.isCorrect,
    userAnswer: quiz.userAnswer,
    answered: quiz.answered,
    lastSession: new Date().toISOString(),
  };
}

export function restoreCommonProgress(quiz, progress) {
  if (!progress || typeof progress !== "object" || Array.isArray(progress)) throw new Error("Invalid quiz progress");
  const count = (value) => (Number.isInteger(value) && value >= 0 ? value : 0);
  const ids = (value) =>
    Array.isArray(value) ? [...new Set(value.filter((id) => id != null && quiz.getQuestionById(id)))] : [];
  quiz.correctCount = count(progress.correctCount);
  quiz.wrongCount = count(progress.wrongCount);
  quiz.totalCount = count(progress.totalCount);
  quiz.bookmarkedQuestions = ids(progress.bookmarkedQuestions);
  quiz.solvedQuestions = ids(progress.solvedQuestions);
  quiz.wrongQuestions = ids(progress.wrongQuestions);
  quiz.savedAnswers = {};
  const validAnswer = (answer) =>
    answer && typeof answer.userAnswer === "string" && typeof answer.isCorrect === "boolean";
  for (const id of [...quiz.bookmarkedQuestions, ...quiz.wrongQuestions]) {
    const saved = progress.savedAnswers?.[id];
    if (Array.isArray(saved?.subAnswers) && saved.subAnswers.every(validAnswer)) {
      quiz.savedAnswers[id] = {
        subAnswers: saved.subAnswers.map((item) => ({
          userAnswer: item.userAnswer,
          isCorrect: item.isCorrect,
          answered: item.answered !== false,
        })),
      };
    } else if (validAnswer(saved)) {
      quiz.savedAnswers[id] = { userAnswer: saved.userAnswer, isCorrect: saved.isCorrect };
    }
  }
  const explanations = progress.savedExplanations;
  quiz.savedExplanations = {};
  if (explanations && typeof explanations === "object" && !Array.isArray(explanations)) {
    for (const id of [...quiz.bookmarkedQuestions, ...quiz.wrongQuestions]) {
      const saved = explanations[id];
      if (typeof saved?.text === "string" && saved.text.trim() && typeof saved.context === "string") {
        quiz.savedExplanations[id] = {
          text: saved.text,
          context: saved.context,
          relatedQuestions: sanitizeRelatedQuestions(saved.relatedQuestions),
        };
      }
    }
  }
  quiz.usedQuestions = ids(progress.usedQuestions);
  quiz.currentQuestionIndex = count(progress.currentQuestionIndex);
  quiz.currentQuestion = progress.currentQuestion || null;
  quiz.playMode = ["random", "review", "code", "mockExam"].includes(progress.playMode) ? progress.playMode : "random";
  quiz.reviewSource = progress.reviewSource === "bookmarks" ? "bookmarks" : "wrong";
  quiz.reviewSessionIds = Array.isArray(progress.reviewSessionIds) ? progress.reviewSessionIds : [];
  quiz.userAnswer = typeof progress.userAnswer === "string" ? progress.userAnswer : "";
  quiz.answered = progress.answered === true;
  quiz.isCorrect = progress.isCorrect === true;
  quiz.resetExplanation();
}
