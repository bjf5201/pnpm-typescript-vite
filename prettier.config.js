import { basePrettierConfig } from './configs/prettier.config.base.js';

/**
 * @typedef {import('prettier-plugin-multiline-arrays').MultilineArrayOptions} MultilineArrayOptions
 *
 * @typedef {import("prettier").Config} PrettierConfig
 *
 * @type {PrettierConfig & MultilineArrayOptions}
 * @description Prettier configuration file.
 * @see https://prettier.io/docs/configuration
 */
const prettierConfig = {
  ...basePrettierConfig,
  overrides: [
    {
      files: '**/*.css',
      options: {
        parser: 'css',
        singleQuote: false,
      },
    },
    {
      files: '**/*.html',
      options: {
        parser: 'html',
        singleQuote: false,
      },
    },
    {
      files: '**/*.{json,json5,jsonc}',
      options: {
        parser: 'json',
        singleQuote: false,
      },
    },
    {
      files: '**/*.{md,mdx}',
      options: {
        parser: 'mdx',
        singleQuote: false,
      },
    },
  ],
};

export default prettierConfig;
