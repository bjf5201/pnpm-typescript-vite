/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  printWidth: 100,
  overrides: [
    {
      files: '*.{json,json5,jsonc}',
      options: {
        parser: 'json',
        singleQuote: false,
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        printWidth: 80,
      },
    },
    {
      files: '*.html',
      options: {
        parser: 'html',
        singleQuote: false,
        tabWidth: 4,
        printWidth: 80,
      },
    },
  ],
};

export default config;
