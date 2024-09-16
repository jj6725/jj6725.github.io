module.exports = {
  env: {
    browser: true,
    es2021: true,
    "p5js/p5": true,
  },
  plugins: ["p5js"],
  extends: [
    "eslint:recommended",
    "plugin:p5js/p5",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {},
};
