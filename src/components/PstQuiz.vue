<template>
  <div class="quiz-container pst-quiz-layout">
    <div class="menu-bar icon-menu-bar">
      <button @click="showMode = 'quiz'" :class="{ active: showMode === 'quiz' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
        <span class="tooltip-text">퀴즈</span>
      </button>
      <button @click="showMode = 'bookmarks'" :class="{ active: showMode === 'bookmarks' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <span class="tooltip-text">북마크 ({{ bookmarkedQuestions.length }})</span>
      </button>
      <button @click="showMode = 'wrong'" :class="{ active: showMode === 'wrong' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        <span class="tooltip-text">틀린 문제 ({{ wrongQuestions.length }})</span>
      </button>
      <button @click="showMode = 'stats'" :class="{ active: showMode === 'stats' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20V16"/></svg>
        <span class="tooltip-text">통계</span>
      </button>
      <button @click="resetProgress" class="reset-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
        <span class="tooltip-text">초기화</span>
      </button>
    </div>

    <div v-if="showMode === 'quiz' && currentQuestion" class="quiz-content" ref="quizContent">
      <div class="question-section">
        <div class="question-header">
        <h3>문제 {{ currentQuestionIndex + 1 }}</h3>
        <div class="quiz-actions-group">
          <span class="quiz-info-badge" v-if="currentQuestion">{{ getQuizInfo(currentQuestion.id) }}</span>
          <button 
            @click="toggleBookmark" 
            class="bookmark-btn"
            :class="{ bookmarked: isCurrentQuestionBookmarked }"
          >
            {{ isCurrentQuestionBookmarked ? '⭐' : '☆' }}
          </button>
        </div>
      </div>
        
        <div class="pst-question">
          <p class="description">{{ currentQuestion.question }}</p>
          <pre v-if="currentQuestion.passageOrCode" class="code-block"><code>{{ currentQuestion.passageOrCode }}</code></pre>
          <div v-if="currentQuestion.imageUrl" class="image-container">
            <img :src="currentQuestion.imageUrl" alt="문제 이미지" />
          </div>
          <div v-if="currentQuestion.options && currentQuestion.options.length > 0" class="options-list">
            <div v-for="(option, index) in currentQuestion.options" :key="index" class="option-item">
              {{ option }}
            </div>
          </div>

          <div class="answer-input">
            <textarea 
              v-model="userAnswer"
              @keydown.enter="handleEnter"
              placeholder="답을 입력하세요 (Shift+Enter로 줄바꿈)"
              :disabled="answered"
              ref="answerInput"
            ></textarea>
            <button @click="checkAnswer" :disabled="answered">확인</button>
          </div>
        </div>

        <div v-if="answered" class="result-section">
          <p v-if="isCorrect" class="correct-result">✓ 정답입니다!</p>
          <p v-else class="wrong-result">✗ 오답입니다. 정답: {{ currentQuestion.answer }}</p>
          <button @click="nextQuestion" class="next-button" ref="nextButton">다음 문제</button>
        </div>
      </div>
    </div>

    <div v-else-if="showMode === 'bookmarks'" class="bookmarks-content">
      <h3>북마크한 문제</h3>
      <div v-if="bookmarkedQuestions.length === 0" class="empty-state">
        <p>북마크한 문제가 없습니다.</p>
      </div>
      <div v-else class="bookmark-list">
        <div 
          v-for="id in bookmarkedQuestions" 
          :key="id"
          class="bookmark-item"
          @click="startBookmarkedQuestion(id)"
        >
          <div class="bookmark-info">
            <h4>{{ getQuestionById(id)?.question || '문제' }}</h4>
            <p>{{ getQuizInfo(id) }}</p>
          </div>
          <button 
            @click.stop="removeBookmark(id)"
            class="remove-bookmark-btn"
          >
            ✕
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="showMode === 'wrong'" class="wrong-content">
      <h3>틀린 문제</h3>
      <div v-if="wrongQuestions.length === 0" class="empty-state">
        <p>틀린 문제가 없습니다. 완벽해요! 🎉</p>
      </div>
      <div v-else class="wrong-list">
        <div 
          v-for="id in wrongQuestions" 
          :key="id"
          class="wrong-item"
          @click="startWrongQuestion(id)"
        >
          <div class="wrong-info">
            <h4>{{ getQuestionById(id)?.question || '문제' }}</h4>
            <p>{{ getQuizInfo(id) }}</p>
          </div>
          <span class="retry-badge">재도전</span>
        </div>
      </div>
    </div>

    <div v-else-if="showMode === 'stats'" class="stats-content">
      <h3>학습 통계</h3>
      <div class="stats-grid">
        <div class="stat-card">
          <h4>전체 진행률</h4>
          <div class="stat-value">{{ progressPercentage.toFixed(1) }}%</div>
          <p>{{ solvedQuestions.length }} / {{ totalAvailableQuestions }} 문제</p>
        </div>
        <div class="stat-card">
          <h4>정답률</h4>
          <div class="stat-value">{{ accuracyRate.toFixed(1) }}%</div>
          <p>{{ correctCount }} / {{ totalCount }} 정답</p>
        </div>
        <div class="stat-card">
          <h4>북마크</h4>
          <div class="stat-value">{{ bookmarkedQuestions.length }}</div>
          <p>중요한 문제</p>
        </div>
        <div class="stat-card">
          <h4>틀린 문제</h4>
          <div class="stat-value">{{ wrongQuestions.length }}</div>
          <p>복습 필요</p>
        </div>
      </div>
      <div classs="last-session">
        <h4>마지막 학습</h4>
        <p>{{ lastSessionDate }}</p>
      </div>
    </div>

    <div v-else-if="!currentQuestion && showMode === 'quiz'" class="no-question">
      <button @click="startQuiz" class="start-button">퀴즈 시작</button>
    </div>

    <div v-if="showConfirmModal" class="modal-overlay" @click="closeConfirmModal">
      <div class="modal-content" @click.stop>
        <h3>{{ confirmModal.title }}</h3>
        <p>{{ confirmModal.message }}</p>
        <div class="modal-actions">
          <button @click="confirmModal.onConfirm" class="confirm-btn">확인</button>
          <button @click="closeConfirmModal" class="cancel-btn">취소</button>
        </div>
      </div>
    </div>

    <div v-if="showAlertModal" class="modal-overlay" @click="closeAlertModal">
      <div class="modal-content alert-modal" @click.stop>
        <div class="modal-icon">{{ alertModal.icon }}</div>
        <h3>{{ alertModal.title }}</h3>
        <p>{{ alertModal.message }}</p>
        <div class="modal-actions">
          <button @click="closeAlertModal" class="confirm-btn">확인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/style/style.css";
@import "../assets/style/PstQuiz.css";
</style>

<script>
import { pstData } from "../assets/pstData";

export default {
  name: "PstQuiz",
  data() {
    return {
      pstData: pstData,
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
      showMode: "quiz",
      
      showConfirmModal: false,
      confirmModal: { title: "", message: "", onConfirm: null },
      showAlertModal: false,
      alertModal: { icon: "", title: "", message: "" },
    };
  },
  computed: {
    totalAvailableQuestions() {
      return this.pstData.length;
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
      const saved = localStorage.getItem('pstQuiz_lastSession');
      if (!saved) return '아직 학습 기록이 없습니다';
      const date = new Date(saved);
      return date.toLocaleString('ko-KR');
    }
  },
  mounted() {
    this.loadProgress();
    if (!this.currentQuestion) {
      this.generateQuestion();
    }
  },
  methods: {
    showConfirm(title, message, onConfirm) {
      this.confirmModal = { title, message, onConfirm };
      this.showConfirmModal = true;
    },
    closeConfirmModal() { this.showConfirmModal = false; },
    showAlert(icon, title, message) {
      this.alertModal = { icon, title, message };
      this.showAlertModal = true;
    },
    closeAlertModal() { this.showAlertModal = false; },
    
    startQuiz() {
      this.showMode = 'quiz';
      if (!this.currentQuestion) {
        this.generateQuestion();
      }
    },
    
    generateQuestion() {
      const availableQuestions = this.pstData.filter(item => {
        return !this.usedQuestions.includes(item.id);
      });
      
      if (availableQuestions.length === 0) {
        this.showAlert('🎉', '완료!', '모든 문제를 풀었습니다!');
        this.usedQuestions = [];
        this.saveProgress();
        return;
      }
      
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const selectedItem = availableQuestions[randomIndex];
      
      this.setupQuestion(selectedItem);
    },

    setupQuestion(selectedItem) {
      this.currentQuestion = selectedItem;
      this.usedQuestions.push(selectedItem.id);
      this.userAnswer = '';
      this.answered = false;
      this.isCorrect = false;

      if (this.currentQuestionIndex > 1)
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
      if (this.answered) return;
      if (event.shiftKey) {
        return;
      }
      event.preventDefault();
      this.checkAnswer();
    },

    checkAnswer() {
      if (this.answered) return;
      
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
      this.currentQuestionIndex++;
      this.generateQuestion();
      this.saveProgress();
    },

    toggleBookmark() {
      if (!this.currentQuestion) return;
      const id = this.currentQuestion.id;
      const index = this.bookmarkedQuestions.indexOf(id);
      if (index > -1) {
        this.bookmarkedQuestions.splice(index, 1);
      } else {
        this.bookmarkedQuestions.push(id);
      }
      this.saveProgress();
    },

    removeBookmark(id) {
      const index = this.bookmarkedQuestions.indexOf(id);
      if (index > -1) {
        this.bookmarkedQuestions.splice(index, 1);
        this.saveProgress();
      }
    },

    getQuestionById(id) {
      return this.pstData.find(item => item.id === id);
    },
    startBookmarkedQuestion(id) {
      const question = this.getQuestionById(id);
      if (question) { this.showMode = 'quiz'; this.setupQuestion(question); }
    },
    startWrongQuestion(id) {
      const question = this.getQuestionById(id);
      if (question) { this.showMode = 'quiz'; this.setupQuestion(question); }
    },

    saveProgress() {
      const progress = {
        correctCount: this.correctCount,
        wrongCount: this.wrongCount,
        totalCount: this.totalCount,
        bookmarkedQuestions: this.bookmarkedQuestions,
        solvedQuestions: this.solvedQuestions,
        wrongQuestions: this.wrongQuestions,
        usedQuestions: this.usedQuestions,
        currentQuestionIndex: this.currentQuestionIndex,
        currentQuestion: this.currentQuestion,
        isCorrect: this.isCorrect,
        userAnswer: this.userAnswer,
        answered: this.answered,
        lastSession: new Date().toISOString()
      };
      localStorage.setItem('pstQuiz_progress', JSON.stringify(progress));
      localStorage.setItem('pstQuiz_lastSession', progress.lastSession);
    },

    loadProgress() {
      const saved = localStorage.getItem('pstQuiz_progress');
      if (saved) {
        try {
          const progress = JSON.parse(saved);
          this.correctCount = progress.correctCount || 0;
          this.wrongCount = progress.wrongCount || 0;
          this.totalCount = progress.totalCount || 0;
          this.bookmarkedQuestions = progress.bookmarkedQuestions || [];
          this.solvedQuestions = progress.solvedQuestions || [];
          this.wrongQuestions = progress.wrongQuestions || [];
          this.currentQuestionIndex = progress.currentQuestionIndex || 0;
          this.currentQuestion = progress.currentQuestion || null;
          this.userAnswer = progress.userAnswer || '';
          this.answered = progress.answered || false;
          this.isCorrect = progress.isCorrect || false;
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
          this.wrongQuestions = [];
          this.usedQuestions = [];
          this.currentQuestionIndex = 0;
          this.currentQuestion = null;
          this.answered = false;
          this.isCorrect = false;
          this.userAnswer = '';
          
          this.closeConfirmModal();
          this.showAlert('✅', '완료', '진행 상황이 초기화되었습니다.');
          
          this.showMode = 'quiz';
          this.generateQuestion();
        }
      );
    },

    getQuizInfo(id) {
      if (!id) return "정보 없음";

      let examInfo = "알 수 없음";
      
      if (id >= 1 && id <= 20) examInfo = "2025년 1회";
      else if (id >= 21 && id <= 40) examInfo = "2025년 2회";
      else if (id >= 41 && id <= 60) examInfo = "2024년 1회";
      else if (id >= 61 && id <= 80) examInfo = "2024년 2회";
      else if (id >= 81 && id <= 100) examInfo = "2024년 3회";
      else if (id >= 101 && id <= 120) examInfo = "2023년 1회";
      else if (id >= 121 && id <= 140) examInfo = "2023년 2회";
      else if (id >= 141 && id <= 160) examInfo = "2023년 3회";
      else if (id >= 161 && id <= 180) examInfo = "2022년 1회";
      else if (id >= 181 && id <= 200) examInfo = "2022년 2회";
      else if (id >= 201 && id <= 220) examInfo = "2022년 3회";
      
      if (examInfo === "알 수 없음") {
        return `ID: ${id}`;
      }
      
      const questionNum = (id - 1) % 20 + 1;
      return `${examInfo} ${questionNum}번 문제`;
    }
  }
};
</script>