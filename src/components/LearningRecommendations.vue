<template>
  <section class="learning-recommendations study-page">
    <div class="study-page-inner">
      <div class="study-page-heading">
        <h3>학습 추천</h3>
        <button type="button" :disabled="loading || !hasHistory" @click="load">추천 새로고침</button>
      </div>
      <p class="study-page-description">
        틀린 문제와 유사한 미풀이 문제를 먼저 추천하고, 북마크한 관심 주제도 함께 고려합니다.
      </p>
      <p v-if="feedback" class="study-message study-feedback" role="status">{{ feedback }}</p>
      <p v-if="!hasHistory" class="study-empty-state">기출문제를 풀거나 북마크하면 맞춤 추천을 받을 수 있습니다.</p>
      <p v-else-if="loading" class="study-message" role="status">학습 기록에 맞는 문제를 찾고 있습니다.</p>
      <template v-else-if="error">
        <p class="study-message study-error" role="alert">{{ error }}</p>
        <button type="button" @click="load">다시 시도</button>
      </template>
      <template v-else>
        <p v-if="limited" class="recommendation-note">
          최근 추가된 오답 최대 20개와 북마크 최대 10개를 기준으로 추천합니다.
        </p>
        <SimilarQuestions
          v-if="references.length"
          :key="generation"
          :references="references"
          :normalize-answer="normalizeAnswer"
          title="추천 미풀이 문제"
          practice-note="답안을 확인하면 풀이 결과가 학습 기록에 저장됩니다."
          :reason-labels="reasonLabels"
          @answered="recordAnswer"
        />
        <p v-else class="study-empty-state">
          현재 기록과 유사한 미풀이 문제를 찾지 못했습니다. 다른 문제를 풀거나 관심 문제를 북마크해 보세요.
        </p>
      </template>
    </div>
  </section>
</template>

<script>
import { markRaw } from "vue";
import SimilarQuestions from "./SimilarQuestions.vue";
import { sanitizeRelatedQuestions } from "../utils/quizExplanation.js";
import { recommendationInput } from "../utils/learningRecommendations.js";
import "../assets/style/StudyPages.css";

export default {
  name: "LearningRecommendations",
  components: { SimilarQuestions },
  props: {
    wrongQuestions: { type: Array, required: true },
    bookmarkedQuestions: { type: Array, required: true },
    solvedQuestions: { type: Array, required: true },
    savedAnswers: { type: Object, required: true },
    currentQuestionId: { type: Number, default: null },
    normalizeAnswer: { type: Function, required: true },
    labelForId: { type: Function, required: true },
    getQuestion: { type: Function, required: true },
  },
  emits: ["answered"],
  data() {
    return {
      references: [],
      reasonLabels: {},
      loading: false,
      error: "",
      feedback: "",
      limited: false,
      generation: 0,
      controller: null,
    };
  },
  computed: {
    profile() {
      return recommendationInput(this, this.currentQuestionId);
    },
    snapshot() {
      return JSON.stringify(this.profile);
    },
    hasHistory() {
      return this.profile.wrongQuestions.length > 0 || this.profile.bookmarkedQuestions.length > 0;
    },
  },
  watch: {
    snapshot() {
      this.load();
    },
  },
  mounted() {
    this.load();
  },
  beforeUnmount() {
    this.controller?.abort();
  },
  methods: {
    recordAnswer(result) {
      const question = this.getQuestion(result.questionId);
      if (!question || !this.references.some((row) => row.questionId === result.questionId)) return;
      this.feedback = `${this.labelForId(result.questionId)}: ${result.isCorrect ? "정답입니다." : `오답입니다. 정답: ${question.answer}`}`;
      this.$emit("answered", result);
    },
    async load() {
      this.controller?.abort();
      this.controller = null;
      this.references = [];
      this.reasonLabels = {};
      this.error = "";
      this.loading = false;
      if (!this.hasHistory) return;
      const snapshot = this.snapshot;
      const controller = markRaw(new AbortController());
      this.controller = controller;
      this.loading = true;
      try {
        const response = await fetch("/api/recommendations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: snapshot,
          signal: controller.signal,
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.error || "추천 문제를 불러오지 못했습니다.");
        if (this.controller !== controller || this.snapshot !== snapshot) return;
        const attempted = new Set([...this.profile.solvedQuestions, ...this.profile.excludeQuestionIds]);
        this.references = sanitizeRelatedQuestions(result.recommendations).filter(
          (row) => !attempted.has(row.questionId),
        );
        this.reasonLabels = Object.fromEntries(
          this.references.map((row) => {
            const reason = result.recommendations.find((item) => item.id === row.id)?.reason;
            const valid =
              reason &&
              (reason.type === "wrong" ? this.profile.wrongQuestions : this.profile.bookmarkedQuestions).includes(
                reason.questionId,
              );
            return [
              row.id,
              valid
                ? `${reason.type === "wrong" ? "틀린 문제" : "북마크한 문제"}: ${this.labelForId(reason.questionId)}와 유사합니다.`
                : "학습 기록과 유사한 미풀이 문제입니다.",
            ];
          }),
        );
        this.limited = result.limited === true;
        this.generation++;
      } catch (error) {
        if (!controller.signal.aborted && this.controller === controller)
          this.error = error.message || "추천 서비스에 연결하지 못했습니다.";
      } finally {
        if (this.controller === controller) {
          this.loading = false;
          this.controller = null;
        }
      }
    },
  },
};
</script>

<style scoped>
.recommendation-note {
  font-size: 13px;
  color: var(--color-text-light);
}

.learning-recommendations :deep(.similar-questions) {
  margin-top: 26px;
  padding-top: 0;
  border-top: none;
}
</style>
