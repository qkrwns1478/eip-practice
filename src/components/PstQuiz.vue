<template>
  <div class="quiz-container">
    <div class="quiz-header">
      <h2>정보처리기사 실기 퀴즈</h2>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
        <span class="progress-text">{{ solvedQuestions.length }} / {{ totalAvailableQuestions }} 문제 풀이</span>
      </div>
    </div>

    <div class="menu-bar">
      <button @click="showMode = 'quiz'" :class="{ active: showMode === 'quiz' }">
        📝 퀴즈
      </button>
      <button @click="showMode = 'bookmarks'" :class="{ active: showMode === 'bookmarks' }">
        ⭐ 북마크 ({{ bookmarkedQuestions.length }})
      </button>
      <button @click="showMode = 'wrong'" :class="{ active: showMode === 'wrong' }">
        ❌ 틀린 문제 ({{ wrongQuestions.length }})
      </button>
      <button @click="showMode = 'stats'" :class="{ active: showMode === 'stats' }">
        📊 통계
      </button>
      <button @click="resetProgress" class="reset-btn">
        🔄 초기화
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

    </div>
</template>

<style>
@import "../assets/style/GeoQuiz.css";

.pst-question .code-block {
  background: #f4f4f4;
  border: 1px solid var(--color-border);
  padding: 16px;
  border-radius: 8px;
  text-align: left;
  overflow-x: auto;
  margin-bottom: 20px;
  font-family: Consolas, 'Courier New', monospace;
  white-space: pre-wrap; /* 코드가 길 때 줄바꿈 */
  word-wrap: break-word; /* 단어가 길 때 줄바꿈 */
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
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  text-align: left;
}

.pst-question .option-item {
  background: var(--color-primary-light);
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 4px solid var(--color-primary);
}

.answer-input {
  height: auto;
  min-height: 48px;
  align-items: flex-start; 
}

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
}

.answer-input textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}

.answer-input textarea:disabled {
  background: #f1f1f1;
  cursor: not-allowed;
}

.answer-input button {
  height: 48px;
}
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
      confirmModal: {
        title: "",
        message: "",
        onConfirm: null
      },
      showAlertModal: false,
      alertModal: {
        icon: "",
        title: "",
        message: ""
      },
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
    
    closeConfirmModal() {
      this.showConfirmModal = false;
    },
    
    showAlert(icon, title, message) {
      this.alertModal = { icon, title, message };
      this.showAlertModal = true;
    },
    
    closeAlertModal() {
      this.showAlertModal = false;
    },
    
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

      // Shift + Enter: 기본 동작 (줄바꿈) 수행
      if (event.shiftKey) { 
        return;
      }

      // Enter: 기본 동작 (줄바꿈) 막고, 정답 확인
      event.preventDefault();
      this.checkAnswer();
    },

    checkAnswer() {
      if (this.answered) return;
      
      const answer = this.currentQuestion.answer;
      // 정답에 줄바꿈이 있는지 확인
      const requiresLineBreak = answer.includes('\n');

      const normalizedAnswer = this.normalizeString(this.userAnswer, requiresLineBreak);
      const normalizedKeyword = this.normalizeString(answer, requiresLineBreak);
      
      this.isCorrect = normalizedAnswer === normalizedKeyword;
      
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
    
    normalizeString(str, preserveLineBreaks = false) {
      if (!str) return '';

      let normalized = str.toLowerCase();

      if (preserveLineBreaks) {
        // 줄바꿈이 필요한 경우 (코드 정답 등)
        normalized = normalized
          .trim() // 양 끝 공백만 제거
          .replace(/[()[\]{}]/g, ''); // 괄호 제거 (선택적)
      } else {
        // 일반 정답 (단답형 등)
        normalized = normalized
          .replace(/\s+/g, '') // 모든 공백 (줄바꿈 포함) 제거
          .replace(/[()[\]{}]/g, '')
          .trim();
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
      if (question) {
        this.showMode = 'quiz';
        this.setupQuestion(question);
      }
    },

    startWrongQuestion(id) {
      const question = this.getQuestionById(id);
      if (question) {
        this.showMode = 'quiz';
        this.setupQuestion(question);
      }
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