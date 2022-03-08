// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  // 执行环境
  env: {
    browser: true,
    es2021: true,
  },
  // 扩展
  extends: [
    // vue风格
    'plugin:vue/vue3-recommended',
    // ts风格
    'plugin:@typescript-eslint/recommended',
    // prettier风格
    'prettier',
    'plugin:prettier/recommended',
  ],
  // 增加vue解析器, 解析vue文件
  parser: 'vue-eslint-parser',

  // 解析器配置
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  // 插件
  plugins: ['vue', '@typescript-eslint'],
  // 规则
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/multi-word-component-names': 'warn',
  },
});
