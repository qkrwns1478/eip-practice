<template>
  <div :class="type === 'bookmarks' ? 'bookmarks-content' : 'wrong-content'">
    <h3>{{ type === 'bookmarks' ? '북마크한 문제' : '틀린 문제' }}</h3>
    <div v-if="ids.length === 0" class="empty-state">
      <p>{{ type === 'bookmarks' ? '북마크한 문제가 없습니다.' : '틀린 문제가 없습니다.' }}</p>
    </div>
    <div v-else :class="type === 'bookmarks' ? 'bookmark-list' : 'wrong-list'">
      <div v-for="id in ids" :key="id" :class="type === 'bookmarks' ? 'bookmark-item' : 'wrong-item'" @click="$emit('select', id)">
        <div :class="type === 'bookmarks' ? 'bookmark-info' : 'wrong-info'">
          <h4>{{ getQuestion(id)?.[titleKey] || '문제' }}</h4>
          <p>{{ subtitleForId ? subtitleForId(id) : getQuestion(id)?.[subtitleKey] || '' }}</p>
        </div>
        <button v-if="savedExplanations[id]?.text" type="button" class="saved-explanation-btn"
          :aria-label="`저장된 해설 보기: ${getQuestion(id)?.[titleKey] || '문제'}`"
          @click.stop="selectedExplanation = savedExplanations[id].text">해설</button>
        <button type="button" class="remove-bookmark-btn" :aria-label="`${type === 'bookmarks' ? '북마크' : '틀린 문제'} 삭제: ${getQuestion(id)?.[titleKey] || '문제'}`" @click.stop="$emit('remove', id)">✕</button>
      </div>
    </div>
    <ExplanationModal v-if="selectedExplanation" :text="selectedExplanation" @close="selectedExplanation = ''" />
  </div>
</template>

<script>
import ExplanationModal from './ExplanationModal.vue';

export default {
  name: 'SavedQuestionList',
  components: { ExplanationModal },
  data() {
    return { selectedExplanation: '' };
  },
  props: {
    type: { type: String, required: true },
    ids: { type: Array, required: true },
    getQuestion: { type: Function, required: true },
    titleKey: { type: String, required: true },
    subtitleKey: { type: String, default: '' },
    subtitleForId: { type: Function, default: null },
    savedExplanations: { type: Object, default: () => ({}) }
  },
  emits: ['select', 'remove']
};
</script>

<style scoped>
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
  .bookmark-item, .wrong-item { flex-wrap: wrap; gap: 10px; }
  .bookmark-info, .wrong-info { flex-basis: 100%; }
}
</style>
