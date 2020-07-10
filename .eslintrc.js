module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'airbnb/hooks'],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx'] }],
    'arrow-parens': ['warn', 'as-needed'],
    'no-unused-vars': ['off'],
    'no-console': ['off'],
    'import/prefer-default-export': ['off'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react/jsx-props-no-spreading': ['warn'],
    'react/prop-types': ['off'],
    'no-underscore-dangle': ['off'],
    'comma-dangle': ['off'],
    'linebreak-style': ['error', process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'],
    'no-plusplus': ['off'],
    'arrow-body-style': ['off'],
    'no-confusing-arrow': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'function-paren-newline': 'off',
    'no-shadow': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};
