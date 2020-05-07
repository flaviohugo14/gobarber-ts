<h1 align="center">
  <img src="./server/.github/logo.svg" alt="Logo" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/flaviohugo14/gobarber-ts/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/flaviohugo14/gobarber-ts?style=social">
  </a>
</p>

<p align="center">
  <a href="#como-instalar">Como instalar?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#documentação-das-rotas">Documentação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## Aplicação em desenvolvimento

Backend do app GoBarber, desenvolvido com [Express](https://github.com/expressjs/express), utilizando Typescript e todos os conceitos do SOLID.

---

<p align="center">
  <img src="./server/.github/nodejs.svg" alt="Node.js" />&nbsp;&nbsp;&nbsp;&nbsp;<img src="./server/.github/ts.svg" alt="Typescript" height="80"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="./server/.github/tests.svg" alt="Tests"/>
</a>

---

<img src="./server/.github/Logon.png" alt="Preview">

---

### Ferramentas utilizadas na aplicação:

- [TypeORM](https://typeorm.io/) - ORM para conversação com o banco de dados
- [JWT](https://www.npmjs.com/package/jsonwebtoken) - JSON WEB TOKEN - Lib para autenticação via token.
- [Bcryptjs](https://www.npmjs.com/package/bcrypt) - Usado na criptografia de senhas.
- [DotEnv](https://github.com/motdotla/dotenv) - Para lidar com variáveis ambiente.
- [Date-fns](https://github.com/date-fns/date-fns) - Manipulação de datas no JavaScript.

### Bancos de dados da aplicacão

<p align="center">
  <a href="https://github.com/postgres/postgres"><img src="./server/.github/postgres.svg" alt="Postgres" /></a>
</p>

### Ferramentas utilizadas no ambiente de desenvolvimento:
- [TS Node Dev](https://github.com/whitecolor/ts-node-dev) - Transpilador (TS -> JS)
- [ESLint](https://github.com/eslint/eslint) - Lint para identificar erros em tempo de desenvolvimento.
- [Prettier](https://github.com/prettier/prettier) - Padroniza e melhora a visualização do código.

### Ferramentas extras que ajudaram no desenvolvimento:
- [Docker](https://www.docker.com/) - Usado para conteineização dos bancos de dados.
- [Insomnia](https://insomnia.rest/) - Utilizado para debugar e testar as rotas da API.
- [Postbird](https://www.electronjs.org/apps/postbird) - Utilizado para vizualizar e manipular bancos de dados Postgres.
- [DevDocs](https://devdocs.egoist.moe/) - App Desktop para consultar documentação.
---

## Como instalar?

Antes de tudo, instale o [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/) e o [Node.js](https://nodejs.org/en/download/).

1. Instale o [Docker](https://www.docker.com/).

<p align="center">
 <img src="./server/.github/docker.svg" alt="Docker">
</p>

2. Inicie as imagens dos bancos de dados:
```
# Digite o nome sem aspas.
```
```
$ docker run --name "nome" -p 5432:5432 -d -t postgres
```
```
# Para ver se está funcionando
$ docker ps

# Para iniciar algum processo do Docker
$ docker start "nome"
```
3. Clone o repositório e entre na pasta ```server```:
```
$ git clone https://github.com/flaviohugo14/gobarber-ts.git
```
```
$ cd gobarber-ts/server
```
4. Instale as dependências com:
```
$ yarn install
```
5. Rode as `migrations` com o comando:
```
$ yarn typeorm migration:run
```
6. Inicie o processo principal da aplicação:
```
$ yarn dev:server
```
- Execute os testes com:
```
$ yarn test
```

By [Flávio Pangrácio](https://www.linkedin.com/in/flaviopangracio/)

---
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/flaviohugo14/fastfeet/blob/master/LICENSE) para mais detalhes.

---
