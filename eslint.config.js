import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';
import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.join(__dirname, '.gitignore');

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default defineConfig([
  includeIgnoreFile(gitignorePath),
  {
    ignores: ['public', '.husky', '.storybook'],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    files: ['**/*.{ts,tsx,js,jsx,cjs,mjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: 'module',
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          // using eslint-plugin-simple-import-sort instead
          ignoreDeclarationSort: true,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],
      '@typescript-eslint/no-namespace': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['typeAlias'],
          format: ['PascalCase'],
          custom: {
            regex: '^T[A-Z]',
            match: true,
          },
        },
      ],
      'react/prop-types': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    extends: [...storybook.configs['flat/recommended']],
    files: ['**/*.stories.{ts,tsx,js,jsx}'],
  },
  {
    extends: [vitest.configs.recommended, testingLibrary.configs['flat/react']],
    files: ['**/*.{spec,test}.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
    rules: {
      'testing-library/no-await-sync-events': [
        'error',
        {
          eventModules: ['fire-event'],
        },
      ],
      'testing-library/no-manual-cleanup': 'error',
      'testing-library/prefer-explicit-assert': 'error',
      'testing-library/prefer-user-event': 'warn',
      'testing-library/prefer-presence-queries': 'error',
    },
  },
  // turns off all rules that conflict with Prettier formatter
  // MUST be last
  eslintConfigPrettier,
]);
