<template>
  <GeoQuiz ref="quiz" :key="selectedMode"
    :questions="selectedMode === 'keyword' ? keywordData : geoData"
    :storage-prefix="selectedMode === 'keyword' ? 'keywordQuiz' : 'geoQuiz'"
    :initial-view="activeView" :question-study="selectedMode === 'keyword'">
    <template #mode-selector>
      <select class="keyword-mode-select" aria-label="키워드 문제 모드" :value="selectedMode"
        @change="selectMode($event.target.value)">
        <option value="keyword">키워드</option>
        <option value="geo">족보퀴즈</option>
      </select>
    </template>
  </GeoQuiz>
</template>

<script>
import GeoQuiz from './GeoQuiz.vue';
import { geoData } from '../assets/geoData.js';
import { keywordData } from '../assets/keywordData.js';

export default {
  name: 'KeywordQuiz',
  components: { GeoQuiz },
  data() {
    const savedMode = localStorage.getItem('keyword_selectedMode');
    return {
      selectedMode: savedMode === 'geo' ? 'geo' : 'keyword',
      activeView: 'quiz',
      keywordData,
      geoData
    };
  },
  methods: {
    selectMode(mode) {
      this.activeView = this.$refs.quiz.showMode;
      this.selectedMode = mode;
      localStorage.setItem('keyword_selectedMode', mode);
    }
  }
};
</script>

<style scoped>
.keyword-mode-select {
  align-self: center;
  max-width: 130px;
  height: 44px;
  padding: 0 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-white);
  color: var(--color-text);
  font: inherit;
  font-size: 14px;
  cursor: pointer;
}

.keyword-mode-select:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>
