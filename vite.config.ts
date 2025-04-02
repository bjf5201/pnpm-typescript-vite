/// <reference types="vitest/config" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      tsconfigPaths(),
    ],
    test: {
      alias: {
        '@/': new URL('./app/', import.meta.url).pathname,
        '#tests': new URL('./tests/', import.meta.url).pathname,
        '#types': new URL('./app/types/', import.meta.url).pathname,
      },
      coverage: {
        enabled: true,
        provider: 'v8',
        include: [
          'app/**/*.{ts,tsx}',
          'lib/**/*.ts',
        ],
        clean: true,
        reporter: [
          'json',
          'text',
        ],
        reportsDirectory: './tests/coverage',
      },
      css: {
        include: [/\.(css|scss|sass)$/],
        modules: {
          classNameStrategy: 'scoped',
        },
      },
      typecheck: {
        enabled: true,
      },
      environment: 'jsdom',
      globals: true,
      outputFile: './tests/output.json',
      reporters: [
        'json',
        'verbose',
      ],
      setupFiles: ['./tests/setupTests.ts'],
      mockReset: true,
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
