<template>
  <section v-if="questions.length" class="similar-questions" aria-labelledby="similar-questions-title">
    <h4 id="similar-questions-title">유사 기출문제</h4>
    <p class="practice-note">여기서 연습한 답안은 학습 기록에 반영되지 않습니다.</p>
    <details v-for="item in questions" :key="item.id" class="similar-question">
      <summary>
        <span class="exam-label">{{ item.year }}년 {{ item.round }}회 · {{ item.number }}번</span>
        <span class="question-summary">{{ item.summary }}</span>
        <span class="topic-label">관련 학습 주제: {{ item.topic }}</span>
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
        <textarea :id="`related-answer-${item.id}`" v-model="answers[item.id]" :disabled="!!results[item.id]"
          placeholder="답안을 입력한 뒤 확인하세요." rows="3"></textarea>
        <button type="button" :disabled="!answers[item.id]?.trim() || !!results[item.id]" @click="check(item)">답안 확인</button>
        <p v-if="results[item.id]" role="status">
          {{ results[item.id] === 'correct' ? '✓ 정답입니다.' : '✗ 오답입니다.' }} 정답: {{ item.question.answer }}
        </p>
      </div>
    </details>
  </section>
</template>

<script>
import { pstExams } from '../assets/pstData.js';
import { sanitizeRelatedQuestions } from '../utils/quizExplanation.js';

export default {
  name: 'SimilarQuestions',
  props: {
    references: { type: Array, default: () => [] },
    currentQuestionId: { type: Number, default: null },
    normalizeAnswer: { type: Function, required: true },
  },
  data() { return { answers: {}, results: {} }; },
  computed: {
    questions() {
      return sanitizeRelatedQuestions(this.references).flatMap(reference => {
        const exam = pstExams.find(exam => exam.key === reference.examKey);
        const question = exam?.questions.find(question => question.id === reference.questionId);
        if (!question || question.id === this.currentQuestionId) return [];
        const summary = [question.question, question.passageOrCode].filter(Boolean).join(' ').replace(/\s+/g, ' ');
        return [{ ...reference, year: exam.year, round: exam.round,
          number: exam.questions.indexOf(question) + 1, question,
          summary: summary.length > 150 ? `${summary.slice(0, 150)}…` : summary }];
      });
    },
  },
  methods: {
    check(item) {
      if (!this.answers[item.id]?.trim() || this.results[item.id]) return;
      const candidates = [item.question.answer, item.question.alt, ...(item.question.alts || [])].filter(value => typeof value === 'string');
      const preserveLines = candidates.some(value => value.includes('\n'));
      const input = this.normalizeAnswer(this.answers[item.id], preserveLines);
      this.results[item.id] = candidates.some(value => this.normalizeAnswer(value, preserveLines) === input) ? 'correct' : 'wrong';
    },
  },
};
</script>

<style scoped>
.similar-questions { margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--color-border); }
h4 { margin: 0 0 8px; }
.practice-note, .topic-label { font-size: 13px; color: var(--color-text-secondary, var(--color-text)); }
.similar-question { margin-top: 12px; border: 1px solid var(--color-border); border-radius: 6px; background: var(--color-background); }
summary { padding: 14px; cursor: pointer; }
summary span { display: block; margin-top: 6px; overflow-wrap: anywhere; }
.exam-label { font-weight: 600; }
.question-summary { line-height: 1.6; }
.practice-label { color: var(--color-primary); font-size: 13px; }
.practice-question { padding: 0 14px 14px; line-height: 1.7; overflow-wrap: anywhere; }
pre { overflow-x: auto; white-space: pre; padding: 12px; border: 1px solid var(--color-border); border-radius: 4px; }
img { max-width: 100%; height: auto; }
ul { padding-left: 20px; }
textarea { display: block; box-sizing: border-box; width: 100%; padding: 10px; margin: 8px 0; resize: vertical; color: var(--color-text); background: var(--color-background); border: 1px solid var(--color-border); border-radius: 4px; }
button { padding: 8px 14px; color: var(--color-text); background: var(--color-background); border: 1px solid var(--color-border); border-radius: 4px; cursor: pointer; }
button:disabled { opacity: 0.5; cursor: default; }
</style>
