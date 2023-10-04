module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'react-app',
    // 'eslint:recommended',
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'jsx-a11y'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'object-curly-spacing': [
      'error', 'never'
    ],
    'space-in-parens': [
      'error', 'never'
    ]
  }
}
