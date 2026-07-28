import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import { defineConfig, includeIgnoreFile } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tsdoc from 'eslint-plugin-tsdoc';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),

  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'simple-import-sort': simpleImportSort,
      prettier,
      tsdoc,
    },

    extends: [js.configs.recommended, tseslint.configs.recommended],

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parser: tseslint.parser,
    },

    rules: {
      '@typescript-eslint/no-extra-semi': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-console': 'error',
      'no-debugger': 'error',
      'prettier/prettier': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'tsdoc/syntax': 'error',
    },
  },
]);
