<template>
  <div class="quiz-container">
    <div class="quiz-header">
      <h2>정보처리기사 실기 랜덤 퀴즈</h2>
      <div class="score-board">
        <span class="correct">정답: {{ correctCount }}</span>
        <span class="wrong">오답: {{ wrongCount }}</span>
        <span class="total">총 문제: {{ totalCount }}</span>
      </div>
    </div>

    <div v-if="currentQuestion" class="quiz-content">
      <div class="question-section">
        <h3>문제 {{ currentQuestionIndex + 1 }}</h3>

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
                correct: item.answered && item.isCorrect,
                wrong: item.answered && !item.isCorrect,
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
                <button @click="checkSubAnswer(index)" :disabled="item.answered">확인</button>
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

    <div v-else class="no-question">
      <button @click="startQuiz" class="start-button">퀴즈 시작</button>
    </div>
  </div>
</template>

<script>
import { geoData } from "../assets/geoData";

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
    };
  },
  mounted() {
    this.startQuiz();
  },
  methods: {
    startQuiz() {
      this.generateQuestion();
    },

    generateQuestion() {
      // 아직 사용하지 않은 문제 찾기
      const availableQuestions = this.geoData.filter((item) => {
        return item.id && !this.usedQuestions.includes(item.id);
      });

      if (availableQuestions.length === 0) {
        alert("모든 문제를 풀었습니다!");
        this.usedQuestions = [];
        return;
      }

      // 랜덤으로 문제 선택
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const selectedItem = availableQuestions[randomIndex];

      // 해당 id의 하위 항목들 찾기
      const subItems = this.geoData.filter((item) => item.parentId === selectedItem.id);

      if (subItems.length > 0) {
        // 다중 항목 문제
        this.currentQuestion = {
          id: selectedItem.id,
          mainKeyword: selectedItem.keyword,
          isMultiple: true,
          subItems: subItems.map((item) => ({
            keyword: item.keyword,
            desc: item.desc,
            alt: item.alt || null,
            userAnswer: "",
            answered: false,
            isCorrect: false,
          })),
          correctSubCount: 0,
        };
      } else if (selectedItem.desc) {
        // 단일 항목 문제
        this.currentQuestion = {
          id: selectedItem.id,
          keyword: selectedItem.keyword,
          desc: selectedItem.desc,
          alt: selectedItem.alt || null,
          isMultiple: false,
        };
      } else {
        // desc가 없는 경우 다시 선택
        this.generateQuestion();
        return;
      }

      this.usedQuestions.push(selectedItem.id);
      this.userAnswer = "";
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
      const normalizedAlt = this.currentQuestion.alt ? this.normalizeString(this.currentQuestion.alt) : null;

      this.isCorrect =
        normalizedAnswer === normalizedKeyword || (normalizedAlt && normalizedAnswer === normalizedAlt);

      this.answered = true;
      this.totalCount++;

      if (this.isCorrect) {
        this.correctCount++;
      } else {
        this.wrongCount++;
      }
    },

    checkSubAnswer(index) {
      const item = this.currentQuestion.subItems[index];
      if (item.answered) return;

      const normalizedAnswer = this.normalizeString(item.userAnswer);
      const normalizedKeyword = this.normalizeString(item.keyword);
      const normalizedAlt = item.alt ? this.normalizeString(item.alt) : null;

      item.isCorrect =
        normalizedAnswer === normalizedKeyword || (normalizedAlt && normalizedAnswer === normalizedAlt);

      item.answered = true;

      if (item.isCorrect) {
        this.currentQuestion.correctSubCount++;
        this.correctCount++;
      } else {
        this.wrongCount++;
      }

      this.totalCount++;

      // 모든 하위 항목이 답변되었는지 확인
      const allAnswered = this.currentQuestion.subItems.every((item) => item.answered);
      if (allAnswered) {
        this.answered = true;
      }
    },

    normalizeString(str) {
      if (!str) return "";
      return str
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[()[\]{}]/g, "")
        .trim();
    },

    nextQuestion() {
      this.currentQuestionIndex++;
      this.generateQuestion();
    },
  },
};
</script>

<style scoped>
.quiz-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Noto Sans KR", sans-serif;
}

.quiz-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.quiz-header h2 {
  margin: 0 0 20px 0;
  font-size: 28px;
  font-weight: 700;
}

.score-board {
  display: flex;
  gap: 20px;
  font-size: 16px;
  font-weight: 500;
}

.score-board span {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.quiz-content {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.question-section h3 {
  color: #667eea;
  margin-bottom: 20px;
  font-size: 22px;
}

.description {
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #667eea;
  margin-bottom: 20px;
}

.main-keyword {
  font-size: 20px;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 20px;
  padding: 15px;
  background: #f0f3ff;
  border-radius: 10px;
}

.sub-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sub-item {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.sub-item.correct {
  border-color: #28a745;
  background: #d4edda;
}

.sub-item.wrong {
  border-color: #dc3545;
  background: #f8d7da;
}

.sub-description {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
}

.answer-input {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.answer-input input {
  flex: 1;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

.answer-input input:focus {
  outline: none;
  border-color: #667eea;
}

.answer-input input:disabled {
  background: #e9ecef;
  cursor: not-allowed;
}

.answer-input button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.answer-input button:hover:not(:disabled) {
  background: #5568d3;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.answer-input button:disabled {
  background: #adb5bd;
  cursor: not-allowed;
  transform: none;
}

.result {
  margin-top: 10px;
  font-weight: 600;
  font-size: 14px;
}

.correct-mark {
  color: #28a745;
}

.wrong-mark {
  color: #dc3545;
}

.result-section {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 2px solid #e9ecef;
}

.correct-result {
  color: #28a745;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}

.wrong-result {
  color: #dc3545;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}

.multiple-result {
  color: #667eea;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}

.next-button,
.start-button {
  padding: 14px 32px;
  font-size: 18px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.next-button:hover,
.start-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.no-question {
  text-align: center;
  padding: 60px 20px;
}

@media (max-width: 768px) {
  .quiz-container {
    padding: 10px;
  }

  .quiz-header {
    padding: 20px;
  }

  .quiz-header h2 {
    font-size: 22px;
  }

  .score-board {
    flex-direction: column;
    gap: 10px;
  }

  .quiz-content {
    padding: 20px;
  }
}
</style>
