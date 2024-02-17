module.exports = {
  env: {
    jest: true,
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  ignorePatterns: [
    "/.github",
    "build",
    "cypress",
    "node_modules",
    "android",
    "ios",
    "public",
    "scripts",
    "src/assets",
    "src/static",
    ".eslintrc.js",
    "commitlint.config.js",
    "jest.config.js",
    "babel.config.js",
    "metro.config.js"
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  plugins: ['react', 'react-native', '@typescript-eslint', 'react-hooks', 'prettier', 'jest', 'testing-library', '@tanstack/query'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    ecmaFeatures: {
      modules: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },

  rules: {
    // general
    'no-use-before-define': 'warn',
    'semi': 'off',
    // import
    'import/no-unresolved': 'off',
    'import/no-named-as-default-member': 'off',
    // react-native
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 2,
    // typescript
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    // react-hooks
    'react-hooks/exhaustive-deps': 'off',
    // testing-library
    'testing-library/prefer-user-event': 'off',
    'testing-library/prefer-wait-for': 'warn',
    'testing-library/no-wait-for-empty-callback': 'warn',
    "testing-library/consistent-data-testid": [
      2,
      {
        "testIdAttribute": ["testID"],
        "testIdPattern": "^TestId(__[A-Z]*)?$"
      }
    ],
    // n
    'n/no-callback-literal': 'off',
  },
};