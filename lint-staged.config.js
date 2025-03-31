export default {
  '{app,lib,test}/**/*}': [
    'pnpm lint',
    'pnpm format',
    'pnpm test:ci',
    'pnpm typecheck',
    'pnpm build',
  ],
  '*/**.{json,css,html,md,mdx}': ['pnpm format:fix'],
  './*.{js,jsx,ts,tsx}': ['pnpm lint:fix', 'pnpm format:fix'],
};
