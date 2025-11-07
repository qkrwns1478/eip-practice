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
          <button 
            @click="toggleBookmark" 
            class="bookmark-btn"
            :class="{ bookmarked: isCurrentQuestionBookmarked }"
          >
            {{ isCurrentQuestionBookmarked ? '⭐' : '☆' }}
          </button>
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
            <p>정답: {{ getQuestionById(id)?.answer || '설명 없음' }}</p>
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
            <p>정답: {{ getQuestionById(id)?.answer || '설명 없음' }}</p>
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
@import "../assets/style/GeoQuiz.css";

.pst-quiz-layout.quiz-container {
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.icon-menu-bar {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 10px 20px;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
  min-height: 0;
  flex-wrap: wrap;
  margin: 0;
}

.icon-menu-bar button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid transparent;
  background-color: transparent;
  color: var(--color-text-light);
  border-radius: 8px;
  transition: all 0.2s ease;
  box-shadow: none;
}

.icon-menu-bar button:hover:not(.active) {
  background-color: var(--color-background);
  color: var(--color-text);
  transform: none;
  box-shadow: none;
  border-color: transparent;
}

.icon-menu-bar button.active {
  background-color: var(--color-primary-light);
  color: var(--color-primary);
  border-color: transparent;
  box-shadow: none;
}

.icon-menu-bar button.reset-btn {
  margin-left: auto;
  border-color: transparent;
}
.icon-menu-bar button.reset-btn:hover,
.icon-menu-bar button.reset-btn.active {
  background-color: #fcf1f2;
  color: var(--color-danger);
  border-color: transparent;
  transform: none;
  box-shadow: none;
}

.icon-menu-bar button svg {
  width: 20px;
  height: 20px;
  stroke-width: 2;
  color: currentColor;
}

.icon-menu-bar button .tooltip-text {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 8px;
  
  background-color: var(--color-text);
  color: var(--color-white);
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 20;
  pointer-events: none;
}

.icon-menu-bar button .tooltip-text::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent var(--color-text) transparent;
}

.icon-menu-bar button:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.pst-quiz-layout .quiz-content,
.pst-quiz-layout .bookmarks-content,
.pst-quiz-layout .wrong-content,
.pst-quiz-layout .stats-content,
.pst-quiz-layout .no-question {
  flex: 1;
  overflow-y: auto;
  padding: 30px;
  
  border: none;
  box-shadow: none;
  border-radius: 0;
  background-color: transparent;
  
  /* max-width: 960px; */
  /* margin: 0 auto; */
  width: 100%;
  box-sizing: border-box;
}
.pst-quiz-layout .no-question {
  max-width: 100%;
}

.pst-question .code-block {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  padding: 16px;
  border-radius: 8px;
  text-align: left;
  overflow-x: auto;
  margin-bottom: 20px;
  font-family: Consolas, 'Courier New', monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.pst-question .image-container {
  margin-bottom: 20px;
}

.pst-question .image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.pst-question .options-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
  text-align: left;
}

.pst-question .option-item { 
  background: var(--color-white); 
  border: 1px solid var(--color-border);
  padding: 12px 16px; 
  border-radius: 8px; 
  border-left: 4px solid var(--color-primary); 
  white-space: pre-line;
}

.answer-input { height: auto; min-height: 48px; align-items: flex-start; }
.answer-input textarea { 
  flex: 1; 
  padding: 12px 16px; 
  font-size: 16px; 
  font-family: inherit; 
  border: 1px solid var(--color-border); 
  border-radius: 8px; 
  transition: border-color 0.3s ease, box-shadow 0.3s ease; 
  resize: vertical; 
  min-height: 48px; 
  line-height: 1.6;
  background-color: var(--color-white);
}
.answer-input textarea:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2); }
.answer-input textarea:disabled { background: #f1f1f1; cursor: not-allowed; }
.answer-input button { height: 48px; }
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
        if (this.$refs.answerInput) {
          this.$refs.answerInput.focus();
        }
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
    }
  }
};
</script>