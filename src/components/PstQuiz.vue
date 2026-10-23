<template>
  <div class="quiz-container pst-quiz-layout">
    <div class="menu-bar icon-menu-bar">
      <img class="eip-logo" src="/logo.png" alt="EIP" draggable="false" />
      <button @click="openRandomQuiz" :class="{ active: showMode === 'quiz' && playMode === 'random' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
        <span class="tooltip-text">퀴즈</span>
      </button>
      <button @click="openCodeMode" :class="{ active: showMode === 'codePicker' || (showMode === 'quiz' && playMode === 'code') }" aria-label="코드 문제 모드" title="코드 문제 모드">
        <span aria-hidden="true" class="code-menu-symbol">&lt;/&gt;</span>
        <span class="tooltip-text">코드문제</span>
      </button>
      <button @click="openMockExamMode" :class="{ active: showMode === 'mockExam' || (showMode === 'quiz' && playMode === 'mockExam') }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 6h13" /><path d="M8 12h13" /><path d="M8 18h13" />
          <path d="M3 6h.01" /><path d="M3 12h.01" /><path d="M3 18h.01" />
        </svg>
        <span class="tooltip-text">모의고사</span>
      </button>
      <button @click="openView('bookmarks')" class="menu-count-button" :class="{ active: showMode === 'bookmarks' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span class="tooltip-text">북마크 <span class="menu-count-badge">{{ bookmarkedQuestions.length }}</span></span>
      </button>
      <button @click="openView('wrong')" class="menu-count-button" :class="{ active: showMode === 'wrong' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        <span class="tooltip-text">틀린 문제 <span class="menu-count-badge">{{ wrongQuestions.length }}</span></span>
      </button>
      <button @click="openView('tutor')" :class="{ active: showMode === 'tutor' }" aria-label="AI 튜터" title="AI 튜터">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" /></svg>
        <span class="tooltip-text">AI 튜터</span>
      </button>
      <button @click="openView('trends')" :class="{ active: showMode === 'trends' }" aria-label="출제 경향" title="출제 경향">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18M8 16v-5M13 16V7M18 16v-8" /></svg>
        <span class="tooltip-text">출제 경향</span>
      </button>
      <button @click="openView('recommendations')" :class="{ active: showMode === 'recommendations' }" aria-label="학습 추천" title="학습 추천">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" />
          <path d="m10 12 1.5 1.5L15 10" />
        </svg>
        <span class="tooltip-text">학습 추천</span>
      </button>
      <button @click="resetProgress" class="reset-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
        <span class="tooltip-text">초기화</span>
      </button>
    </div>

    <ExamStudy v-if="['tutor', 'trends'].includes(showMode)" :key="showMode" :mode="showMode" />
    <LearningRecommendations v-else-if="showMode === 'recommendations'" :wrong-questions="wrongQuestions"
      :bookmarked-questions="bookmarkedQuestions" :solved-questions="solvedQuestions" :saved-answers="savedAnswers"
      :current-question-id="currentQuestion?.id" :normalize-answer="normalizeString" :label-for-id="getQuizInfo"
      :get-question="getQuestionById" @answered="recordRecommendedAnswer" />

    <div v-else-if="showMode === 'codePicker'" class="code-mode-content">
      <div class="code-mode-picker">
        <h3>코드 문제</h3>
        <div class="code-language-options" role="group" aria-label="문제 언어">
          <button v-for="language in ['all', ...codeLanguages]" :key="language" @click="selectedCodeLanguage = language" :aria-pressed="selectedCodeLanguage === language" :class="{ selected: selectedCodeLanguage === language }">
            {{ language === 'all' ? '전체' : language }} <span>{{ codeLanguageCount(language) }}문제</span>
          </button>
        </div>
        <div class="code-mode-filters">
          <label>기출 회차
            <select v-model="selectedCodeExamKey"><option value="all">전체 회차</option><option v-for="exam in pstExams" :key="exam.key" :value="exam.key">{{ exam.year }}년 {{ exam.round }}회</option></select>
          </label>
          <label>문제 순서
            <select v-model="codeQuestionOrder"><option value="random">무작위</option><option value="ordered">순서대로</option></select>
          </label>
        </div>
        <p class="code-mode-count">선택한 코드 문제 {{ filteredCodeQuestions.length }}개 · 풀이 완료 {{ completedCodeQuestionCount }}개</p>
        <p v-if="!filteredCodeQuestions.length" class="empty-state">이 회차에는 선택한 언어의 코드 문제가 없습니다. 다른 언어나 회차를 선택하세요.</p>
        <button @click="startCodeQuiz" :disabled="!filteredCodeQuestions.length" class="code-start-button">코드 문제 시작</button>
        <button v-if="practiceSessions.code?.currentQuestionId || (playMode === 'code' && currentQuestion)" @click="resumeCodeQuiz" class="code-resume-button">이어서 풀기</button>
      </div>
    </div>

    <div v-else-if="showMode === 'mockExam'" class="mockExam-content">
      <div class="mockExam-picker">
        <h3>모의고사</h3>
        <div class="mockExam-filters">
          <section v-for="group in examsByYear" :key="group.year" class="mock-exam-year-group">
            <h4>{{ group.year }}년</h4>
            <div class="mock-exam-grid" role="group" :aria-label="String(group.year)">
              <button v-for="exam in group.exams" :key="exam.key" type="button"
                @click="selectedExamKey = exam.key" :aria-pressed="selectedExamKey === exam.key"
                :class="{ selected: selectedExamKey === exam.key }">
                {{ exam.round }}회
              </button>
            </div>
          </section>
        </div>
        <button @click="startMockExamQuiz" class="mockExam-start-button">{{ mockExamSessions[selectedExamKey] ? '이어서 응시' : '응시 시작' }}</button>
      </div>
    </div>

    <div v-else-if="showMode === 'quiz' && currentQuestion" class="quiz-content" ref="quizContent">
      <div class="question-section">
        <div class="question-header">
          <h3>{{ questionTitle }}</h3>
          <div class="quiz-actions-group">
            <span class="quiz-info-badge" v-if="currentQuestion">{{ getQuizInfo(currentQuestion.id) }}</span>
            <button v-if="playMode === 'mockExam'" @click="openView('mockExam')" class="skip-button">회차 선택</button>
            <button v-if="['random', 'code'].includes(playMode) && !answered" @click="skipQuestion" class="skip-button">다음 문제</button>
            <button @click="toggleBookmark" class="bookmark-btn" :class="{ bookmarked: isCurrentQuestionBookmarked }">
              {{ isCurrentQuestionBookmarked ? '★' : '☆' }}
            </button>
          </div>
        </div>

        <div class="pst-question">
          <p class="description">{{ currentQuestion.question }}</p>
          <CodeVisualizer v-if="playMode === 'code' && getCodeLanguage(currentQuestion) !== 'SQL'" :key="currentQuestion.id" :question="currentQuestion" :language="getCodeLanguage(currentQuestion)" :answered="answered" />
          <pre v-else-if="currentQuestion.passageOrCode"
            class="code-block"><code>{{ currentQuestion.passageOrCode }}</code></pre>
          <div v-if="currentQuestion.imageUrl" class="image-container">
            <img :src="currentQuestion.imageUrl" alt="문제 이미지" />
          </div>
          <div v-if="currentQuestion.options && currentQuestion.options.length > 0" class="options-list">
            <div v-for="(option, index) in currentQuestion.options" :key="index" class="option-item">
              {{ option }}
            </div>
          </div>

          <div class="answer-input">
            <textarea v-model="userAnswer" @keydown.enter="handleEnter" placeholder="답을 입력하세요 (Shift+Enter로 줄바꿈)"
              :disabled="answered" ref="answerInput"></textarea>
            <button @click="checkAnswer" :disabled="answered">확인</button>
          </div>
        </div>

        <div v-if="answered" class="result-section">
          <p v-if="isCorrect" class="correct-result">✓ 정답입니다!</p>
          <p v-else class="wrong-result">✗ 오답입니다. 정답: {{ currentQuestion.answer }}</p>
          <div class="result-actions">
            <button type="button" @click="openExplanation" class="result-action-button">해설</button>
            <button @click="nextQuestion" class="result-action-button" ref="nextButton">다음 문제</button>
          </div>
        </div>
      </div>
    </div>

    <SavedQuestionList v-else-if="showMode === 'bookmarks'" type="bookmarks" :ids="bookmarkedQuestions"
      :get-question="getQuestionById" title-key="question" :subtitle-for-id="getQuizInfo"
      :saved-explanations="savedExplanations" :saved-answers="savedAnswers"
      :exporting="notesExporting" :export-status="notesExportStatus" @export="generate => exportNotes('bookmarks', generate)" @select="startBookmarkedQuestion" @remove="removeBookmark" />

    <SavedQuestionList v-else-if="showMode === 'wrong'" type="wrong" :ids="wrongQuestions" :quiz-type="storagePrefix"
      :get-question="getQuestionById" title-key="question" :subtitle-for-id="getQuizInfo"
      :saved-explanations="savedExplanations" :saved-answers="savedAnswers"
      :exporting="notesExporting" :export-status="notesExportStatus" @export="generate => exportNotes('wrong', generate)" @select="startWrongQuestion" @remove="removeWrongQuestion" />

    <div v-else-if="!currentQuestion && showMode === 'quiz'" class="no-question">
      <button @click="startQuiz" class="start-button">퀴즈 시작</button>
    </div>

    <ExplanationModal v-if="showExplanationModal" :text="explanationText" :error="explanationError"
      :loading="explanationLoading" @close="showExplanationModal = false" @retry="openExplanation">
      <SimilarQuestions :references="explanationRelatedQuestions" :current-question-id="currentQuestion?.id"
        :normalize-answer="normalizeString" />
    </ExplanationModal>
    <QuizModals :show-confirm="showConfirmModal" :confirm="confirmModal" :show-alert="showAlertModal"
      :alert="alertModal" @close-confirm="closeConfirmModal" @close-alert="closeAlertModal" />
  </div>
</template>

<style>
@import "../assets/style/style.css";
@import "../assets/style/PstQuiz.css";
</style>

<script>
import { pstData, pstExams } from "../assets/pstData";
import CodeVisualizer from './CodeVisualizer.vue';
import SavedQuestionList from './SavedQuestionList.vue';
import QuizModals from './QuizModals.vue';
import ExplanationModal from './ExplanationModal.vue';
import SimilarQuestions from './SimilarQuestions.vue';
import LearningRecommendations from './LearningRecommendations.vue';
import ExamStudy from './ExamStudy.vue';
import { quizExplanationMixin } from '../utils/quizExplanation.js';
import { quizNotesMixin } from '../utils/quizNotes.js';
import { codeLanguages, getCodeLanguage, getCodeQuestions } from '../utils/codeQuestions.js';
import { commonQuizComputed, commonQuizMethods, getCommonProgress, restoreCommonProgress } from '../utils/quizCommon.js';

export default {
  name: "PstQuiz",
  components: { CodeVisualizer, SavedQuestionList, QuizModals, ExplanationModal, SimilarQuestions, LearningRecommendations, ExamStudy },
  mixins: [quizExplanationMixin, quizNotesMixin],
  data() {
    return {
      pstData: pstData,
      pstExams: pstExams,
      storagePrefix: 'pstQuiz',
      currentQuestion: null,
      currentQuestionIndex: 0,
      playMode: 'random',
      reviewSource: 'wrong',
      reviewSessionIds: [],
      selectedExamKey: '2026-2',
      mockExamQuestions: [],
      mockExamSession: null,
      mockExamSessions: {},
      practiceSessions: {},
      codeLanguages,
      selectedCodeLanguage: 'C',
      selectedCodeExamKey: 'all',
      codeQuestionOrder: 'random',
      codeSessionIds: [],
      userAnswer: "",
      answered: false,
      isCorrect: false,
      correctCount: 0,
      wrongCount: 0,
      totalCount: 0,
      usedQuestions: [],
      bookmarkedQuestions: [],
      solvedQuestions: [],
      codeSolvedQuestions: [],
      wrongQuestions: [],
      showMode: "quiz",

      showConfirmModal: false,
      confirmModal: { title: "", message: "", onConfirm: null },
      showAlertModal: false,
      alertModal: { title: "", message: "" },
    };
  },
  computed: {
    ...commonQuizComputed,
    examsByYear() {
      const groups = new Map();
      this.pstExams.forEach(exam => {
        if (!groups.has(exam.year)) groups.set(exam.year, []);
        groups.get(exam.year).push(exam);
      });
      return Array.from(groups, ([year, exams]) => ({ year, exams }));
    },
    filteredCodeQuestions() {
      const exams = this.selectedCodeExamKey === 'all' ? this.pstExams : this.pstExams.filter(exam => exam.key === this.selectedCodeExamKey);
      return getCodeQuestions(exams.flatMap(exam => exam.questions), this.selectedCodeLanguage);
    },
    completedCodeQuestionCount() {
      return this.filteredCodeQuestions.filter(question => this.codeSolvedQuestions.includes(question.id)).length;
    },
    totalAvailableQuestions() {
      return this.pstData.length;
    },
    questionTitle() {
      if (this.playMode === 'code') return `${getCodeLanguage(this.currentQuestion)} 코드 문제 ${this.currentQuestionIndex + 1} / ${this.codeSessionIds.length}`;
      if (this.playMode !== 'mockExam') return `문제 ${this.currentQuestionIndex + 1}`;
      const exam = this.pstExams.find(item => item.key === this.selectedExamKey);
      const examLabel = exam ? `${exam.year}년 ${exam.round}회` : '기출문제';
      return `${examLabel} (${this.currentQuestionIndex + 1} / ${this.mockExamQuestions.length})`;
    }
  },
  mounted() {
    this.loadProgress();
    if (this.showMode === 'quiz' && !this.currentQuestion) this.openRandomQuiz();
  },
  watch: {
    userAnswer() { this.saveProgress(); },
    showMode() { this.saveProgress(); },
    selectedExamKey() { this.saveProgress(); },
    selectedCodeLanguage() { this.saveProgress(); },
    selectedCodeExamKey() { this.saveProgress(); },
    codeQuestionOrder() { this.saveProgress(); },
  },
  beforeUnmount() {
    this.saveProgress();
  },
  methods: {
    ...commonQuizMethods,
    recordRecommendedAnswer({ questionId, userAnswer, isCorrect }) {
      if (!this.getQuestionById(questionId) || this.solvedQuestions.includes(questionId) ||
        questionId === this.currentQuestion?.id || typeof userAnswer !== 'string' || typeof isCorrect !== 'boolean') return;
      this.totalCount++;
      if (isCorrect) this.correctCount++;
      else {
        this.wrongCount++;
        if (!this.wrongQuestions.includes(questionId)) this.wrongQuestions.push(questionId);
      }
      this.solvedQuestions.push(questionId);
      if (!isCorrect || this.bookmarkedQuestions.includes(questionId)) this.savedAnswers[questionId] = { userAnswer, isCorrect };
      delete this.savedExplanations[questionId];
      this.saveProgress();
    },
    getCodeLanguage,
    codeLanguageCount(language) { return getCodeQuestions(this.pstData, language).length; },
    openView(view) { this.saveCurrentSession(); this.showMode = view; this.saveProgress(); },
    openCodeMode() { this.openView('codePicker'); },
    saveCurrentSession() {
      this.saveMockExamSession();
      if (this.playMode === 'mockExam') return;
      const key = this.playMode === 'review' ? this.reviewSource : this.playMode;
      if (this.playMode === 'review' && !(key === 'bookmarks' ? this.bookmarkedQuestions : this.wrongQuestions).includes(this.currentQuestion?.id)) {
        delete this.practiceSessions[key];
        return;
      }
      this.practiceSessions[key] = {
        currentQuestionId: this.currentQuestion?.id || null,
        currentQuestionIndex: this.currentQuestionIndex,
        userAnswer: this.userAnswer,
        answered: this.answered,
        isCorrect: this.isCorrect,
        codeSessionIds: [...this.codeSessionIds],
        reviewSessionIds: [...this.reviewSessionIds],
      };
    },
    restorePracticeSession(key) {
      const session = this.practiceSessions[key];
      const question = this.getQuestionById(session?.currentQuestionId);
      if (!question || !Number.isInteger(session.currentQuestionIndex) || session.currentQuestionIndex < 0) return false;
      if (key === 'code' && (!Array.isArray(session.codeSessionIds) ||
        session.codeSessionIds[session.currentQuestionIndex] !== question.id ||
        !session.codeSessionIds.every(id => getCodeLanguage(this.getQuestionById(id))))) return false;
      if (['bookmarks', 'wrong'].includes(key) && (!Array.isArray(session.reviewSessionIds) ||
        session.reviewSessionIds[session.currentQuestionIndex] !== question.id ||
        !(key === 'bookmarks' ? this.bookmarkedQuestions : this.wrongQuestions).includes(question.id))) return false;
      this.playMode = ['bookmarks', 'wrong'].includes(key) ? 'review' : key;
      if (this.playMode === 'review') this.reviewSource = key;
      this.currentQuestion = question;
      this.currentQuestionIndex = session.currentQuestionIndex;
      this.userAnswer = session.userAnswer;
      this.answered = session.answered;
      this.isCorrect = session.isCorrect;
      if (key === 'code') this.codeSessionIds = [...session.codeSessionIds];
      if (this.playMode === 'review') this.reviewSessionIds = [...session.reviewSessionIds];
      this.showMode = 'quiz';
      return true;
    },
    resumeCodeQuiz() {
      this.saveCurrentSession();
      if (this.restorePracticeSession('code')) this.saveProgress();
    },
    startCodeQuiz() {
      const questions = [...this.filteredCodeQuestions];
      if (!questions.length) return;
      this.saveCurrentSession();
      if (this.codeQuestionOrder === 'random') {
        for (let i = questions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [questions[i], questions[j]] = [questions[j], questions[i]];
        }
      }
      this.codeSessionIds = questions.map(question => question.id);
      this.playMode = 'code';
      this.currentQuestionIndex = 0;
      this.showMode = 'quiz';
      this.setupQuestion(questions[0], false);
      this.saveProgress();
    },
    startQuiz() {
      this.openRandomQuiz();
    },

    openRandomQuiz() {
      this.saveCurrentSession();
      if (this.restorePracticeSession('random')) {
        this.saveProgress();
        return;
      }
      this.playMode = 'random';
      this.showMode = 'quiz';
      this.currentQuestion = null;
      this.currentQuestionIndex = 0;
      this.userAnswer = '';
      this.answered = false;
      this.isCorrect = false;
      this.generateQuestion();
      this.saveProgress();
    },

    openMockExamMode() {
      this.saveCurrentSession();
      if (!this.resumeMockExam()) this.showMode = 'mockExam';
    },

    saveMockExamSession() {
      if (this.playMode !== 'mockExam' || !this.currentQuestion) return;
      const exam = this.pstExams.find(item => item.questions.some(question => question.id === this.currentQuestion.id));
      if (!exam) return;
      this.mockExamSession = {
        examKey: exam.key,
        currentQuestionIndex: this.currentQuestionIndex,
        userAnswer: this.userAnswer,
        answered: this.answered,
        isCorrect: this.isCorrect,
        results: { ...this.mockExamSessions[exam.key]?.results },
      };
      this.mockExamSessions[exam.key] = this.mockExamSession;
    },

    resumeMockExam(examKey = this.mockExamSession?.examKey) {
      const session = this.mockExamSessions[examKey];
      if (!session || session.examKey !== examKey || !Number.isInteger(session.currentQuestionIndex) || session.currentQuestionIndex < 0) return false;
      const exam = this.pstExams.find(item => item.key === session.examKey);
      const question = exam?.questions[session.currentQuestionIndex];
      if (!question) { this.mockExamSession = null; return false; }
      this.saveCurrentSession();
      this.playMode = 'mockExam';
      this.mockExamSession = session;
      this.selectedExamKey = exam.key;
      this.mockExamQuestions = exam.questions;
      this.currentQuestionIndex = session.currentQuestionIndex;
      this.currentQuestion = question;
      this.userAnswer = session.userAnswer;
      this.answered = session.answered;
      this.isCorrect = session.isCorrect;
      this.showMode = 'quiz';
      this.saveProgress();
      return true;
    },

    startMockExamQuiz() {
      this.saveCurrentSession();
      if (this.resumeMockExam(this.selectedExamKey)) return;
      const exam = this.pstExams.find(item => item.key === this.selectedExamKey);
      if (!exam || exam.questions.length === 0) return;

      this.playMode = 'mockExam';
      this.mockExamQuestions = exam.questions;
      delete this.mockExamSessions[exam.key];
      this.currentQuestionIndex = 0;
      this.showMode = 'quiz';
      this.setupQuestion(this.mockExamQuestions[0], false);
      this.saveProgress();
    },

    generateQuestion() {
      const availableQuestions = this.pstData.filter(item => {
        return !this.usedQuestions.includes(item.id);
      });

      if (availableQuestions.length === 0) {
        this.showAlert('완료', '모든 문제를 풀었습니다.');
        this.currentQuestion = null;
        this.currentQuestionIndex = 0;
        this.userAnswer = '';
        this.answered = false;
        this.isCorrect = false;
        this.usedQuestions = [];
        this.saveProgress();
        return;
      }

      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const selectedItem = availableQuestions[randomIndex];

      this.setupQuestion(selectedItem);
    },

    setupQuestion(selectedItem, markAsUsed = this.playMode === 'random') {
      this.resetExplanation(selectedItem.id);
      this.currentQuestion = selectedItem;
      if (markAsUsed && !this.usedQuestions.includes(selectedItem.id)) {
        this.usedQuestions.push(selectedItem.id);
      }
      this.userAnswer = '';
      this.answered = false;
      this.isCorrect = false;

      this.saveProgress();

      this.$nextTick(() => {
        if (this.$refs.quizContent) {
          this.$refs.quizContent.scrollTop = 0;
        }
        // if (this.$refs.answerInput) {
        //   this.$refs.answerInput.focus();
        // }
      });
    },

    handleEnter(event) {
      if (this.answered || !this.currentQuestion) return;
      if (event.shiftKey) {
        return;
      }
      event.preventDefault();
      this.checkAnswer();
    },

    checkAnswer() {
      if (this.answered || !this.currentQuestion) return;

      this.answered = true;
      this.totalCount++;

      const question = this.currentQuestion;
      const answer = question.answer;
      const altAnswer = question.alt;
      const altAnswers = question.alts || [];

      let requiresLineBreak = answer.includes('\n') || (altAnswer && altAnswer.includes('\n'));
      if (!requiresLineBreak && altAnswers.length > 0) {
        requiresLineBreak = altAnswers.some(a => a && a.includes('\n'));
      }

      const normalizedUserAnswer = this.normalizeString(this.userAnswer, requiresLineBreak);
      const normalizedAnswer = this.normalizeString(answer, requiresLineBreak);
      this.isCorrect = (normalizedUserAnswer === normalizedAnswer);

      if (!this.isCorrect && altAnswer) {
        const normalizedAlt = this.normalizeString(altAnswer, requiresLineBreak);
        if (normalizedUserAnswer === normalizedAlt) {
          this.isCorrect = true;
        }
      }

      if (!this.isCorrect && altAnswers.length > 0) {
        this.isCorrect = altAnswers.some(alt => {
          const normalizedAlt = this.normalizeString(alt, requiresLineBreak);
          return normalizedUserAnswer === normalizedAlt;
        });
      }

      if (this.isCorrect) {
        this.correctCount++;
      } else {
        this.wrongCount++;
        if (!this.wrongQuestions.includes(this.currentQuestion.id)) {
          this.wrongQuestions.push(this.currentQuestion.id);
        }
      }

      if (!this.solvedQuestions.includes(this.currentQuestion.id)) {
        this.solvedQuestions.push(this.currentQuestion.id);
      }
      if (this.playMode === 'code' && !this.codeSolvedQuestions.includes(this.currentQuestion.id)) {
        this.codeSolvedQuestions.push(this.currentQuestion.id);
      }
      if (this.playMode === 'mockExam') {
        this.saveMockExamSession();
        this.mockExamSession.results[this.currentQuestion.id] = this.isCorrect;
      }

      this.saveProgress();

      this.$nextTick(() => {
        if (this.$refs.nextButton) {
          this.$refs.nextButton.scrollIntoView({ behavior: "smooth", block: "center" });
          this.$refs.nextButton.focus();
        }
      });
    },

    normalizeString(str, preserveLineBreaks = false) {
      if (!str) return '';
      let normalized = str.toLowerCase();
      if (preserveLineBreaks) {
        normalized = normalized.trim().replace(/[()[\]{}]/g, '');
      } else {
        normalized = normalized.replace(/\s+/g, '').replace(/[()[\]{}]/g, '').trim();
      }
      return normalized;
    },

    nextQuestion() {
      if (!this.currentQuestion) return;
      if (this.playMode === 'review') {
        this.nextReviewQuestion();
        return;
      }
      if (this.playMode === 'code') {
        if (this.currentQuestionIndex + 1 >= this.codeSessionIds.length) {
          this.currentQuestion = null;
          this.userAnswer = '';
          this.answered = false;
          this.isCorrect = false;
          this.showMode = 'codePicker';
          this.showAlert('코드 문제 완료', `선택한 코드 문제 ${this.codeSessionIds.length}개를 모두 확인했습니다.`);
        } else {
          this.currentQuestionIndex++;
          this.setupQuestion(this.getQuestionById(this.codeSessionIds[this.currentQuestionIndex]), false);
        }
        this.saveProgress();
        return;
      }
      if (this.playMode === 'mockExam') {
        if (this.currentQuestionIndex + 1 >= this.mockExamQuestions.length) {
          const results = this.mockExamSession?.results || {};
          const total = this.mockExamQuestions.length;
          const correct = this.mockExamQuestions.filter(question => results[question.id] === true).length;
          const score = Math.round(correct / total * 100);
          const missing = this.mockExamQuestions.filter(question => typeof results[question.id] !== 'boolean').length;
          const verdict = missing ? '판정 불가' : score >= 60 ? '합격' : '불합격';
          const note = missing ? `이전 버전에서 푼 ${missing}문제는 채점 기록이 없어 정답 수와 점수에 포함되지 않았습니다.` : '';
          delete this.mockExamSessions[this.mockExamSession?.examKey];
          this.mockExamSession = null;
          this.currentQuestion = null;
          this.userAnswer = '';
          this.answered = false;
          this.isCorrect = false;
          this.showMode = 'mockExam';
          this.showAlert('응시 완료', '선택한 회차의 모든 문제를 풀었습니다.');
          this.alertModal.examResult = { total, correct, score, verdict, missing, note };
          this.saveProgress();
          return;
        }
        this.currentQuestionIndex++;
        this.setupQuestion(this.mockExamQuestions[this.currentQuestionIndex], false);
        this.saveProgress();
        return;
      }
      this.currentQuestionIndex++;
      this.generateQuestion();
      this.saveProgress();
    },

    skipQuestion() {
      if (!['random', 'code'].includes(this.playMode) || this.answered) return;
      this.nextQuestion();
    },

    getQuestionById(id) {
      return this.pstData.find(item => item.id === id);
    },
    startReviewQuestion(id, source) {
      const question = this.getQuestionById(id);
      if (!question) return;
      this.saveCurrentSession();
      if (this.practiceSessions[source]?.currentQuestionId === id && this.restorePracticeSession(source)) {
        this.saveProgress();
        return;
      }
      const ids = source === 'bookmarks' ? this.bookmarkedQuestions : this.wrongQuestions;
      this.reviewSessionIds = ids.filter(item => this.getQuestionById(item));
      if (!this.reviewSessionIds.includes(id)) this.reviewSessionIds = [id];
      this.reviewSource = source;
      this.currentQuestionIndex = this.reviewSessionIds.indexOf(id);
      this.playMode = 'review';
      this.showMode = 'quiz';
      this.setupQuestion(question, false);
      this.saveProgress();
    },
    saveProgress() {
      this.saveCurrentSession();
      const progress = {
        ...getCommonProgress(this),
        practiceSessions: this.practiceSessions,
        mockExamSession: this.mockExamSession,
        mockExamSessions: this.mockExamSessions,
        showMode: this.showMode,
        selectedExamKey: this.selectedExamKey,
        selectedCodeLanguage: this.selectedCodeLanguage,
        selectedCodeExamKey: this.selectedCodeExamKey,
        codeQuestionOrder: this.codeQuestionOrder,
        codeSolvedQuestions: this.codeSolvedQuestions,
        codeSessionIds: this.codeSessionIds
      };
      localStorage.setItem('pstQuiz_progress', JSON.stringify(progress));
      localStorage.setItem('pstQuiz_lastSession', progress.lastSession);
    },

    loadProgress() {
      const saved = localStorage.getItem('pstQuiz_progress');
      if (saved) {
        try {
          const progress = JSON.parse(saved);
          this.mockExamSession = progress.mockExamSession || null;
          this.mockExamSessions = progress.mockExamSessions && typeof progress.mockExamSessions === 'object' ? progress.mockExamSessions : {};
          if (this.mockExamSession && !this.mockExamSessions[this.mockExamSession.examKey]) this.mockExamSessions[this.mockExamSession.examKey] = this.mockExamSession;
          this.practiceSessions = progress.practiceSessions && typeof progress.practiceSessions === 'object' && !Array.isArray(progress.practiceSessions) ? progress.practiceSessions : {};
          restoreCommonProgress(this, progress);
          this.codeSolvedQuestions = Array.isArray(progress.codeSolvedQuestions) ? progress.codeSolvedQuestions : [];
          this.selectedExamKey = progress.selectedExamKey || '2026-2';
          this.selectedCodeLanguage = ['all', ...codeLanguages].includes(progress.selectedCodeLanguage) ? progress.selectedCodeLanguage : 'C';
          this.selectedCodeExamKey = progress.selectedCodeExamKey || 'all';
          this.codeQuestionOrder = progress.codeQuestionOrder === 'ordered' ? 'ordered' : 'random';
          this.codeSessionIds = Array.isArray(progress.codeSessionIds) ? progress.codeSessionIds : [];
          this.showMode = ['quiz', 'codePicker', 'mockExam', 'bookmarks', 'wrong', 'recommendations', 'tutor', 'trends'].includes(progress.showMode) ? progress.showMode : 'quiz';
          this.currentQuestion = this.getQuestionById(this.currentQuestion?.id) || null;
          if (this.playMode === 'code') {
            const validSession = this.codeSessionIds.length && this.codeSessionIds.every(id => getCodeLanguage(this.getQuestionById(id)));
            const question = this.getQuestionById(this.codeSessionIds[this.currentQuestionIndex]);
            if (validSession && question && this.currentQuestion?.id === question.id) this.currentQuestion = question;
            else { this.currentQuestion = null; if (this.showMode === 'quiz') this.showMode = 'codePicker'; }
          }
          if (this.playMode === 'mockExam') {
            const exam = this.pstExams.find(item => item.questions.some(question => question.id === this.currentQuestion?.id));
            if (exam) {
              this.mockExamQuestions = exam.questions;
              if (this.showMode === 'quiz') this.selectedExamKey = exam.key;
            }
            else { this.currentQuestion = null; if (this.showMode === 'quiz') this.showMode = 'mockExam'; }
          }
          if (this.playMode === 'review' && (!this.currentQuestion ||
            this.reviewSessionIds[this.currentQuestionIndex] !== this.currentQuestion.id ||
            !(this.reviewSource === 'bookmarks' ? this.bookmarkedQuestions : this.wrongQuestions).includes(this.currentQuestion.id))) {
            this.currentQuestion = null;
            if (this.showMode === 'quiz') this.showMode = this.reviewSource;
          }
          if (this.currentQuestion && (!Number.isInteger(this.currentQuestionIndex) || this.currentQuestionIndex < 0 ||
            (this.playMode === 'mockExam' && this.mockExamQuestions[this.currentQuestionIndex]?.id !== this.currentQuestion.id))) {
            this.currentQuestion = null;
            this.showMode = this.playMode === 'mockExam' ? 'mockExam' : 'quiz';
          }
        } catch (e) {
          console.error('Failed to load progress:', e);
        }
      }
    },

    resetProgress() {
      this.showConfirm(
        '진행 상황 초기화',
        '진행 상황을 초기화하시겠습니까?',
        () => {
          localStorage.removeItem('pstQuiz_progress');
          localStorage.removeItem('pstQuiz_lastSession');

          this.correctCount = 0;
          this.wrongCount = 0;
          this.totalCount = 0;
          // this.bookmarkedQuestions = [];
          this.solvedQuestions = [];
          this.codeSolvedQuestions = [];
          this.wrongQuestions = [];
          this.usedQuestions = [];
          this.currentQuestionIndex = 0;
          this.currentQuestion = null;
          this.playMode = 'random';
          this.reviewSessionIds = [];
          this.mockExamQuestions = [];
          this.mockExamSession = null;
          this.mockExamSessions = {};
          this.practiceSessions = {};
          this.codeSessionIds = [];
          this.answered = false;
          this.isCorrect = false;
          this.userAnswer = '';

          this.closeConfirmModal();
          this.showAlert('완료', '진행 상황이 초기화되었습니다.');

          this.showMode = 'quiz';
          this.generateQuestion();
        }
      );
    },

    getQuizInfo(id) {
      if (!id) return "NO INFO";
      const exam = pstExams.find(exam => exam.questions.some(question => question.id === id));
      if (!exam) return `ID: ${id}`;
      const questionNum = exam.questions.findIndex(question => question.id === id) + 1;
      return `${exam.year}년 ${exam.round}회 ${questionNum}번 문제`;
    }
  }
};
</script>
