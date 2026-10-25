<template>
  <section class="weakness-analysis" aria-label="AI 취약점 분석">
    <div class="analysis-actions">
      <strong>어떤 개념을 더 복습해야 할까요?</strong>
      <button type="button" class="confirm-btn" :disabled="!ids.length || loading" @click="openAnalysis">
        {{ loading ? "분석 중…" : text ? "분석 결과 보기" : "AI 취약점 분석" }}
      </button>
      <button v-if="text" type="button" class="cancel-btn" @click="generate">다시 분석</button>
    </div>
    <p v-if="ids.length > limit">전체 {{ ids.length }}개 중 목록에 마지막으로 추가된 {{ limit }}개를 분석합니다.</p>
    <ExplanationModal
      v-if="show"
      title="AI 취약점 분석"
      :text="text"
      :loading="loading"
      :error="error"
      @close="close"
      @retry="generate"
    >
      <div v-if="text" class="analysis-sources">
        <h4>분석한 문제 다시 풀기</h4>
        <button v-for="id in analyzedIds" :key="id" type="button" class="cancel-btn" @click="review(id)">
          {{ labelForId(id) }}
        </button>
      </div>
    </ExplanationModal>
  </section>
</template>

<script>
import { markRaw } from "vue";
import ExplanationModal from "./ExplanationModal.vue";
import { ANALYSIS_LIMIT, analysisInput } from "../utils/weaknessAnalysis.js";

export default {
  components: { ExplanationModal },
  props: {
    quizType: { type: String, required: true },
    ids: { type: Array, required: true },
    savedAnswers: { type: Object, required: true },
    labelForId: { type: Function, required: true },
  },
  emits: ["select"],
  data() {
    return {
      limit: ANALYSIS_LIMIT,
      show: false,
      text: "",
      error: "",
      loading: false,
      controller: null,
      analyzedIds: [],
    };
  },
  computed: {
    snapshot() {
      return JSON.stringify(analysisInput(this.quizType, this.ids, this.savedAnswers));
    },
  },
  watch: {
    snapshot: {
      flush: "sync",
      handler() {
        this.close();
        this.text = "";
        this.analyzedIds = [];
      },
    },
  },
  beforeUnmount() {
    this.controller?.abort();
  },
  deactivated() {
    this.close();
  },
  methods: {
    close() {
      this.controller?.abort();
      this.controller = null;
      this.loading = false;
      this.show = false;
    },
    review(id) {
      this.close();
      this.$emit("select", id);
    },
    openAnalysis() {
      if (this.text) this.show = true;
      else this.generate();
    },
    async generate() {
      if (!this.ids.length || this.loading) return;
      this.show = true;
      this.text = "";
      this.error = "";
      this.loading = true;
      const snapshot = this.snapshot;
      const controller = markRaw(new AbortController());
      this.controller = controller;
      try {
        const response = await fetch("/api/analysis", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: snapshot,
          signal: controller.signal,
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.error || "분석하지 못했습니다. 다시 시도해주세요.");
        if (typeof result.analysis !== "string" || !result.analysis.trim())
          throw new Error("분석 응답이 비어 있습니다. 다시 시도해주세요.");
        if (this.controller !== controller || this.snapshot !== snapshot) return;
        this.text = result.analysis;
        this.analyzedIds = JSON.parse(snapshot).questions.map((item) => item.questionId);
      } catch (error) {
        if (!controller.signal.aborted && this.controller === controller)
          this.error = error.message || "분석 서비스에 연결하지 못했습니다.";
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
.weakness-analysis {
  margin-bottom: 20px;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
}
.analysis-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.analysis-actions strong {
  flex: 1 1 220px;
}
.weakness-analysis p {
  margin: 10px 0 0;
  line-height: 1.6;
  color: var(--color-text);
}
.analysis-actions button:disabled {
  opacity: 0.6;
  cursor: wait;
}
.analysis-sources {
  margin-top: 24px;
  border-top: 1px solid var(--color-border);
}
.analysis-sources button {
  margin: 0 8px 8px 0;
  white-space: normal;
  text-align: left;
}
</style>
