<template>
  <div v-if="showConfirm" class="modal-overlay" @click="$emit('close-confirm')">
    <div class="modal-content" @click.stop>
      <h3>{{ confirm.title }}</h3>
      <p>{{ confirm.message }}</p>
      <div class="modal-actions">
        <button class="confirm-btn" @click="confirm.onConfirm">확인</button>
        <button class="cancel-btn" @click="$emit('close-confirm')">취소</button>
      </div>
    </div>
  </div>
  <div v-if="showAlert" class="modal-overlay" @click="$emit('close-alert')">
    <div class="modal-content alert-modal" @click.stop>
      <h3>{{ alert.title }}</h3>
      <p>{{ alert.message }}</p>
      <div class="modal-actions">
        <button class="confirm-btn" @click="$emit('close-alert')">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizModals',
  props: {
    showConfirm: { type: Boolean, required: true },
    confirm: { type: Object, required: true },
    showAlert: { type: Boolean, required: true },
    alert: { type: Object, required: true }
  },
  emits: ['close-confirm', 'close-alert']
};
</script>
