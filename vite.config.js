import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createExplanationMiddleware } from './server/explanation.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue(), {
    name: 'quiz-explanation-api',
    configureServer(server) {
      server.middlewares.use(createExplanationMiddleware({ apiKey: process.env.GROQ_API_KEY || loadEnv(mode, process.cwd(), '').GROQ_API_KEY }));
    },
    configurePreviewServer(server) {
      server.middlewares.use(createExplanationMiddleware({ apiKey: process.env.GROQ_API_KEY || loadEnv(mode, process.cwd(), '').GROQ_API_KEY }));
    },
  }],
  server: {
    watch: {
      // Temporary browser profiles contain locked cache files on Windows.
      ignored: [/(?:^|[/\\])\.tmp-[^/\\]*(?:[/\\]|$)/],
    },
  },
}))
