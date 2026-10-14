<template>
  <section class="code-visualizer" aria-label="코드 실행 흐름">
    <div class="code-source-heading">
      <strong>{{ language }}</strong>
      <button v-if="!revealed" type="button" @click="revealed = true">실행 해설 보기</button>
      <span v-else>기출 코드 해설 시뮬레이션</span>
    </div>
    <div :class="['code-workspace', { 'is-revealed': revealed && trace }]">
      <pre class="trace-source" ref="source"><code><span
        v-for="(line, index) in lines" :key="index"
        :class="['trace-line', { 'is-current': revealed && frame?.line === index + 1 }]"
        :aria-current="revealed && frame?.line === index + 1 ? 'step' : undefined"
      ><span class="line-number" aria-hidden="true">{{ index + 1 }}</span><span>{{ line || ' ' }}</span></span></code></pre>
      <div v-if="revealed && trace" class="trace-state">
        <p class="trace-explanation" aria-live="polite">{{ frame.explanation }}</p>
        <h4>변수와 메모리</h4>
        <p v-if="!Object.keys(frame.variables).length" class="trace-muted">아직 실행된 구문이 없습니다.</p>
        <dl class="trace-variables">
          <div v-for="(value, name) in frame.variables" :key="name" :class="{ 'has-changed': changedNames.includes(name) }">
            <dt>{{ name }}</dt>
            <dd v-if="Array.isArray(value)" class="trace-array">
              <div v-for="(row, rowIndex) in (Array.isArray(value[0]) ? value : [value])" :key="rowIndex" class="trace-array-row">
                <span v-for="(cell, index) in row" :key="index" class="trace-cell"><small>{{ Array.isArray(value[0]) ? `${rowIndex},${index}` : index }}</small>{{ cell }}</span>
                <span v-if="row.length === 0" class="trace-muted">빈 배열</span>
              </div>
            </dd>
            <dd v-else>{{ value }}</dd>
          </div>
        </dl>
        <template v-if="frame.stack.length">
          <h4>호출 흐름</h4>
          <ol class="trace-stack"><li v-for="(call, index) in frame.stack" :key="index">{{ call }}</li></ol>
        </template>
        <h4>출력</h4>
        <pre class="trace-output">{{ frame.output || '아직 출력이 없습니다.' }}</pre>
      </div>
    </div>
    <template v-if="revealed && trace">
      <div class="trace-controls">
        <button type="button" @click="goTo(0)" :disabled="stepIndex === 0">처음</button>
        <button type="button" @click="goTo(stepIndex - 1)" :disabled="stepIndex === 0">이전</button>
        <button type="button" @click="togglePlayback" :disabled="stepIndex === trace.steps.length - 1">{{ playing ? '일시 정지' : '자동 재생' }}</button>
        <button type="button" @click="goTo(stepIndex + 1)" :disabled="stepIndex === trace.steps.length - 1">다음 단계</button>
        <label>재생 간격
          <select v-model.number="delay" @change="stopPlayback"><option :value="1600">1.6초</option><option :value="900">0.9초</option><option :value="450">0.45초</option></select>
        </label>
        <span>{{ stepIndex }} / {{ trace.steps.length - 1 }} 단계</span>
      </div>
      <input class="trace-slider" type="range" min="0" :max="trace.steps.length - 1" :value="stepIndex" @input="goTo(Number($event.target.value))" aria-label="실행 단계 선택" />
      <p class="trace-muted">{{ trace.note || '변수 상태는 강조한 구문 실행 후의 값입니다. 반복 동작은 설명 단위로 묶어 표시할 수 있습니다.' }}</p>
    </template>
    <p v-else-if="revealed" class="trace-muted">이 문제의 실행 해설은 아직 준비되지 않았습니다. 코드를 읽고 직접 풀이해 보세요.</p>
  </section>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import { getCodeTrace } from '../assets/codeTraces.js';

const props = defineProps({ question: { type: Object, required: true }, language: { type: String, required: true }, answered: Boolean });
const trace = computed(() => getCodeTrace(props.question));
const lines = computed(() => props.question.passageOrCode.split('\n'));
const revealed = ref(props.answered);
const stepIndex = ref(0);
const delay = ref(900);
const playing = ref(false);
const source = ref(null);
let timer;
const frame = computed(() => trace.value?.steps[stepIndex.value]);
const changedNames = computed(() => {
  if (!frame.value || stepIndex.value === 0) return [];
  const previous = trace.value.steps[stepIndex.value - 1].variables;
  return Object.keys(frame.value.variables).filter(name => JSON.stringify(previous[name]) !== JSON.stringify(frame.value.variables[name]));
});
function stopPlayback() { clearInterval(timer); playing.value = false; }
function goTo(index) {
  stopPlayback();
  stepIndex.value = Math.max(0, Math.min(index, trace.value.steps.length - 1));
}
function togglePlayback() {
  if (playing.value) return stopPlayback();
  playing.value = true;
  timer = setInterval(() => {
    stepIndex.value++;
    if (stepIndex.value >= trace.value.steps.length - 1) stopPlayback();
  }, delay.value);
}
watch(() => props.answered, answered => { if (answered) revealed.value = true; });
watch(() => props.question, () => { stopPlayback(); stepIndex.value = 0; revealed.value = props.answered; });
watch(stepIndex, async () => {
  await nextTick();
  const active = source.value?.querySelector('.is-current');
  if (active && source.value) source.value.scrollTop = Math.max(0, active.offsetTop - source.value.offsetTop - source.value.clientHeight / 3);
});
onBeforeUnmount(stopPlayback);
</script>
