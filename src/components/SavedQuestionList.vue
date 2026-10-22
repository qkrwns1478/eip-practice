<template>
  <div :class="type === 'bookmarks' ? 'bookmarks-content' : 'wrong-content'">
    <div class="saved-list-header">
      <h3>{{ type === 'bookmarks' ? '북마크한 문제' : '틀린 문제' }}</h3>
      <button v-if="ids.length" type="button" class="notes-export-btn" :disabled="exporting" @click="requestExport">
        {{ type === 'bookmarks' ? '핵심정리' : '오답노트' }} MD 저장
      </button>
    </div>
    <WeaknessAnalysis v-if="type === 'wrong' && ids.length && quizType" :quiz-type="quizType" :ids="ids"
      :saved-answers="savedAnswers" :label-for-id="analysisLabel" @select="$emit('select', $event)" />
    <p v-if="exporting" role="status" aria-live="polite">{{ exportStatus }}</p>
    <div v-if="ids.length === 0" class="empty-state">
      <p>{{ type === 'bookmarks' ? '북마크한 문제가 없습니다.' : '틀린 문제가 없습니다.' }}</p>
    </div>
    <div v-else :class="type === 'bookmarks' ? 'bookmark-list' : 'wrong-list'">
      <div v-for="id in ids" :key="id" :class="type === 'bookmarks' ? 'bookmark-item' : 'wrong-item'"
        @click="$emit('select', id)">
        <div :class="type === 'bookmarks' ? 'bookmark-info' : 'wrong-info'">
          <h4>{{ getQuestion(id)?.[titleKey] || '문제' }}</h4>
          <p>{{ subtitleForId ? subtitleForId(id) : getQuestion(id)?.[subtitleKey] || '' }}</p>
          <p class="saved-answer">내 답안: {{ answerLabel(savedAnswers[id]) }}</p>
        </div>
        <button v-if="savedExplanations[id]?.text" type="button" class="saved-explanation-btn"
          :aria-label="`저장된 해설 보기: ${getQuestion(id)?.[titleKey] || '문제'}`"
          @click.stop="selectedExplanation = savedExplanations[id].text">해설</button>
        <button type="button" class="remove-bookmark-btn"
          :aria-label="`${type === 'bookmarks' ? '북마크' : '틀린 문제'} 삭제: ${getQuestion(id)?.[titleKey] || '문제'}`"
          @click.stop="$emit('remove', id)">✕</button>
      </div>
    </div>
    <ExplanationModal v-if="selectedExplanation" :text="selectedExplanation" @close="selectedExplanation = ''" />
    <div v-if="showGeneratePrompt" class="modal-overlay" @click.self="showGeneratePrompt = false" @keydown.esc="showGeneratePrompt = false">
      <section class="modal-content" role="dialog" aria-modal="true" aria-labelledby="notes-prompt-title">
        <h3 id="notes-prompt-title">해설 생성</h3>
        <p>해설이 없는 문제가 {{ missingCount }}개 있습니다. AI 해설을 생성한 뒤 저장할까요?</p>
        <div class="modal-actions">
          <button type="button" class="confirm-btn" @click="confirmExport(true)">예</button>
          <button type="button" class="cancel-btn" @click="confirmExport(false)">아니요 (해설 없이 저장)</button>
          <button type="button" class="cancel-btn" @click="showGeneratePrompt = false">취소</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ExplanationModal from './ExplanationModal.vue';
import WeaknessAnalysis from './WeaknessAnalysis.vue';
import { answerLabel } from '../utils/quizNotes.js';

export default {
  name: 'SavedQuestionList',
  components: { ExplanationModal, WeaknessAnalysis },
  data() {
    return { selectedExplanation: '', showGeneratePrompt: false };
  },
  props: {
    quizType: { type: String, default: '' },
    type: { type: String, required: true },
    ids: { type: Array, required: true },
    getQuestion: { type: Function, required: true },
    titleKey: { type: String, required: true },
    subtitleKey: { type: String, default: '' },
    subtitleForId: { type: Function, default: null },
    savedExplanations: { type: Object, default: () => ({}) },
    savedAnswers: { type: Object, default: () => ({}) },
    exporting: { type: Boolean, default: false },
    exportStatus: { type: String, default: '' }
  },
  computed: {
    missingCount() { return this.ids.filter(id => this.getQuestion(id) && !this.savedExplanations[id]?.text).length; },
  },
  methods: {
    analysisLabel(id) {
      if (this.subtitleForId) return this.subtitleForId(id);
      const question = this.getQuestion(id);
      return question?.[this.titleKey] || question?.desc || '문제';
    },
    answerLabel,
    requestExport() {
      if (this.exporting) return;
      if (this.missingCount) this.showGeneratePrompt = true;
      else this.$emit('export', false);
    },
    confirmExport(generate) {
      this.showGeneratePrompt = false;
      this.$emit('export', generate);
    },
  },
  emits: ['select', 'remove', 'export']
};
</script>

<style scoped>
.saved-list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
}
.saved-list-header h3 { margin: 0; height: auto; }
.notes-export-btn {
  flex-shrink: 0;
  padding: 10px 16px;
  border: 0;
  border-radius: 6px;
  background: var(--color-primary);
  color: var(--color-white-for-text);
  cursor: pointer;
}
.notes-export-btn:disabled { opacity: 0.6; cursor: wait; }
.saved-answer { white-space: pre-wrap; overflow-wrap: anywhere; }
.modal-actions { flex-wrap: wrap; }

.saved-explanation-btn {
  flex-shrink: 0;
  margin-right: 10px;
  padding: 8px 12px;
  border: 1px solid var(--color-primary);
  border-radius: 6px;
  background: var(--color-primary);
  color: var(--color-white-for-text);
  cursor: pointer;
}

@media (max-width: 600px) {

  .bookmark-item,
  .wrong-item {
    flex-wrap: wrap;
    gap: 10px;
  }

  .bookmark-info,
  .wrong-info {
    flex-basis: 100%;
  }
}
</style>
