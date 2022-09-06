const { mergeWith } = require('lodash');
const baseConfig = require('eslint-config-react-app');

module.exports = mergeWith({
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'standard'
  ],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    semi: ['error', 'always'],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error'
  }
}, baseConfig);
