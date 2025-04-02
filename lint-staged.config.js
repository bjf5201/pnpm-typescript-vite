export default {
  '{app,lib}/**/*': (filenames) => [
    `pnpm format:fix ${filenames.join(' ')}`,
    `pnpm lint:fix ${filenames.join(' ')}`,
    'pnpm tsc:check',
    `pnpm test:ci ${filenames.join(' ')}`,
    'pnpm build',
  ],
  '*/**.{json,css,html,md,mdx}': [
    'pnpm format:fix',
  ],
  './(configs/)?*.config.{ts,js,cjs}': () => [
    'pnpm tsc:check',
  ],
};
