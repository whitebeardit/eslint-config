/**
 * @type {import('eslint').ESLint.ConfigData}
 */

module.exports = {
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "interface",
      format: ["PascalCase"],
      custom: {
        regex: "^I[A-Z]",
        match: true,
      },
    },
    {
      selector: "enum",
      format: ["PascalCase"],
      custom: {
        regex: "^E[A-Z]",
        match: true,
      },
    },
  ],
  "max-params": ["error", 3],
  "import/prefer-default-export": "off",
};
