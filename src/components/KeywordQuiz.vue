<template>
  <GeoQuiz ref="quiz" :key="selectedMode"
    :questions="selectedMode === 'keyword' ? keywordData : geoData"
    :storage-prefix="selectedMode === 'keyword' ? 'keywordQuiz' : 'geoQuiz'"
    :initial-view="activeView" :question-study="selectedMode === 'keyword'">
    <template #mode-selector>
      <button type="button" class="keyword-mode-button" aria-label="&#xD0A4;&#xC6CC;&#xB4DC; / &#xC871;&#xBCF4;&#xD034;&#xC988; &#xBAA8;&#xB4DC; &#xC804;&#xD658;"
        @click="selectMode(selectedMode === 'keyword' ? 'geo' : 'keyword')">
        <span v-if="selectedMode === 'keyword'">&#xD0A4;&#xC6CC;&#xB4DC;</span>
        <span v-else>&#xC871;&#xBCF4;&#xD034;&#xC988;</span>
      </button>
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
.keyword-mode-button {
  flex-shrink: 0;
  align-self: center;
  max-width: 130px;
  box-sizing: border-box;
  height: 28px;
  padding: 0 8px;
  border: 1px solid transparent;
  border-radius: 3px;
  background: #1f1f1f;
  color: #9d9d9d;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}

.keyword-mode-select:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>
