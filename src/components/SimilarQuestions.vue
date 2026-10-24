<template>
  <section v-if="questions.length" class="similar-questions" aria-labelledby="similar-questions-title">
    <h4 id="similar-questions-title">{{ title }}</h4>
    <p class="practice-note">{{ practiceNote }}</p>
    <details v-for="item in questions" :key="item.id" class="similar-question">
      <summary>
        <span class="exam-label">{{ item.year }}년 {{ item.round }}회 {{ item.number }}번</span>
        <span class="topic-label">관련 학습 주제: {{ item.topic }}</span>
        <span v-if="reasonLabels[item.id]" class="topic-label">{{ reasonLabels[item.id] }}</span>
        <span class="practice-label">펼쳐서 풀어 보기</span>
      </summary>
      <div class="practice-question">
        <p>{{ item.question.question }}</p>
        <pre v-if="item.question.passageOrCode"><code>{{ item.question.passageOrCode }}</code></pre>
        <img v-if="item.question.imageUrl" :src="item.question.imageUrl" alt="추천 기출문제 이미지" loading="lazy" />
        <ul v-if="item.question.options?.length">
          <li v-for="(option, index) in item.question.options" :key="index">{{ option }}</li>
        </ul>
        <label :for="`related-answer-${item.id}`">연습 답안</label>
        <textarea
          :id="`related-answer-${item.id}`"
          v-model="answers[item.id]"
          :disabled="!!results[item.id]"
          placeholder="답안을 입력한 뒤 확인하세요."
          rows="3"
        ></textarea>
        <button
          class="study-primary-button"
          type="button"
          :disabled="!answers[item.id]?.trim() || !!results[item.id]"
          @click="check(item)"
        >
          답안 확인
        </button>
        <p v-if="results[item.id]" class="practice-result" :class="results[item.id]" role="status">
          {{ results[item.id] === "correct" ? "✓ 정답입니다." : "✗ 오답입니다." }} 정답: {{ item.question.answer }}
        </p>
      </div>
    </details>
  </section>
</template>

<script>
import { pstExams } from "../assets/pstData.js";
import { sanitizeRelatedQuestions } from "../utils/quizExplanation.js";

export default {
  name: "SimilarQuestions",
  props: {
    title: { type: String, default: "유사 기출문제" },
    practiceNote: { type: String, default: "여기서 연습한 답안은 학습 기록에 반영되지 않습니다." },
    reasonLabels: { type: Object, default: () => ({}) },
    references: { type: Array, default: () => [] },
    currentQuestionId: { type: Number, default: null },
    normalizeAnswer: { type: Function, required: true },
  },
  data() {
    return { answers: {}, results: {} };
  },
  emits: ["answered"],
  computed: {
    questions() {
      return sanitizeRelatedQuestions(this.references).flatMap((reference) => {
        const exam = pstExams.find((exam) => exam.key === reference.examKey);
        const question = exam?.questions.find((question) => question.id === reference.questionId);
        if (!question || question.id === this.currentQuestionId) return [];
        const summary = [question.question, question.passageOrCode].filter(Boolean).join(" ").replace(/\s+/g, " ");
        return [
          {
            ...reference,
            year: exam.year,
            round: exam.round,
            number: exam.questions.indexOf(question) + 1,
            question,
            summary: summary.length > 150 ? `${summary.slice(0, 150)}…` : summary,
          },
        ];
      });
    },
  },
  methods: {
    check(item) {
      if (!this.answers[item.id]?.trim() || this.results[item.id]) return;
      const candidates = [item.question.answer, item.question.alt, ...(item.question.alts || [])].filter(
        (value) => typeof value === "string",
      );
      const preserveLines = candidates.some((value) => value.includes("\n"));
      const input = this.normalizeAnswer(this.answers[item.id], preserveLines);
      this.results[item.id] = candidates.some((value) => this.normalizeAnswer(value, preserveLines) === input)
        ? "correct"
        : "wrong";
      this.$emit("answered", {
        questionId: item.question.id,
        userAnswer: this.answers[item.id],
        isCorrect: this.results[item.id] === "correct",
      });
    },
  },
};
</script>

<style scoped>
.similar-questions {
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
}

h4 {
  margin: 0 0 8px;
  font-size: 18px;
}

.practice-note,
.topic-label {
  font-size: 13px;
  color: var(--color-text-light);
}

.similar-question {
  margin-top: 12px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: var(--color-white);
  transition: border-color 0.2s ease;
}

.similar-question:hover,
.similar-question[open] {
  border-color: var(--color-primary);
}

summary {
  padding: 20px;
  cursor: pointer;
  list-style: none;
}

summary::marker {
  content: "";
}

summary::-webkit-details-marker {
  display: none;
}

summary:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: 10px;
}

summary span {
  display: block;
  margin-top: 6px;
  overflow-wrap: anywhere;
}

.exam-label {
  font-weight: 600;
  font-size: 16px;
}

.practice-label {
  color: var(--color-primary-text);
  font-size: 13px;
}

.practice-question {
  padding: 0 20px 20px;
  line-height: 1.7;
  overflow-wrap: anywhere;
}

pre {
  overflow-x: auto;
  white-space: pre-wrap;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-background);
}

img {
  max-width: 100%;
  height: auto;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: 12px;
  padding: 0;
  list-style: none;
}

li {
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  white-space: pre-line;
}

label {
  font-weight: 600;
}

textarea {
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 12px 16px;
  margin: 8px 0;
  resize: vertical;
  color: var(--color-text);
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font: inherit;
  line-height: 1.6;
}

textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.2);
}

textarea:disabled {
  background: var(--color-disabled-bg);
  color: var(--color-text-light);
}

button {
  padding: 10px 16px;
  color: var(--color-white-for-text);
  background: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 6px;
  cursor: pointer;
}

button:hover:not(:disabled) {
  background: var(--color-primary-dark);
}

button:disabled {
  opacity: 0.5;
  cursor: default;
  transform: none;
}

.practice-result {
  margin-bottom: 0;
  padding: 12px 16px;
  border-radius: 8px;
}

.practice-result.correct {
  background: var(--color-success-light);
}

.practice-result.wrong {
  background: var(--color-danger-light);
}

@media (max-width: 600px) {
  summary {
    padding: 16px;
  }
  .practice-question {
    padding: 0 16px 16px;
  }
}
</style>
