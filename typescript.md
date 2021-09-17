# Typescript - Criando o Projeto

**_Este documento funciona como um resumo de como criar um projeto em Typescript, nele estarão passos, comandos e dicas essenciais para o desenvolvimento do projeto._**

---
## Conceitos iniciais

Toda a parte de tipagem é alocada em uma outra biblioteca.

Para ter acesso aos tipos de uma determinada biblioteca é necessário a instalação de uma nova biblioteca.

  ```javascript {.line-numbers}
  yarn add @types/express -D
  ```
- Converter o código para que o Node interprete
- Instalar dependência do Typescrip
>

  ```javascript {.line-numbers}
  yarn add typescript -D
  yarn tsc --init
  ```
- Alterar dentro do arquivo _tscconfig.json >> "outDir": "./dist"_
