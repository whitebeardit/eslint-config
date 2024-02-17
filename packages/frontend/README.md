# @whitebeardit/eslint-config-frontend

Esse pacote contém a configuração do ESLINT compartilhada para os projetos de Frontend do whitebeardit.

## Instalação

Para instalar e usar a nossa configuração do ESLint em um projeto, poderá instalá-la com as etapas a seguir.

Primeiro, instale este pacote e o ESLint e o Prettier.

> Os pacotes eslint e prettier são peer dependencies para o projeto;

```sh
yarn add -D @whitebeardit/eslint-config-frontend eslint@^8.0.0 prettier@^3.0.0
```

Em seguida, crie um arquivo chamado .eslintrc.js com o seguinte conteúdo na pasta raiz do seu projeto:

```js
/**
 * @type {import('eslint').ESLint.ConfigData}
 */

module.exports = {
  extends: "@whitebeardit/eslint-config-frontend",
  parserOptions: { tsconfigRootDir: __dirname, project: ["./tsconfig.json"] },
};
```

> A configuração da localização do ts config é obrigatória.

É isso! E você já pode começar a codar usando as nossa práticas de eslint;

## Ignore Patterns

Por padrão, alguns arquivos e pastas padrões são incluídos no ignorePatterns, são eles:

```js
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
];
```

Para extender esse configuração e adicionar mais arquivos a serem ignorados, podemos criar um .eslintignore na raiz do respectivo projeto, e incluir os caminhos:

```sh
// .eslintignore

/node_modules
/src/my-folder
jestsetup.ts
```
