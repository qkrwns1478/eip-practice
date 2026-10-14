import { resolve } from 'node:path';
import { createExplanationMiddleware } from '../server/explanation.js';

// Vercel deploys this entry point as /api/explanation alongside Vite's static build.
export default function handler(req, res) {
  return createExplanationMiddleware({
    apiKey: process.env.GROQ_API_KEY,
    publicDirectory: resolve(process.cwd(), 'public'),
  })(req, res, () => {
    res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify({ error: '요청한 API를 찾을 수 없습니다.' }));
  });
}
