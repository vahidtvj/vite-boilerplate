module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.0.0'
    }
  },
  plugins: ['react', '@typescript-eslint', 'react-prefer-function-component'],
  rules: {
    'react/react-in-jsx-scope': 0, // vite doesn't require you to import React manually
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-explicit-any': 1,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react-prefer-function-component/react-prefer-function-component': [2]
  }
}
