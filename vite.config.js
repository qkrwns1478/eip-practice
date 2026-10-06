import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      // Temporary browser profiles contain locked cache files on Windows.
      ignored: [/(?:^|[/\\])\.tmp-[^/\\]*(?:[/\\]|$)/],
    },
  },
})
