<template>
  <div id="app">
    <div class="tab-navigation">
      <button 
        @click="currentTab = 'GeoQuiz'" 
        :class="{ active: currentTab === 'GeoQuiz' }"
      >
        족보퀴즈
      </button>
      <button 
        @click="currentTab = 'PstQuiz'" 
        :class="{ active: currentTab === 'PstQuiz' }"
      >
        기출문제
      </button>
    </div>

    <div class="tab-content">
      <GeoQuiz v-if="currentTab === 'GeoQuiz'" />
      <PstQuiz v-if="currentTab === 'PstQuiz'" />
    </div>
  </div>
</template>

<script>
import GeoQuiz from './components/GeoQuiz.vue';
import PstQuiz from './components/PstQuiz.vue';

export default {
  name: 'App',
  components: {
    GeoQuiz,
    PstQuiz
  },
  data() {
    return {
      currentTab: 'GeoQuiz'
    };
  }
}
</script>

<style>
.tab-navigation {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}

.tab-navigation button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid var(--color-border);
  background-color: var(--color-white);
  color: var(--color-text-light);
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-navigation button.active {
  background-color: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

.tab-navigation button:hover:not(.active) {
  background-color: #f8f9fa;
  color: var(--color-primary);
}

#app {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 2rem; */
  text-align: center;
}
</style>