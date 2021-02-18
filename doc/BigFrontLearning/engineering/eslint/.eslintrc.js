module.exports = {
  env: {
    browser: false,
    es6: false
  },
  extends: ['standard'],
  parserOptions: {
    ecmaversion: 2015
  },
  rules: {
    'no-alert': 'error'
  },
  // 设置全局成员
  globals: {
    'jQuery': 'readonly'
  }
}