module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'prefer-arrow',
    'react',
    'react-hooks',
    'react-hook-form',
    'react-perf',
    'prettier',
    'jest',
    'unicorn',
    'import',
    '@babel',
  ],
  extends: [
    'eslint:recommended', // eslint
    'plugin:@typescript-eslint/eslint-recommended', // typescript
    'plugin:@typescript-eslint/recommended', // typescript
    'plugin:jsx-a11y/recommended', // jsx-ally
    'plugin:react/recommended', // react
    'plugin:react-hook-form/recommended', // react
    'plugin:react-hooks/recommended', // react-hooks
    'plugin:react-perf/recommended', // react
    'prettier', // prettier
    'plugin:prettier/recommended', // prettier
    'plugin:jest/recommended', // jest
    'plugin:unicorn/recommended', // unicorn
    'plugin:import/recommended', // import
    'plugin:import/typescript', // import
  ],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    eqeqeq: ['error', 'smart'],
    'prefer-const': ['error'],
    'no-console': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
    jest: {
      version: 26,
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {},
    },
    {
      files: [
        '.eslintrc.js',
        '.prettierrc.js',
        '.huskyrc.js',
        '.lintstagedrc.js',
      ],
      parser: '@babel/eslint-parser',
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['./src/setupTests.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
  ],
  ignorePatterns: ['react-app-env.d.ts'],
};
