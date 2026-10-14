import { createServer } from 'node:http';
import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createExplanationMiddleware } from './explanation.js';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
if (existsSync(resolve(projectRoot, '.env'))) process.loadEnvFile(resolve(projectRoot, '.env'));
const dist = resolve(projectRoot, 'dist');
if (!existsSync(resolve(dist, 'index.html'))) throw new Error('먼저 npm run build를 실행해주세요.');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
const api = createExplanationMiddleware({ apiKey: process.env.GROQ_API_KEY, publicDirectory: resolve(projectRoot, 'public') });
createServer((req, res) => {
  api(req, res, async () => {
    try {
      if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
      const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      let file = resolve(dist, `.${path}`);
      if (file !== dist && !file.startsWith(`${dist}${sep}`)) { res.writeHead(403); res.end(); return; }
      let info = await stat(file).catch(() => null);
      if (!info?.isFile()) {
        if (path.startsWith('/api/') || extname(path)) { res.writeHead(404); res.end(); return; }
        file = resolve(dist, 'index.html');
      }
      res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
      if (req.method === 'HEAD') { res.end(); return; }
      const stream = createReadStream(file);
      stream.on('error', () => res.destroy());
      stream.pipe(res);
    } catch { res.writeHead(400); res.end(); }
  });
}).listen(Number(process.env.PORT) || 3000, process.env.HOST || '127.0.0.1', () => {
  console.log(`EIP Practice: http://${process.env.HOST || '127.0.0.1'}:${Number(process.env.PORT) || 3000}`);
});
