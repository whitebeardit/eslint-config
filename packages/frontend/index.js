/**
 * @type {import('eslint').ESLint.ConfigData}
 */

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  ignorePatterns: [
    "/.github",
    "build",
    "cypress",
    "node_modules",
    "public",
    "scripts",
    "src/assets",
    "src/static",
    ".eslintrc.js",
    "commitlint.config.js",
    "vite.config.ts",
    "prettier.config.js",
    ".prettierrc.js",
  ],
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:import/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    zE: true,
  },
  overrides: [
    {
      env: {
        node: true,
        "jest/globals": true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      extends: ["plugin:cypress/recommended"],
      files: ["cypress/**/*.js"],
    },

    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "prettier",
    "jest",
    "testing-library",
    "@tanstack/query",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-const-assign": 2,
    "no-this-before-super": 2,
    "no-undef": 2,
    "no-unreachable": 2,
    "no-unused-vars": "off",
    "import/no-unresolved": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "constructor-super": "error",
    "valid-typeof": "warn",
    "no-shadow": "off",
    "react/jsx-uses-vars": 2,
    camelcase: "off",
    "global-require": "off",
    "react/jsx-uses-react": 1,
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/rules-of-hooks": "error",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "no-underscore-dangle": "off",
    "import/order": "warn",
    eqeqeq: "off",
    "no-unneeded-ternary": "warn",
    "consistent-return": "off",
    "react/jsx-curly-newline": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-wrap-multilines": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off",
    "dot-notation": "off",
    "react/no-array-index-key": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "warn",
    "react/prop-types": "off",
    "array-callback-return": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/alt-text": "warn",
    "no-alert": "off",
    "no-restricted-globals": "off",
    "no-plusplus": "off",
    "react/state-in-constructor": "off",
    "react/no-unused-state": "off",
    "react/sort-comp": "off",
    "class-methods-use-this": "off",
    "react/jsx-no-bind": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/button-has-type": "off",
    "react/no-access-state-in-setstate": "off",
    "jsx-a11y/no-autofocus": "off",
    "new-cap": "off",
    "react/jsx-no-duplicate-props": [
      2,
      {
        ignoreCase: true,
      },
    ],
    "react/jsx-no-undef": [
      "error",
      {
        allowGlobals: false,
      },
    ],
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx", ".jsx"],
      },
    ],
    "prettier/prettier": "warn",
    "react/function-component-definition": "off",
    "react/jsx-no-useless-fragment": "off",
    "default-param-last": "off",
    "react/jsx-no-constructed-context-values": "warn",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-definitions": "off",
  },
};
