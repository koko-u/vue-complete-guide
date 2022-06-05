/* eslint-disable no-undef */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "prettier",
  ],
  //parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ["vue", "@typescript-eslint"],
}
