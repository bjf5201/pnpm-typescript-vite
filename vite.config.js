/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react({ tsDecorators: true}),
      tailwindcss(),
      tsconfigPaths(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./tests/setupTests.ts'],
      include: ['./tests/**/*.test.{ts,tsx}'],
    },
    resolve: {
      conditions: ['@app']
    },
    root: './src',
    build: {
      outDir: './dist',
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    }
  }
})