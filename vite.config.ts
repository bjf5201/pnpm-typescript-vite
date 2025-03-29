/// <reference types="vitest/config" />
import { type UserConfig, defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss() as unknown as import('vite').PluginOption,
      tsconfigPaths(),
    ] as import('vite').PluginOption[],
    test: {
      alias: {
        '@/': new URL('./app/', import.meta.url).pathname,
      },
      coverage: {
        enabled: true,
        provider: 'v8',
        include: ['app/**/*.{ts,tsx}'],
        clean: true,
        reporter: ['json', 'text'],
        reportsDirectory: './tests/coverage',
      },
      css: {
        exclude: [],
      },
      environment: 'jsdom',
      globals: true,
      outputFile: './tests/output.json',
      reporters: ['json', 'verbose'],
      setupFiles: ['./tests/setupTests.ts'],
    },
    root: './',
    build: {
      outDir: './dist',
      emptyOutDir: true,
      manifest: true,
    },
    define: {
      'process.env': {
        APP_MODE: JSON.stringify(env.VITE_MODE),
        API_URL: JSON.stringify(env.VITE_API_URL),
      },
    },
  };
});
