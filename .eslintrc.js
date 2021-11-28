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
    'react',
    'react-hooks',
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
    'plugin:react/recommended', // react
    'plugin:react-hooks/recommended', // react-hooks
    'prettier', // prettier
    'plugin:prettier/recommended', // prettier
    'plugin:jest/recommended', // jest
    'plugin:unicorn/recommended', // unicorn
    'plugin:import/errors', // import
    'plugin:import/warnings', // import
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
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'warn', // Consider using explicit annotations for object literals and function return types even when they can be inferred.
    'no-empty': 'warn',
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
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['.eslintrc.js', '.prettierrc.js', 'babel.config.json'],
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
