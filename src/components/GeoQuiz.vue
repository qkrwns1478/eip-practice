<template>
  <div class="quiz-container geo-quiz-layout">

    <div class="menu-bar icon-menu-bar">
      <img class="eip-logo" src="/logo.png" alt="EIP" draggable="false" />
      <button @click="openRandomQuiz" aria-label="퀴즈" :class="{ active: showMode === 'quiz' && playMode === 'random' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
        <span class="tooltip-text">퀴즈</span>
      </button>
      <slot name="mode-selector" />
      <button @click="showMode = 'study'" aria-label="공부 모드" :class="{ active: showMode === 'study' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        <span class="tooltip-text">공부 모드</span>
      </button>
      <button @click="showMode = 'bookmarks'" aria-label="북마크" class="menu-count-button" :class="{ active: showMode === 'bookmarks' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span class="tooltip-text">북마크 <span class="menu-count-badge">{{ bookmarkedQuestions.length }}</span></span>
      </button>
      <button @click="showMode = 'wrong'" aria-label="틀린 문제" class="menu-count-button" :class="{ active: showMode === 'wrong' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        <span class="tooltip-text">틀린 문제 <span class="menu-count-badge">{{ wrongQuestions.length }}</span></span>
      </button>
      <button @click="resetProgress" aria-label="현재 모드 진행 상황 초기화" class="reset-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
        <span class="tooltip-text">초기화</span>
      </button>
    </div>

    <!-- 퀴즈 모드 -->
    <div v-if="showMode === 'quiz' && currentQuestion" class="quiz-content" ref="quizContent">
      <div class="question-section">
        <div class="question-header">
          <h3>문제 {{ currentQuestionIndex + 1 }}</h3>
          <div class="question-actions-group">
            <button v-if="isRandomQuiz && !answered" @click="skipQuestion" class="skip-button">다음 문제</button>
            <button @click="toggleBookmark" class="bookmark-btn" :class="{ bookmarked: isCurrentQuestionBookmarked }">
              {{ isCurrentQuestionBookmarked ? '★' : '☆' }}
            </button>
          </div>
        </div>

        <img v-if="currentQuestion.image" :src="currentQuestion.image" alt="문제에 제시된 다이어그램" class="keyword-question-image" />
        <!-- 단일 항목 문제 -->
        <div v-if="!currentQuestion.isMultiple" class="single-question">
          <p class="description">{{ currentQuestion.desc }}</p>
          <div class="answer-input">
            <input v-model="userAnswer" @keydown.enter.prevent="checkAnswer" placeholder="답을 입력하세요" :disabled="answered"
              ref="answerInput" />
            <button @click="checkAnswer" :disabled="answered">확인</button>
          </div>
        </div>

        <!-- 다중 항목 문제 -->
        <div v-else class="multiple-question">
          <p class="main-keyword">{{ currentQuestion.mainKeyword }}</p>
          <div class="sub-items">
            <div v-for="(item, index) in currentQuestion.subItems" :key="index" class="sub-item" :class="{
              'correct': item.answered && item.isCorrect,
              'wrong': item.answered && !item.isCorrect
            }">
              <p class="sub-description">{{ index + 1 }}. {{ item.desc }}</p>
              <div class="answer-input">
                <input v-model="item.userAnswer" @keydown.enter.prevent="checkSubAnswer(index)" placeholder="답을 입력하세요"
                  :disabled="item.answered" :ref="el => { if (el) subItemInputs[index] = el }" />
                <button @click="checkSubAnswer(index)" :disabled="item.answered">
                  확인
                </button>
              </div>
              <div v-if="item.answered" class="result">
                <span v-if="item.isCorrect" class="correct-mark">✓ 정답!</span>
                <span v-else class="wrong-mark">✗ 오답: {{ item.keyword }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 결과 표시 -->
        <div v-if="answered" class="result-section">
          <div v-if="!currentQuestion.isMultiple">
            <p v-if="isCorrect" class="correct-result">✓ 정답입니다!</p>
            <p v-else class="wrong-result">✗ 오답입니다. 정답: {{ currentQuestion.keyword }}</p>
          </div>
          <div v-else>
            <p class="multiple-result">
              {{ currentQuestion.correctSubCount }} / {{ currentQuestion.subItems.length }} 정답
            </p>
          </div>
          <div class="result-actions">
            <button type="button" @click="openExplanation" class="result-action-button">해설</button>
            <button @click="nextQuestion" class="result-action-button" ref="nextButton">다음 문제</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 공부 모드: 퀴즈 기록을 변경하지 않고 전체 개념을 열람한다. -->
    <div v-else-if="showMode === 'study'" class="study-content">
      <header class="study-header">
        <h3>공부 모드</h3>
      </header>
      <div class="study-list">
        <article v-for="(question, index) in studyQuestions" :key="question.id" class="study-card">
          <div class="study-card-header">
            <span class="study-number">{{ index + 1 }}</span>
            <h4>{{ questionStudy ? (question.desc || question.keyword) : question.keyword }}</h4>
          </div>
          <p v-if="question.desc && !questionStudy" class="study-description">{{ question.desc }}</p>
          <img v-if="question.image" :src="question.image" alt="문제에 제시된 다이어그램" class="keyword-question-image" />
          <p v-if="questionStudy && !question.subItems.length" class="study-answer"><strong>정답</strong> {{ question.keyword }}</p>
          <div v-if="question.subItems.length" class="study-sub-list">
            <div v-for="(item, subIndex) in question.subItems" :key="item.childId" class="study-sub-item">
              <template v-if="questionStudy">
                <p class="study-prompt">{{ subIndex + 1 }}. {{ item.desc }}</p>
                <p class="study-answer"><strong>정답</strong> {{ item.keyword }}</p>
              </template>
              <template v-else>
                <strong>{{ subIndex + 1 }}. {{ item.keyword }}</strong>
                <span v-if="item.alt"> ({{ item.alt }})</span>
                <p>{{ item.desc }}</p>
              </template>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- 북마크 모드 -->
    <SavedQuestionList v-else-if="showMode === 'bookmarks'" type="bookmarks" :ids="bookmarkedQuestions"
      :get-question="getQuestionById" title-key="keyword" subtitle-key="desc"
      :saved-explanations="savedExplanations" :saved-answers="savedAnswers"
      :exporting="notesExporting" :export-status="notesExportStatus" @export="generate => exportNotes('bookmarks', generate)" @select="startBookmarkedQuestion" @remove="removeBookmark" />

    <!-- 틀린 문제 모드 -->
    <SavedQuestionList v-else-if="showMode === 'wrong'" type="wrong" :ids="wrongQuestions"
      :get-question="getQuestionById" title-key="keyword" subtitle-key="desc"
      :saved-explanations="savedExplanations" :saved-answers="savedAnswers"
      :exporting="notesExporting" :export-status="notesExportStatus" @export="generate => exportNotes('wrong', generate)" @select="startWrongQuestion" @remove="removeWrongQuestion" />

    <!-- 시작 화면 -->
    <div v-else-if="!currentQuestion && showMode === 'quiz'" class="no-question">
      <button @click="startQuiz" class="start-button">퀴즈 시작</button>
    </div>

    <!-- 확인 모달 -->
    <ExplanationModal v-if="showExplanationModal" :text="explanationText" :error="explanationError"
      :loading="explanationLoading" @close="showExplanationModal = false" @retry="openExplanation" />
    <QuizModals :show-confirm="showConfirmModal" :confirm="confirmModal" :show-alert="showAlertModal"
      :alert="alertModal" @close-confirm="closeConfirmModal" @close-alert="closeAlertModal" />
  </div>
</template>

<style>
@import "../assets/style/style.css";
@import "../assets/style/GeoQuiz.css";
</style>

<script>
import { geoData } from "../assets/geoData";
import SavedQuestionList from './SavedQuestionList.vue';
import QuizModals from './QuizModals.vue';
import ExplanationModal from './ExplanationModal.vue';
import { quizExplanationMixin } from '../utils/quizExplanation.js';
import { quizNotesMixin } from '../utils/quizNotes.js';
import { commonQuizComputed, commonQuizMethods, getCommonProgress, restoreCommonProgress } from '../utils/quizCommon.js';

export default {
  name: "GeoQuiz",
  components: { SavedQuestionList, QuizModals, ExplanationModal },
  mixins: [quizExplanationMixin, quizNotesMixin],
  props: {
    questions: { type: Array, default: () => geoData },
    storagePrefix: { type: String, default: 'geoQuiz' },
    initialView: { type: String, default: null },
    questionStudy: { type: Boolean, default: false }
  },
  data() {
    return {
      geoData: this.questions,
      currentQuestion: null,
      currentQuestionIndex: 0,
      userAnswer: "",
      answered: false,
      isCorrect: false,
      correctCount: 0,
      wrongCount: 0,
      totalCount: 0,
      usedQuestions: [],
      bookmarkedQuestions: [],
      solvedQuestions: [],
      wrongQuestions: [],
      showMode: this.initialView || 'quiz',
      playMode: "random",
      reviewSource: 'wrong',
      reviewSessionIds: [],
      practiceSessions: {},

      showConfirmModal: false,
      confirmModal: {
        title: "",
        message: "",
        onConfirm: null
      },
      showAlertModal: false,
      alertModal: {
        title: "",
        message: ""
      },
      subItemInputs: []
    };
  },
  computed: {
    ...commonQuizComputed,
    totalAvailableQuestions() {
      return this.geoData.filter(item => item.id).length;
    },
    isRandomQuiz() {
      return this.playMode === 'random';
    },
    studyQuestions() {
      return this.geoData
        .filter(item => item.id)
        .map(item => ({
          ...item,
          subItems: this.geoData.filter(subItem => subItem.parentId === item.id)
        }))
        .filter(item => item.desc || item.subItems.length);
    }
  },
  mounted() {
    this.loadProgress();
    // this.startQuiz();
    if (this.showMode === 'quiz' && !this.currentQuestion) {
      this.generateQuestion();
    }
  },
  watch: {
    userAnswer() { this.saveProgress(); },
    showMode() { this.saveProgress(); },
    currentQuestion: { deep: true, handler() { this.saveProgress(); } },
  },
  beforeUnmount() {
    this.saveProgress();
  },
  methods: {
    ...commonQuizMethods,
    saveCurrentSession() {
      const key = this.playMode === 'review' ? this.reviewSource : 'random';
      if (this.playMode === 'review' && !(key === 'bookmarks' ? this.bookmarkedQuestions : this.wrongQuestions).includes(this.currentQuestion?.id)) {
        delete this.practiceSessions[key];
        return;
      }
      this.practiceSessions[key] = {
        currentQuestion: this.currentQuestion ? JSON.parse(JSON.stringify(this.currentQuestion)) : null,
        currentQuestionIndex: this.currentQuestionIndex,
        userAnswer: this.userAnswer,
        answered: this.answered,
        isCorrect: this.isCorrect,
        reviewSessionIds: [...this.reviewSessionIds],
      };
    },
    restorePracticeSession(key) {
      const session = this.practiceSessions[key];
      if (!session?.currentQuestion || !this.getQuestionById(session.currentQuestion.id) ||
        !Number.isInteger(session.currentQuestionIndex) || session.currentQuestionIndex < 0 || !Array.isArray(session.reviewSessionIds)) return false;
      if (key !== 'random' && (session.reviewSessionIds[session.currentQuestionIndex] !== session.currentQuestion.id ||
        !(key === 'bookmarks' ? this.bookmarkedQuestions : this.wrongQuestions).includes(session.currentQuestion.id))) return false;
      this.playMode = key === 'random' ? 'random' : 'review';
      if (this.playMode === 'review') this.reviewSource = key;
      this.currentQuestion = JSON.parse(JSON.stringify(session.currentQuestion));
      this.currentQuestionIndex = session.currentQuestionIndex;
      this.userAnswer = session.userAnswer;
      this.answered = session.answered;
      this.isCorrect = session.isCorrect;
      this.reviewSessionIds = [...session.reviewSessionIds];
      this.showMode = 'quiz';
      return true;
    },

    startQuiz() {
      this.openRandomQuiz();
    },

    openRandomQuiz() {
      this.saveCurrentSession();
      if (this.restorePracticeSession('random')) { this.saveProgress(); return; }
      this.playMode = 'random';
      this.showMode = 'quiz';
      this.currentQuestion = null;
      this.currentQuestionIndex = 0;
      this.generateQuestion();
    },

    generateQuestion() {
      const availableQuestions = this.geoData.filter(item => {
        return item.id && !this.usedQuestions.includes(item.id);
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

    setupQuestion(selectedItem) {
      this.resetExplanation(selectedItem.id);
      const subItems = this.geoData.filter(item => item.parentId === selectedItem.id);

      if (subItems.length > 0) {
        this.currentQuestion = {
          id: selectedItem.id,
          image: selectedItem.image,
          mainKeyword: selectedItem.keyword,
          isMultiple: true,
          subItems: subItems.map(item => ({
            keyword: item.keyword,
            desc: item.desc,
            alt: item.alt || null,
            aliases: item.aliases || [],
            userAnswer: '',
            answered: false,
            isCorrect: false
          })),
          correctSubCount: 0
        };
      } else if (selectedItem.desc) {
        this.currentQuestion = {
          id: selectedItem.id,
          image: selectedItem.image,
          keyword: selectedItem.keyword,
          desc: selectedItem.desc,
          alt: selectedItem.alt || null,
          aliases: selectedItem.aliases || [],
          answerGroups: selectedItem.answerGroups || null,
          isMultiple: false
        };
      } else {
        this.generateQuestion();
        return;
      }

      if (this.playMode === 'random' && !this.usedQuestions.includes(selectedItem.id)) this.usedQuestions.push(selectedItem.id);
      this.userAnswer = '';
      this.answered = false;
      this.isCorrect = false;

      this.saveProgress();

      this.subItemInputs = [];
      this.$nextTick(() => {
        if (this.$refs.quizContent) {
          this.$refs.quizContent.scrollTop = 0;
        }
        if (this.$refs.answerInput) {
          this.$refs.answerInput.focus();
        } else if (this.subItemInputs[0]) {
          this.subItemInputs[0].focus();
        }
      });
    },

    checkAnswer() {
      if (this.answered || !this.currentQuestion) return;

      this.isCorrect = this.matchesAnswer(this.currentQuestion, this.userAnswer);

      this.answered = true;
      this.totalCount++;

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

      this.saveProgress();

      this.$nextTick(() => {
        if (this.$refs.nextButton) {
          this.$refs.nextButton.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          this.$refs.nextButton.focus();
        }
      });
    },

    checkSubAnswer(index) {
      const item = this.currentQuestion?.subItems?.[index];
      if (!item || item.answered) return;

      item.isCorrect = this.matchesAnswer(item, item.userAnswer);

      item.answered = true;

      this.$nextTick(() => {
        const nextIndex = index + 1;
        if (nextIndex < this.currentQuestion.subItems.length) {
          const nextInput = this.subItemInputs[nextIndex];
          if (nextInput) {
            nextInput.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });

            setTimeout(() => {
              nextInput.focus();
            }, 100);
          }
        }
      });

      if (item.isCorrect) {
        this.currentQuestion.correctSubCount++;
        this.correctCount++;
      } else {
        this.wrongCount++;
        if (!this.wrongQuestions.includes(this.currentQuestion.id)) {
          this.wrongQuestions.push(this.currentQuestion.id);
        }
      }

      this.totalCount++;

      this.saveProgress();

      const allAnswered = this.currentQuestion.subItems.every(item => item.answered);
      if (allAnswered) {
        this.answered = true;

        if (!this.solvedQuestions.includes(this.currentQuestion.id)) {
          this.solvedQuestions.push(this.currentQuestion.id);
        }

        this.saveProgress();

        this.$nextTick(() => {
          if (this.$refs.nextButton) {
            this.$refs.nextButton.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            this.$refs.nextButton.focus();
          }
        });
      }
    },

    matchesAnswer(question, answer) {
      if (question.answerGroups) {
        const parts = answer.split(/[,，;\n]+/).map(part => this.normalizeString(part.trim()));
        const remaining = [...question.answerGroups];
        if (parts.length !== remaining.length) return false;
        for (const part of parts) {
          const index = remaining.findIndex(group => group.some(value => this.normalizeString(value) === part));
          if (index < 0) return false;
          remaining.splice(index, 1);
        }
        return true;
      }
      const normalized = this.normalizeString(answer);
      return [question.keyword, question.alt, ...(question.aliases || [])]
        .filter(Boolean).some(value => this.normalizeString(value) === normalized);
    },

    normalizeString(str) {
      if (!str) return '';
      return str
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/[()[\]{}]/g, '')
        .trim();
    },

    nextQuestion() {
      if (!this.currentQuestion) return;
      if (this.playMode === 'review') {
        this.nextReviewQuestion();
        return;
      }
      this.currentQuestionIndex++;
      this.generateQuestion();
      this.saveProgress();
    },

    skipQuestion() {
      if (!this.isRandomQuiz || this.answered) return;
      this.nextQuestion();
    },

    getQuestionById(id) {
      return this.geoData.find(item => item.id === id);
    },

    startReviewQuestion(id, source) {
      const question = this.getQuestionById(id);
      if (!question) return;
      this.saveCurrentSession();
      if (this.practiceSessions[source]?.currentQuestion?.id === id && this.restorePracticeSession(source)) {
        this.saveProgress(); return;
      }
      const ids = source === 'bookmarks' ? this.bookmarkedQuestions : this.wrongQuestions;
      this.reviewSessionIds = ids.filter(item => this.getQuestionById(item));
      if (!this.reviewSessionIds.includes(id)) this.reviewSessionIds = [id];
      this.reviewSource = source;
      this.currentQuestionIndex = this.reviewSessionIds.indexOf(id);
      this.playMode = 'review';
      this.showMode = 'quiz';
      this.setupQuestion(question);
    },

    saveProgress() {
      this.saveCurrentSession();
      const progress = {
        ...getCommonProgress(this),
        practiceSessions: this.practiceSessions,
        showMode: this.showMode,
      };

      localStorage.setItem(`${this.storagePrefix}_progress`, JSON.stringify(progress));
      localStorage.setItem(`${this.storagePrefix}_lastSession`, progress.lastSession);
    },

    loadProgress() {
      const saved = localStorage.getItem(`${this.storagePrefix}_progress`);
      if (saved) {
        try {
          const progress = JSON.parse(saved);
          restoreCommonProgress(this, progress);
          if (!['random', 'review'].includes(this.playMode)) { this.playMode = 'random'; this.currentQuestion = null; }
          this.practiceSessions = progress.practiceSessions && typeof progress.practiceSessions === 'object' && !Array.isArray(progress.practiceSessions) ? progress.practiceSessions : {};
          this.showMode = this.initialView || (['quiz', 'study', 'bookmarks', 'wrong', 'stats'].includes(progress.showMode) ? progress.showMode : 'quiz');
          if (this.currentQuestion && !this.getQuestionById(this.currentQuestion.id)) this.currentQuestion = null;
          if (this.playMode === 'review' && this.currentQuestion &&
            (this.reviewSessionIds[this.currentQuestionIndex] !== this.currentQuestion.id ||
            !(this.reviewSource === 'bookmarks' ? this.bookmarkedQuestions : this.wrongQuestions).includes(this.currentQuestion.id))) this.currentQuestion = null;
          if (this.playMode === 'review' && !this.currentQuestion && this.showMode === 'quiz') this.showMode = this.reviewSource;
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
          localStorage.removeItem(`${this.storagePrefix}_progress`);
          localStorage.removeItem(`${this.storagePrefix}_lastSession`);

          this.correctCount = 0;
          this.wrongCount = 0;
          this.totalCount = 0;
          // this.bookmarkedQuestions = [];
          this.solvedQuestions = [];
          this.wrongQuestions = [];
          this.usedQuestions = [];
          this.currentQuestionIndex = 0;
          this.currentQuestion = null;
          this.playMode = 'random';
          this.reviewSessionIds = [];
          this.practiceSessions = {};
          this.answered = false;
          this.isCorrect = false;
          this.userAnswer = '';

          this.closeConfirmModal();
          this.showAlert('완료', '진행 상황이 초기화되었습니다.');

          this.showMode = 'quiz';
          this.generateQuestion();
        }
      );
    }
  }
};
</script>
