<template>
  <div class="app-shell">
    <nav class="sidebar">
      <ul>
        <li>
          <button @click="currentTab = 'GeoQuiz'" :class="{ active: currentTab === 'GeoQuiz' }" aria-label="키워드">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span class="tooltip-text">키워드</span>
          </button>
        </li>
        <li>
          <button @click="currentTab = 'PstQuiz'" :class="{ active: currentTab === 'PstQuiz' }">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
            <span class="tooltip-text">기출문제</span>
          </button>
        </li>
      </ul>

      <ul class="sidebar-bottom">
        <li>
          <button @click="toggleDarkMode" class="dark-mode-toggle"
            :aria-label="isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'">
            <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-sun">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-moon">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <span class="tooltip-text">{{ isDarkMode ? '다크 모드' : '라이트 모드' }}</span>
          </button>
        </li>
      </ul>
    </nav>

    <main class="main-content">
      <KeywordQuiz v-if="currentTab === 'GeoQuiz'" />
      <PstQuiz v-if="currentTab === 'PstQuiz'" />
    </main>
  </div>
</template>

<script>
import KeywordQuiz from './components/KeywordQuiz.vue';
import PstQuiz from './components/PstQuiz.vue';

export default {
  name: 'App',
  components: {
    KeywordQuiz,
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
.app-shell {
  --chrome-bg: #181818;
  --chrome-border: #2b2b2b;
  --chrome-text: #cccccc;
  --chrome-muted: #9d9d9d;
  --chrome-hover: #2a2a2a;
  --chrome-selection: #333333;
  --header-height: 35px;
  display: flex;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  padding-top: var(--header-height);
  box-sizing: border-box;
  overflow: hidden;
  text-align: left;
}

.sidebar {
  width: 48px;
  flex-shrink: 0;
  background: var(--chrome-bg);
  border-right: 1px solid var(--chrome-border);
  padding: 4px 0;
  box-sizing: border-box;
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar ul {
  list-style: none;
  padding: 0 6px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sidebar button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--chrome-muted);
  transition: background-color 120ms, color 120ms;
}

.sidebar button:hover {
  background: var(--chrome-hover);
  color: #ffffff;
  transform: none;
}

.sidebar button.active {
  background: var(--chrome-selection);
  color: #ffffff;
}

.sidebar button svg {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  stroke-width: 1.5;
}

.sidebar .tooltip-text {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 12px;
  background: #252526;
  border: 1px solid #454545;
  color: var(--chrome-text);
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  z-index: 10;
  pointer-events: none;
}

.sidebar button:hover .tooltip-text,
.sidebar button:focus-visible .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.sidebar button:focus-visible {
  outline: 1px solid #007acc;
  outline-offset: -1px;
}

.main-content {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  background: var(--color-background);
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

</style>
