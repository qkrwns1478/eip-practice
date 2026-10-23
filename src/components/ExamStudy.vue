<template>
  <section class="exam-study study-page">
    <div class="study-page-inner">
      <template v-if="mode === 'tutor'">
        <div class="study-page-heading">
          <h3>기출 기반 AI 튜터</h3>
        </div>
        <p class="study-page-description">개념을 질문하면 관련 기출문제와 출제 회차를 근거로 설명합니다.</p>
        <form @submit.prevent="ask">
          <label for="tutor-query">궁금한 개념이나 비교 질문</label>
          <textarea id="tutor-query" v-model="query" maxlength="1200" rows="3"
            placeholder="OSPF와 RIP는 어떻게 다르고 시험에는 어떻게 출제됐어?"></textarea>
          <div class="suggestions">
            <button v-for="example in examples" :key="example" type="button" @click="query = example">{{ example
              }}</button>
          </div>
          <button class="study-primary-button" type="submit" :disabled="loading || !query.trim()">{{ loading ? '답변 생성 중…' : '튜터에게 질문' }}</button>
        </form>
        <p v-if="error" class="study-message study-error" role="alert">{{ error }}</p>
        <div v-if="answer" class="tutor-result" aria-live="polite">
          <h4>{{ askedQuery }}</h4>
          <div class="tutor-answer" v-html="renderedAnswer"></div>
          <details v-if="sources.length" class="source-list">
            <summary>답변에 제공한 기출 근거 {{ sources.length }}개</summary>
            <p v-for="source in sources" :key="source.id"><strong>{{ source.sourceLabel }}</strong> — {{ source.question
              }}</p>
          </details>
        </div>
      </template>
      <template v-else>
        <div class="study-page-heading">
          <h3>개념별 출제 경향</h3><button type="button" :disabled="loading" @click="loadTrends">새로고침</button>
        </div>
        <p class="study-page-description">기출문제를 개념별로 모아 연도별 출제 횟수와 실제 출제 문항을 확인합니다.</p>
        <p v-if="loading" class="study-message" role="status">출제 경향을 불러오고 있습니다.</p>
        <p v-if="error" class="study-message study-error" role="alert">{{ error }}</p>
        <template v-if="trends">
          <div class="trend-filter"><label for="trend-year">시험 연도</label>
            <select id="trend-year" v-model="selectedYear">
              <option value="all">전체 연도</option>
              <option v-for="item in trends.byYear" :key="item.year" :value="String(item.year)">{{ item.year }}년
              </option>
            </select>
          </div>
          <div class="trend-coverage">
            <div><span>전체 문제</span><strong>{{ coverage.totalQuestions }}<small>문제</small></strong></div>
            <div><span>분류 완료</span><strong>{{ coverage.classifiedQuestions }}<small>문제</small></strong></div>
            <div><span>미분류</span><strong>{{ coverage.unclassifiedQuestions }}<small>문제</small></strong></div>
          </div>
          <p class="study-note">한 문제는 여러 개념에 포함될 수 있어 개념별 수의 합계는 전체 문제 수와 다릅니다. 미분류 문항은 개념별 집계에서 제외됩니다.</p>
          <div class="trend-table">
            <table>
              <thead>
                <tr>
                  <th scope="col">개념</th>
                  <th scope="col">문항 수</th>
                  <th scope="col">출제 회차 수</th>
                  <th scope="col">원본 근거</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in trendRows" :key="row.id">
                  <th scope="row">{{ row.label }}</th>
                  <td>{{ row.questionCount }}</td>
                  <td>{{ row.examCount }}</td>
                  <td>
                    <details v-if="row.sources.length">
                      <summary>문항 보기</summary>
                      <div class="trend-sources">
                        <p v-for="source in row.sources" :key="source.id"><strong>{{ source.sourceLabel
                            }}</strong><br>{{ source.question }}</p>
                      </div>
                    </details><span v-else>—</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </template>
    </div>
  </section>
</template>

<script>
import { markRaw } from 'vue';
import { renderMarkdown } from '../utils/markdown.js';
import '../assets/style/StudyPages.css';

export default {
  name: 'ExamStudy',
  props: { mode: { type: String, required: true } },
  data() {
    return {
      query: '', askedQuery: '', answer: '', sources: [], loading: false, error: '', controller: null,
      trends: null, selectedYear: 'all', examples: ['OSPF와 RIP는 어떻게 다르고 시험에는 어떻게 출제됐어?', '자연 조인과 외부 조인은 어떻게 달라?', '조건 커버리지와 분기 커버리지 차이를 알려줘.']
    };
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
form {
  margin-top: 26px;
}

.suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0 20px;
}

.suggestions button {
  font-size: 13px;
  text-align: left;
}

.study-note {
  margin: 16px 0;
  font-size: 13px;
  color: var(--color-text-light);
}

.tutor-result {
  margin-top: 28px;
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: var(--color-white);
}

.tutor-result h4 {
  margin: 0 0 16px;
  color: var(--color-primary-text);
  overflow-wrap: anywhere;
}

.tutor-answer {
  line-height: 1.8;
  overflow-wrap: anywhere;
}

.tutor-answer :deep(pre) {
  overflow-x: auto;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-background);
}

.tutor-answer :deep(table) {
  display: block;
  overflow-x: auto;
  border-collapse: collapse;
}

.tutor-answer :deep(th),
.tutor-answer :deep(td) {
  border: 1px solid var(--color-border);
  padding: 8px 12px;
}

.tutor-answer :deep(a) {
  color: var(--color-primary-text);
}

summary {
  list-style: none;
  cursor: pointer;
  color: var(--color-primary-text);
}

summary::marker {
  content: '';
}

summary::-webkit-details-marker {
  display: none;
}

.source-list {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
}

.source-list p,
.trend-sources p {
  font-size: 14px;
  overflow-wrap: anywhere;
}

.trend-filter {
  max-width: 240px;
  margin: 26px 0 20px;
}

.trend-coverage {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.trend-coverage>div {
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-white);
}

.trend-coverage span {
  display: block;
  font-size: 13px;
  color: var(--color-text-light);
}

.trend-coverage strong {
  display: block;
  margin-top: 6px;
  font-size: 24px;
  color: var(--color-primary-text);
}

.trend-coverage small {
  margin-left: 5px;
  font-size: 13px;
  font-weight: 400;
  color: var(--color-text-light);
}

.trend-table {
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-white);
}

.trend-table table {
  width: 100%;
  border-collapse: collapse;
}

.trend-table th,
.trend-table td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--color-border);
  text-align: left;
  vertical-align: top;
  font-size: 14px;
}

.trend-table thead {
  background: var(--color-background);
}

.trend-table thead th {
  white-space: nowrap;
}

.trend-table tbody tr:last-child>* {
  border-bottom: none;
}

.trend-table tbody tr:hover {
  background: var(--color-hover);
}

.trend-table td:nth-child(2),
.trend-table td:nth-child(3) {
  font-variant-numeric: tabular-nums;
}

.trend-sources {
  min-width: 200px;
  max-height: 240px;
  overflow-y: auto;
}

.trend-sources p {
  margin: 12px 0 0;
}

@media (max-width: 600px) {
  .trend-coverage {
    gap: 8px;
  }

  .trend-coverage>div {
    padding: 12px;
  }

  .trend-coverage strong {
    font-size: 20px;
  }

  .trend-coverage small {
    display: block;
    margin: 0;
  }

  .trend-table th,
  .trend-table td {
    padding: 12px;
  }

  .tutor-result {
    padding: 16px;
  }
}
</style>
