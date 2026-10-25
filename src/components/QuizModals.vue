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
    <div class="modal-content alert-modal" :class="{ 'exam-result-modal': alert.examResult }" @click.stop>
      <h3>{{ alert.title }}</h3>
      <p>{{ alert.message }}</p>
      <div v-if="alert.examResult" class="exam-result">
        <div class="exam-result-score-row">
          <div class="exam-result-score">
            <span class="exam-result-label">{{ alert.examResult.missing ? "기록된 점수" : "총점" }}</span>
            <div>
              <strong>{{ alert.examResult.score }}</strong
              ><span> / 100점</span>
            </div>
          </div>
          <strong
            class="exam-result-verdict"
            :class="{
              'is-pass': !alert.examResult.missing && alert.examResult.score >= 60,
              'is-fail': !alert.examResult.missing && alert.examResult.score < 60,
            }"
            >{{ alert.examResult.verdict }}</strong
          >
        </div>
        <dl class="exam-result-details">
          <div>
            <dt>맞힌 문제</dt>
            <dd>
              <strong>{{ alert.examResult.correct }}</strong> / {{ alert.examResult.total }}문제
            </dd>
          </div>
          <div>
            <dt>합격 기준</dt>
            <dd>60점 이상</dd>
          </div>
        </dl>
        <p v-if="alert.examResult.note" class="exam-result-note">{{ alert.examResult.note }}</p>
      </div>
      <div class="modal-actions">
        <button class="confirm-btn" @click="$emit('close-alert')">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizModals",
  props: {
    showConfirm: { type: Boolean, required: true },
    confirm: { type: Object, required: true },
    showAlert: { type: Boolean, required: true },
    alert: { type: Object, required: true },
  },
  emits: ["close-confirm", "close-alert"],
};
</script>

<style scoped>
.exam-result-modal h3 {
  color: var(--color-primary-text);
}

.exam-result-modal {
  box-sizing: border-box;
  width: calc(100% - 32px);
  max-height: calc(100dvh - 32px);
  overflow-y: auto;
  border-radius: 8px;
}

.exam-result {
  margin-bottom: 24px;
  text-align: left;
  color: var(--color-text);
}

.exam-result-score-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-border);
}

.exam-result-label {
  display: block;
  margin-bottom: 6px;
  font-size: 13px;
  color: var(--color-text-light);
}

.exam-result-score strong {
  font-size: 44px;
  line-height: 1.2;
  font-variant-numeric: tabular-nums;
}

.exam-result-score div > span {
  font-size: 14px;
  color: var(--color-text-light);
}

.exam-result-verdict {
  font-size: 22px;
  white-space: nowrap;
}

.exam-result-verdict.is-pass {
  color: var(--color-success);
}

.exam-result-verdict.is-fail {
  color: var(--color-danger);
}

.exam-result-details {
  margin: 18px 0 0;
  font-size: 14px;
}

.exam-result-details > div {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 12px;
}

.exam-result-details dt {
  color: var(--color-text-light);
}

.exam-result-details dd {
  margin: 0;
}

.exam-result .exam-result-note {
  margin: 18px 0 0;
  font-size: 13px;
}
</style>
