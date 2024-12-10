const prettier = require("eslint-plugin-prettier");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
      semi: ["warn", "always"],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: typescriptParser,
    },
    plugins: {
      prettier,
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      semi: ["warn", "always"],
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
  },
];
