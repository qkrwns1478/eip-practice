<template>
  <section class="exam-study">
    <template v-if="mode === 'tutor'">
      <h3>기출 기반 AI 튜터</h3>
      <p>개념을 질문하면 관련 기출문제와 출제 회차를 근거로 설명합니다.</p>
      <form @submit.prevent="ask">
        <label for="tutor-query">궁금한 개념이나 비교 질문</label>
        <textarea id="tutor-query" v-model="query" maxlength="1200" rows="3" placeholder="OSPF와 RIP는 어떻게 다르고 시험에는 어떻게 출제됐어?"></textarea>
        <div class="suggestions">
          <button v-for="example in examples" :key="example" type="button" @click="query = example">{{ example }}</button>
        </div>
        <button type="submit" :disabled="loading || !query.trim()">{{ loading ? '답변 생성 중…' : '튜터에게 질문' }}</button>
      </form>
      <p v-if="error" role="alert">{{ error }}</p>
      <div v-if="answer" class="tutor-result" aria-live="polite">
        <h4>{{ askedQuery }}</h4>
        <div class="tutor-answer" v-html="renderedAnswer"></div>
        <details v-if="sources.length" class="source-list">
          <summary>답변에 제공한 기출 근거 {{ sources.length }}개</summary>
          <p v-for="source in sources" :key="source.id"><strong>{{ source.sourceLabel }}</strong> — {{ source.question }}</p>
        </details>
      </div>
    </template>
    <template v-else>
      <div class="study-heading"><h3>개념별 출제 경향</h3><button type="button" :disabled="loading" @click="loadTrends">새로고침</button></div>
      <p>분류된 원본 문항을 집계합니다. 검색 결과의 수나 벡터 유사도로 출제 횟수를 추정하지 않습니다.</p>
      <p v-if="loading" role="status">출제 경향을 불러오고 있습니다.</p>
      <p v-if="error" role="alert">{{ error }}</p>
      <template v-if="trends">
        <label for="trend-year">시험 연도</label>
        <select id="trend-year" v-model="selectedYear"><option value="all">전체 연도</option><option v-for="item in trends.byYear" :key="item.year" :value="String(item.year)">{{ item.year }}년</option></select>
        <p>전체 {{ coverage.totalQuestions }}문제 · 분류 완료 {{ coverage.classifiedQuestions }}문제 · 미분류 {{ coverage.unclassifiedQuestions }}문제</p>
        <p class="study-note">한 문제는 여러 개념에 포함될 수 있어 개념별 수의 합계는 전체 문제 수와 다릅니다. 미분류 문항은 개념별 집계에서 제외됩니다.</p>
        <div class="trend-table">
          <table>
            <thead><tr><th scope="col">개념</th><th scope="col">문항 수</th><th scope="col">출제 회차 수</th><th scope="col">원본 근거</th></tr></thead>
            <tbody><tr v-for="row in trendRows" :key="row.id">
              <th scope="row">{{ row.label }}</th><td>{{ row.questionCount }}</td><td>{{ row.examCount }}</td>
              <td><details v-if="row.sources.length"><summary>문항 보기</summary><div class="trend-sources"><p v-for="source in row.sources" :key="source.id"><strong>{{ source.sourceLabel }}</strong><br>{{ source.question }}</p></div></details><span v-else>—</span></td>
            </tr></tbody>
          </table>
        </div>
      </template>
    </template>
  </section>
</template>

<script>
import { markRaw } from 'vue';
import { renderMarkdown } from '../utils/markdown.js';

export default {
  name: 'ExamStudy',
  props: { mode: { type: String, required: true } },
  data() {
    return { query: '', askedQuery: '', answer: '', sources: [], loading: false, error: '', controller: null,
      trends: null, selectedYear: 'all', examples: ['OSPF와 RIP는 어떻게 다르고 시험에는 어떻게 출제됐어?', '자연 조인과 외부 조인은 어떻게 달라?', '조건 커버리지와 분기 커버리지 차이를 알려줘.'] };
  },
  computed: {
    renderedAnswer() { return renderMarkdown(this.answer); },
    coverage() { return this.selectedYear === 'all' ? this.trends.coverage : this.trends.byYear.find(row => row.year === Number(this.selectedYear)); },
    trendRows() {
      if (!this.trends) return [];
      return this.trends.concepts.map(row => {
        const sources = row.sources.filter(source => this.selectedYear === 'all' || source.year === Number(this.selectedYear));
        return { ...row, sources, questionCount: sources.length, examCount: new Set(sources.map(source => source.examKey)).size };
      }).sort((a, b) => b.questionCount - a.questionCount || a.id.localeCompare(b.id));
    },
  },
  mounted() { if (this.mode === 'trends') this.loadTrends(); },
  beforeUnmount() { this.controller?.abort(); },
  methods: {
    async request(url, options) {
      this.controller?.abort();
      const controller = markRaw(new AbortController());
      this.controller = controller; this.loading = true; this.error = '';
      try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.error || '요청을 처리하지 못했습니다. 다시 시도해주세요.');
        if (this.controller !== controller || controller.signal.aborted) return null;
        return result;
      } catch (error) {
        if (!controller.signal.aborted && this.controller === controller) this.error = error.message || '서비스에 연결하지 못했습니다.';
        return null;
      } finally { if (this.controller === controller) { this.loading = false; this.controller = null; } }
    },
    async ask() {
      if (this.loading || !this.query.trim()) return;
      const query = this.query.trim();
      this.answer = ''; this.sources = [];
      const result = await this.request('/api/tutor', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query }) });
      if (result && typeof result.answer === 'string' && Array.isArray(result.sources)) {
        this.askedQuery = query; this.answer = result.answer; this.sources = result.sources;
      }
    },
    async loadTrends() {
      const result = await this.request('/api/trends');
      if (result && result.coverage && Array.isArray(result.byYear) && Array.isArray(result.concepts)) {
        this.trends = result;
        if (this.selectedYear !== 'all' && !result.byYear.some(row => row.year === Number(this.selectedYear))) this.selectedYear = 'all';
      }
    },
  },
};
</script>

<style scoped>
.exam-study { flex: 1; min-height: 0; padding: 30px; overflow-y: auto; text-align: left; color: var(--color-text); box-sizing: border-box; }
h3 { margin-top: 0; }
p { line-height: 1.7; }
textarea { display: block; box-sizing: border-box; width: 100%; margin: 10px 0; padding: 12px; resize: vertical; }
textarea, select, button { color: var(--color-text); background: var(--color-background); border: 1px solid var(--color-border); border-radius: 5px; }
button, select { padding: 9px 12px; }
button { cursor: pointer; }
button:disabled { opacity: 0.5; cursor: default; }
.suggestions { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
.suggestions button { font-size: 12px; text-align: left; }
.study-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.study-heading h3 { margin: 0; }
.study-note { font-size: 13px; }
.tutor-result { margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--color-border); }
.tutor-answer { line-height: 1.8; overflow-wrap: anywhere; }
.tutor-answer :deep(pre) { overflow-x: auto; padding: 12px; background: var(--color-background); }
.tutor-answer :deep(table) { display: block; overflow-x: auto; }
.tutor-answer :deep(th), .tutor-answer :deep(td) { border: 1px solid var(--color-border); padding: 8px; }
summary { cursor: pointer; }
.source-list { margin-top: 20px; }
.trend-table { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 12px; border: 1px solid var(--color-border); text-align: left; vertical-align: top; }
.trend-sources { min-width: 200px; max-height: 240px; overflow-y: auto; }
.trend-sources p { margin-top: 8px; }
@media (max-width: 600px) { .exam-study { padding: 20px; } th, td { padding: 8px; } }
</style>
