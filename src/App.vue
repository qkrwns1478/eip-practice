<template>
  <div id="app">
    <nav class="sidebar">
      <ul>
        <li>
          <button 
            @click="currentTab = 'GeoQuiz'" 
            :class="{ active: currentTab === 'GeoQuiz' }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            <span class="tooltip-text">족보퀴즈</span>
          </button>
        </li>
        <li>
          <button 
            @click="currentTab = 'PstQuiz'" 
            :class="{ active: currentTab === 'PstQuiz' }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
            <span class="tooltip-text">기출문제</span>
          </button>
        </li>
      </ul>
      
      <ul class="sidebar-bottom">
        <li>
          <button @click="toggleDarkMode" class="dark-mode-toggle">
            <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            <span class="tooltip-text">{{ isDarkMode ? '라이트 모드' : '다크 모드' }}</span>
          </button>
        </li>
      </ul>
    </nav>

    <main class="main-content">
      <GeoQuiz v-if="currentTab === 'GeoQuiz'" />
      <PstQuiz v-if="currentTab === 'PstQuiz'" />
    </main>
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
      currentTab: 'GeoQuiz',
      isDarkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  },
  watch: {
    isDarkMode(newValue) {
      if (newValue) {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
      }
    }
  },
  mounted() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }
}
</script>

<style>
#app {
  display: flex;
  height: 100vh;
  width: 100%;
  text-align: left;
}

.sidebar {
  width: 72px;
  flex-shrink: 0;
  background-color: var(--color-white);
  border-right: 1px solid var(--color-border);
  padding: 16px 0;
  box-sizing: border-box;
  overflow: visible;
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar ul {
  list-style: none;
  padding: 0 12px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar-bottom {
  margin-top: auto;
}

.sidebar button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  padding: 0;
  font-weight: 600;
  border: 1px solid transparent;
  background-color: transparent;
  color: var(--color-text-light);
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
}

.sidebar button:hover:not(.active) {
  background-color: var(--color-background);
  color: var(--color-text);
  transform: none; 
  border-color: transparent;
}

.sidebar button.active {
  background-color: var(--color-primary-light);
  color: var(--color-primary);
  border-color: transparent;
}

.sidebar button.dark-mode-toggle:hover {
  color: var(--color-primary);
}

.sidebar button svg {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  margin-right: 0;
  stroke-width: 2;
  color: currentColor;
}

.sidebar button .tooltip-text {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 12px;
  
  background-color: var(--color-tooltip-bg);
  color: var(--color-white-for-text);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 10;
  pointer-events: none;
}

.sidebar button .tooltip-text::before {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent var(--color-tooltip-bg) transparent transparent;
}

.sidebar button:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  background-color: var(--color-background);
  /* padding: 2rem; */
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

.quiz-container {
  margin: 0 auto;
}
</style>