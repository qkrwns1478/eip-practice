<template>
  <div class="quiz-container">
    <div class="quiz-header">
      <h2>정보처리기사 실기 랜덤 퀴즈</h2>
      <div class="score-board">
        <span class="correct">정답: {{ correctCount }}</span>
        <span class="wrong">오답: {{ wrongCount }}</span>
        <span class="total">총 문제: {{ totalCount }}</span>
        <span class="bookmarks">북마크: {{ bookmarkedQuestions.length }}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
        <span class="progress-text">{{ solvedQuestions.length }} / {{ totalAvailableQuestions }} 문제 풀이</span>
      </div>
    </div>

    <!-- 상단 메뉴 -->
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

    <!-- 퀴즈 모드 -->
    <div v-if="showMode === 'quiz' && currentQuestion" class="quiz-content">
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
        
        <!-- 단일 항목 문제 -->
        <div v-if="!currentQuestion.isMultiple" class="single-question">
          <p class="description">{{ currentQuestion.desc }}</p>
          <div class="answer-input">
            <input 
              v-model="userAnswer"
              @keyup.enter="checkAnswer"
              placeholder="답을 입력하세요"
              :disabled="answered"
              ref="answerInput"
            />
            <button @click="checkAnswer" :disabled="answered">확인</button>
          </div>
        </div>

        <!-- 다중 항목 문제 -->
        <div v-else class="multiple-question">
          <p class="main-keyword">{{ currentQuestion.mainKeyword }}</p>
          <div class="sub-items">
            <div 
              v-for="(item, index) in currentQuestion.subItems" 
              :key="index"
              class="sub-item"
              :class="{ 
                'correct': item.answered && item.isCorrect,
                'wrong': item.answered && !item.isCorrect 
              }"
            >
              <p class="sub-description">{{ index + 1 }}. {{ item.desc }}</p>
              <div class="answer-input">
                <input 
                  v-model="item.userAnswer"
                  @keyup.enter="checkSubAnswer(index)"
                  placeholder="답을 입력하세요"
                  :disabled="item.answered"
                />
                <button 
                  @click="checkSubAnswer(index)" 
                  :disabled="item.answered"
                >
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
          <button @click="nextQuestion" class="next-button">다음 문제</button>
        </div>
      </div>
    </div>

    <!-- 북마크 모드 -->
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
            <h4>{{ getQuestionById(id)?.keyword || '문제' }}</h4>
            <p>{{ getQuestionById(id)?.desc || '설명 없음' }}</p>
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

    <!-- 틀린 문제 모드 -->
    <div v-else-if="showMode === 'wrong'" class="wrong-content">
      <h3>틀린 문제 복습</h3>
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
            <h4>{{ getQuestionById(id)?.keyword || '문제' }}</h4>
            <p>{{ getQuestionById(id)?.desc || '설명 없음' }}</p>
          </div>
          <span class="retry-badge">재도전</span>
        </div>
      </div>
    </div>

    <!-- 통계 모드 -->
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
      <div class="last-session">
        <h4>마지막 학습</h4>
        <p>{{ lastSessionDate }}</p>
      </div>
    </div>

    <!-- 시작 화면 -->
    <div v-else-if="!currentQuestion && showMode === 'quiz'" class="no-question">
      <button @click="startQuiz" class="start-button">퀴즈 시작</button>
    </div>

    <!-- 확인 모달 -->
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

    <!-- 알림 모달 -->
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

<script>
import { geoData } from "../assets/geoData";
import "../assets/style/GeoQuiz.css"

export default {
  name: "GeoQuiz",
  data() {
    return {
      geoData: geoData,
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
      
      // 모달 관련
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
      }
    };
  },
  computed: {
    totalAvailableQuestions() {
      return this.geoData.filter(item => item.id).length;
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
      const saved = localStorage.getItem('geoQuiz_lastSession');
      if (!saved) return '아직 학습 기록이 없습니다';
      const date = new Date(saved);
      return date.toLocaleString('ko-KR');
    }
  },
  mounted() {
    this.loadProgress();
    this.startQuiz();
  },
  methods: {
    // 모달 관련 메서드
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
      this.generateQuestion();
    },
    
    generateQuestion() {
      const availableQuestions = this.geoData.filter(item => {
        return item.id && !this.usedQuestions.includes(item.id);
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
      const subItems = this.geoData.filter(item => item.parentId === selectedItem.id);
      
      if (subItems.length > 0) {
        this.currentQuestion = {
          id: selectedItem.id,
          mainKeyword: selectedItem.keyword,
          isMultiple: true,
          subItems: subItems.map(item => ({
            keyword: item.keyword,
            desc: item.desc,
            alt: item.alt || null,
            userAnswer: '',
            answered: false,
            isCorrect: false
          })),
          correctSubCount: 0
        };
      } else if (selectedItem.desc) {
        this.currentQuestion = {
          id: selectedItem.id,
          keyword: selectedItem.keyword,
          desc: selectedItem.desc,
          alt: selectedItem.alt || null,
          isMultiple: false
        };
      } else {
        this.generateQuestion();
        return;
      }
      
      this.usedQuestions.push(selectedItem.id);
      this.userAnswer = '';
      this.answered = false;
      this.isCorrect = false;
      
      this.$nextTick(() => {
        if (this.$refs.answerInput) {
          this.$refs.answerInput.focus();
        }
      });
    },
    
    checkAnswer() {
      if (this.answered) return;
      
      const normalizedAnswer = this.normalizeString(this.userAnswer);
      const normalizedKeyword = this.normalizeString(this.currentQuestion.keyword);
      const normalizedAlt = this.currentQuestion.alt 
        ? this.normalizeString(this.currentQuestion.alt) 
        : null;
      
      this.isCorrect = normalizedAnswer === normalizedKeyword || 
                      (normalizedAlt && normalizedAnswer === normalizedAlt);
      
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
    },
    
    checkSubAnswer(index) {
      const item = this.currentQuestion.subItems[index];
      if (item.answered) return;
      
      const normalizedAnswer = this.normalizeString(item.userAnswer);
      const normalizedKeyword = this.normalizeString(item.keyword);
      const normalizedAlt = item.alt 
        ? this.normalizeString(item.alt) 
        : null;
      
      item.isCorrect = normalizedAnswer === normalizedKeyword || 
                      (normalizedAlt && normalizedAnswer === normalizedAlt);
      
      item.answered = true;
      
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
      
      const allAnswered = this.currentQuestion.subItems.every(item => item.answered);
      if (allAnswered) {
        this.answered = true;
        
        if (!this.solvedQuestions.includes(this.currentQuestion.id)) {
          this.solvedQuestions.push(this.currentQuestion.id);
        }

        this.saveProgress();
      }
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
      this.currentQuestionIndex++;
      this.generateQuestion();
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
      return this.geoData.find(item => item.id === id);
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
        lastSession: new Date().toISOString()
      };
      
      localStorage.setItem('geoQuiz_progress', JSON.stringify(progress));
      localStorage.setItem('geoQuiz_lastSession', progress.lastSession);
    },

    loadProgress() {
      const saved = localStorage.getItem('geoQuiz_progress');
      if (saved) {
        try {
          const progress = JSON.parse(saved);
          this.correctCount = progress.correctCount || 0;
          this.wrongCount = progress.wrongCount || 0;
          this.totalCount = progress.totalCount || 0;
          this.bookmarkedQuestions = progress.bookmarkedQuestions || [];
          this.solvedQuestions = progress.solvedQuestions || [];
          this.wrongQuestions = progress.wrongQuestions || [];
        } catch (e) {
          console.error('Failed to load progress:', e);
        }
      }
    },

    resetProgress() {
      this.showConfirm(
        '진행 상황 초기화',
        '모든 진행 상황을 초기화하시겠습니까?',
        () => {
          localStorage.removeItem('geoQuiz_progress');
          localStorage.removeItem('geoQuiz_lastSession');
          
          this.correctCount = 0;
          this.wrongCount = 0;
          this.totalCount = 0;
          this.bookmarkedQuestions = [];
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

<style scoped>

</style>
