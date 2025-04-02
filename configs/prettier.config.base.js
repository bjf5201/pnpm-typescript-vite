/**
 * @typedef {import('prettier-plugin-multiline-arrays').MultilineArraysOptions} MultilineArraysOptions
 *
 * @typedef {import('prettier-plugin-tailwindcss').PluginOptions} TailwindcssPluginOptions
 * @typedef {import('prettier').Options} PrettierOptions
 * @type { PrettierOptions && MultilineArraysOptions && TailwindcssPluginOptions }
 * @see https://prettier.io/docs/configuration
 */
export const basePrettierConfig = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'ignore',
  multilineArraysWrapThreshold: 1,
  plugins: [
    //  'prettier-plugin-sort-json',
    //  'prettier-plugin-package.json',
    'prettier-plugin-multiline-arrays',
    //  'prettier-plugin-jsdoc',
    //  'prettier-plugin-interpolated-html-tags',
    'prettier-plugin-tailwindcss',
  ],
  printWidth: 80,
  proseWrap: 'preserve',
  singleQuote: true,
  tabWidth: 2,
  tailwindConfig: '../tailwind.config.js',

  trailingComma: 'all',
  useTabs: false,
};
