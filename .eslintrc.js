module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', '@emotion'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
  env: {
    browser: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
    worker: true,
    serviceworker: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    process: 'readonly',
    global: 'readonly',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-undef': 'error',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
        },
      },
    ],
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    '@emotion/jsx-import': 'error',
    '@emotion/pkg-renaming': 'error',
  },
};
