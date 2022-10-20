/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.eslint.json"],
  },
  plugins: [
    "prefer-arrow-functions",
    "@typescript-eslint",
    "simple-import-sort",
    "sort-keys-fix",
    "typescript-sort-keys",
  ],
  root: true,
  rules: {
    "@typescript-eslint/array-type": ["warn", { default: "array" }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    curly: "warn",
    "no-return-await": "warn",
    "prefer-arrow-functions/prefer-arrow-functions": [
      "warn",
      {
        disallowPrototype: true,
        returnStyle: "unchanged",
      },
    ],
    "prettier/prettier": ["error", { endOfLine: "lf" }],
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          ["^.*\\u0000$"],
          ["^\\u0000"],
          ["^@?\\w"],
          ["^"],
          ["^\\."],
          ["method[\\dABCDE]"],
        ],
      },
    ],
    "sort-keys-fix/sort-keys-fix": [
      "warn",
      "asc",
      { caseSensitive: false, natural: true },
    ],
    "typescript-sort-keys/interface": "warn",
    "typescript-sort-keys/string-enum": "warn",
  },
};
