export const commonQuizComputed = {
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
    if (!saved) return '아직 학습 기록이 없습니다';
    return new Date(saved).toLocaleString('ko-KR');
  }
};

export const commonQuizMethods = {
  showConfirm(title, message, onConfirm) {
    this.confirmModal = { title, message, onConfirm };
    this.showConfirmModal = true;
  },
  closeConfirmModal() { this.showConfirmModal = false; },
  showAlert(title, message) {
    this.alertModal = { title, message };
    this.showAlertModal = true;
  },
  closeAlertModal() { this.showAlertModal = false; },

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
      this.saveProgress();
    }
  },
  removeWrongQuestion(id) {
    const index = this.wrongQuestions.indexOf(id);
    if (index > -1) {
      this.wrongQuestions.splice(index, 1);
      this.saveProgress();
    }
  },
  startBookmarkedQuestion(id) { this.startReviewQuestion(id, 'bookmarks'); },
  startWrongQuestion(id) { this.startReviewQuestion(id, 'wrong'); },
  nextReviewQuestion() {
    const ids = this.reviewSource === 'bookmarks' ? this.bookmarkedQuestions : this.wrongQuestions;
    let nextIndex = this.currentQuestionIndex + 1;
    while (nextIndex < this.reviewSessionIds.length &&
      (!ids.includes(this.reviewSessionIds[nextIndex]) || !this.getQuestionById(this.reviewSessionIds[nextIndex]))) nextIndex++;
    if (nextIndex < this.reviewSessionIds.length) {
      this.currentQuestionIndex = nextIndex;
      this.setupQuestion(this.getQuestionById(this.reviewSessionIds[nextIndex]), false);
    } else {
      this.currentQuestion = null;
      this.userAnswer = '';
      this.answered = false;
      this.isCorrect = false;
      this.showMode = this.reviewSource;
      this.showAlert('복습 완료', '선택한 목록의 문제를 모두 풀었습니다.');
    }
    this.saveProgress();
  }
};

export function getCommonProgress(quiz) {
  return {
    correctCount: quiz.correctCount,
    wrongCount: quiz.wrongCount,
    totalCount: quiz.totalCount,
    bookmarkedQuestions: quiz.bookmarkedQuestions,
    solvedQuestions: quiz.solvedQuestions,
    wrongQuestions: quiz.wrongQuestions,
    usedQuestions: quiz.usedQuestions,
    currentQuestionIndex: quiz.currentQuestionIndex,
    currentQuestion: quiz.currentQuestion,
    playMode: quiz.playMode,
    reviewSource: quiz.reviewSource,
    reviewSessionIds: quiz.reviewSessionIds,
    isCorrect: quiz.isCorrect,
    userAnswer: quiz.userAnswer,
    answered: quiz.answered,
    lastSession: new Date().toISOString()
  };
}

export function restoreCommonProgress(quiz, progress) {
  quiz.correctCount = progress.correctCount || 0;
  quiz.wrongCount = progress.wrongCount || 0;
  quiz.totalCount = progress.totalCount || 0;
  quiz.bookmarkedQuestions = progress.bookmarkedQuestions || [];
  quiz.solvedQuestions = progress.solvedQuestions || [];
  quiz.wrongQuestions = progress.wrongQuestions || [];
  quiz.usedQuestions = progress.usedQuestions || [];
  quiz.currentQuestionIndex = progress.currentQuestionIndex || 0;
  quiz.currentQuestion = progress.currentQuestion || null;
  quiz.playMode = progress.playMode || 'random';
  quiz.reviewSource = progress.reviewSource === 'bookmarks' ? 'bookmarks' : 'wrong';
  quiz.reviewSessionIds = Array.isArray(progress.reviewSessionIds) ? progress.reviewSessionIds : [];
  quiz.userAnswer = progress.userAnswer || '';
  quiz.answered = progress.answered || false;
  quiz.isCorrect = progress.isCorrect || false;
}
