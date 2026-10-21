import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.SITE_URL ? `${new URL(env.SITE_URL).pathname.replace(/\/+$/, '')}/` : mode === 'github' ? '/gtam/' : '/';
  return { plugins: [react(), tailwindcss()], base };
});
