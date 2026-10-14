<template>
  <Teleport to="body">
    <div class="modal-overlay" @click.self="$emit('close')" @keydown.esc.stop="$emit('close')" @keydown.tab="trapFocus">
      <section ref="dialog" class="modal-content explanation-modal" role="dialog" aria-modal="true" aria-labelledby="explanation-title" tabindex="-1">
        <header class="explanation-header">
          <h3 id="explanation-title">문제 해설</h3>
          <button type="button" aria-label="해설 닫기" @click="$emit('close')">×</button>
        </header>
        <div class="explanation-body" :aria-busy="loading" aria-live="polite">
          <p v-if="loading" role="status">해설을 생성하고 있습니다. 잠시만 기다려 주세요…</p>
          <template v-else-if="error">
            <p role="alert">{{ error }}</p>
            <button type="button" class="confirm-btn" @click="$emit('retry')">다시 시도</button>
          </template>
          <div v-else class="explanation-text">{{ text }}</div>
        </div>
        <footer class="modal-actions">
          <button type="button" class="confirm-btn" @click="$emit('close')">닫기</button>
        </footer>
      </section>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: 'ExplanationModal',
  props: {
    text: { type: String, default: '' },
    error: { type: String, default: '' },
    loading: { type: Boolean, default: false },
  },
  emits: ['close', 'retry'],
  mounted() {
    this.previousFocus = document.activeElement;
    this.$refs.dialog.focus();
  },
  beforeUnmount() {
    if (this.previousFocus?.isConnected) this.previousFocus.focus();
  },
  methods: {
    trapFocus(event) {
      const buttons = [...this.$refs.dialog.querySelectorAll('button:not(:disabled)')];
      const first = buttons[0];
      const last = buttons.at(-1);
      if (event.shiftKey && (document.activeElement === first || document.activeElement === this.$refs.dialog)) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first?.focus();
      }
    },
  },
};
</script>

<style scoped>
.explanation-modal {
  box-sizing: border-box;
  width: calc(100% - 32px);
  max-width: 760px;
  max-height: calc(100dvh - 32px);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  color: var(--color-text);
}
.explanation-header { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.explanation-header h3 { margin: 0; }
.explanation-header button { background: transparent; border: 0; color: var(--color-text); font-size: 28px; cursor: pointer; }
.explanation-body { overflow-y: auto; margin: 24px 0; min-height: 100px; }
.explanation-text { white-space: pre-wrap; overflow-wrap: anywhere; line-height: 1.8; font-size: 15px; }
.modal-actions { margin-top: 0; }
</style>
