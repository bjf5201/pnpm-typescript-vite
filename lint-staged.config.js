export default {
  '{app,lib,test}/**/*}': [
    'pnpm lint:fix',
    'pnpm format:fix',
    'pnpm test:ci',
    'pnpm typecheck',
    'pnpm build',
  ],
  '*/**.{json,css,html,md,mdx}': ['pnpm format:fix'],
  './*.{js,jsx,ts,tsx}': ['pnpm lint:fix', 'pnpm format:fix'],
};
