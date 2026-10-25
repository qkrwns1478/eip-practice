import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createExplanationMiddleware } from './server/explanation.js'
import { createSearchService } from './server/rag/search.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load secrets for server middleware only; Vite still exposes only VITE_* to the browser.
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env };
  const search = createSearchService({ env });
  return {
    plugins: [vue(), {
      name: 'quiz-explanation-api',
      configureServer(server) {
        server.middlewares.use(createExplanationMiddleware({ apiKey: env.GROQ_API_KEY, search }));
      },
      configurePreviewServer(server) {
        server.middlewares.use(createExplanationMiddleware({ apiKey: env.GROQ_API_KEY, search }));
      },
    }],
    server: {
      watch: {
        // Temporary browser profiles contain locked cache files on Windows.
        ignored: [/(?:^|[/\\])\.tmp-[^/\\]*(?:[/\\]|$)/],
      },
    },
  };
})
