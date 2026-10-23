<template>
  <Teleport to="body">
    <div class="modal-overlay" @click.self="$emit('close')" @keydown.esc.stop="$emit('close')" @keydown.tab="trapFocus">
      <section ref="dialog" class="modal-content explanation-modal" role="dialog" aria-modal="true"
        aria-labelledby="explanation-title" tabindex="-1">
        <header class="explanation-header">
          <h3 id="explanation-title">{{ title }}</h3>
          <button type="button" :aria-label="`${title} 닫기`" @click="$emit('close')">×</button>
        </header>
        <div class="explanation-body" :aria-busy="loading" aria-live="polite">
          <div v-if="loading" class="explanation-spinner" role="status" :aria-label="`${title} 생성 중`">
            <span class="spinner" aria-hidden="true"></span>
          </div>
          <template v-else-if="error">
            <p role="alert">{{ error }}</p>
            <button type="button" class="confirm-btn" @click="$emit('retry')">다시 시도</button>
          </template>
          <template v-else>
            <div class="explanation-text" v-html="renderedText"></div>
            <slot />
          </template>
        </div>
      </section>
    </div>
  </Teleport>
</template>

<script>
import { renderMarkdown } from '../utils/markdown.js';

export default {
  name: 'ExplanationModal',
  props: {
    title: { type: String, default: '문제 해설' },
    text: { type: String, default: '' },
    error: { type: String, default: '' },
    loading: { type: Boolean, default: false },
  },
  emits: ['close', 'retry'],
  computed: {
    renderedText() { return renderMarkdown(this.text); },
  },
  mounted() {
    this.previousFocus = document.activeElement;
    this.$refs.dialog.focus();
  },
  beforeUnmount() {
    if (this.previousFocus?.isConnected) this.previousFocus.focus();
  },
  methods: {
    trapFocus(event) {
      const buttons = [...this.$refs.dialog.querySelectorAll('button:not(:disabled), a[href], summary, textarea:not(:disabled), input:not(:disabled), select:not(:disabled)')]
        .filter(element => element.getClientRects().length > 0);
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

.explanation-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.explanation-header h3 {
  margin: 0;
}

.explanation-header button {
  background: transparent;
  border: 0;
  color: var(--color-text);
  font-size: 28px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.explanation-header button:hover,
.explanation-header button:focus-visible {
  color: var(--color-primary);
  transform: none;
}

.explanation-body {
  overflow-y: auto;
  margin: 24px 0;
  min-height: 100px;
}

.explanation-spinner {
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 32px;
  height: 32px;
  border: 4px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: explanation-spin 0.8s linear infinite;
}

@keyframes explanation-spin {
  to {
    transform: rotate(360deg);
  }
}

.explanation-text {
  overflow-wrap: anywhere;
  line-height: 1.8;
  font-size: 15px;
}

.explanation-text :deep(> :first-child) {
  margin-top: 0;
}

.explanation-text :deep(> :last-child) {
  margin-bottom: 0;
}

.explanation-text :deep(h1),
.explanation-text :deep(h2),
.explanation-text :deep(h3),
.explanation-text :deep(h4),
.explanation-text :deep(h5),
.explanation-text :deep(h6) {
  margin: 1.4em 0 0.6em;
  line-height: 1.4;
  font-size: 1.15em;
}

.explanation-text :deep(p) {
  margin: 0.8em 0;
}

.explanation-text :deep(ul),
.explanation-text :deep(ol) {
  padding-left: 1.6em;
}

.explanation-text :deep(code) {
  font-family: monospace;
  background: var(--color-background);
  padding: 0.15em 0.35em;
  border-radius: 4px;
}

.explanation-text :deep(pre) {
  overflow-x: auto;
  padding: 14px;
  background: var(--color-background);
  border-radius: 6px;
  white-space: pre;
}

.explanation-text :deep(pre code) {
  padding: 0;
  background: transparent;
}

.explanation-text :deep(table) {
  display: block;
  max-width: 100%;
  overflow-x: auto;
  border-collapse: collapse;
}

.explanation-text :deep(th),
.explanation-text :deep(td) {
  border: 1px solid var(--color-border);
  padding: 8px 12px;
}

.explanation-text :deep(blockquote) {
  margin: 1em 0;
  padding-left: 16px;
  border-left: 3px solid var(--color-border);
}

.explanation-text :deep(a) {
  color: var(--color-primary);
  text-decoration: underline;
}

.explanation-text :deep(img) {
  max-width: 100%;
  height: auto;
}
</style>
