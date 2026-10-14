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
        <span v-if="type === 'wrong'" class="retry-badge">재도전</span>
        <button type="button" class="remove-bookmark-btn" :aria-label="`${type === 'bookmarks' ? '북마크' : '틀린 문제'} 삭제: ${getQuestion(id)?.[titleKey] || '문제'}`" @click.stop="$emit('remove', id)">✕</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SavedQuestionList',
  props: {
    type: { type: String, required: true },
    ids: { type: Array, required: true },
    getQuestion: { type: Function, required: true },
    titleKey: { type: String, required: true },
    subtitleKey: { type: String, default: '' },
    subtitleForId: { type: Function, default: null }
  },
  emits: ['select', 'remove']
};
</script>
