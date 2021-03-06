module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
};
