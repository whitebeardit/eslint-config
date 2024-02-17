# @whitebeardit/eslint-config-backend

Esse pacote contém a configuração do ESLINT compartilhada para os projetos de Backend do whitebeardit.

## Instalação

Para instalar e usar a nossa configuração do ESLint em um projeto, poderá instalá-la com as etapas a seguir.

Primeiro, instale este pacote e o ESLint e o Prettier.

> Os pacotes eslint e prettier são peer dependencies para o projeto;

```sh
yarn add -D @whitebeardit/eslint-config-backend eslint@^8.0.0 prettier@^2.0.0
```

Feito isto, adicione ao `package.json` o seguinte objeto de configuração do eslint

```json
"eslintConfig": {
    "extends": "@whitebeardit/eslint-config-backend",
    "ignorePatterns": [
    "newrelic.js",
    "**/jest/**/*.*"
    ]
}
```

Garanta que não há nenhum outro arquivo de configuração do eslint no seu projeto. Caso existe algum `.eslintrc.*` ou `.eslintignore` você deve excluí-los para usar essa configuração do `package.json`.

É isso! E você já pode começar a codar usando as nossa práticas de eslint;
