// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-loop-func': 'off',
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-namespace': 'off',
      'no-inner-declarations': 'off',

      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    },
  },
  {
    ignores: ['src/setupProxy.js'],
  },
);