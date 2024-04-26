# Bookstore Controle Digital (Back-end)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## 🚀 Descrição

Este projeto faz parte das atividades práticas do módulo 2024-F2M4: Node.js, do programa **Reprograme-se**. A proposta consiste em desenvolver um sistema de cadastro de livros e funcionários, dividido em duas partes:

1. **Aplicação Front-end**: Responsável pela interface do usuário, esta parte permite que os usuários visualizem, adicionem, editem e excluam informações sobre livros e funcionários de forma intuitiva e amigável. [Repositório no Github](https://github.com/prpires66/bookstore-front)

2. **Aplicação Back-end**: Esta parte gerencia os dados dos livros e funcionários, possibilitando a realização de operações de CRUD (Create, Read, Update, Delete) por meio de uma API, garantindo assim a integridade e segurança dos dados. [Repositório no Github](https://github.com/prpires66/bookstore-api)

> Esta aplicação se refere ao **item 2 (Aplicação Back-end)** e é responsável pelo gerenciamento dos dados dos livros e funcionários em um sistema de livraria, fornecendo uma API para interação com o banco de dados.

## ℹ️ Reprograme-se

O Reprograme-se é um programa oferecido pelo IFES - Instituto Federal do Espírito Santo, com o objetivo de qualificar jovens e adultos para o mercado de trabalho na área de Tecnologia da Informação (TI). Para mais informações, visite o [site oficial do Reprograme-se](https://reprograme-se.org.br/).

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando um conjunto de tecnologias modernas e poderosas que contribuem para a construção de uma aplicação web robusta e eficiente:

- JavaScript: Uma linguagem de programação amplamente utilizada, tanto no frontend quanto no backend, que oferece flexibilidade e desempenho.
- Node.js: Um ambiente de execução JavaScript que permite a criação de aplicativos escaláveis do lado do servidor.
- Express.js: Um framework web minimalista para Node.js que simplifica o desenvolvimento de APIs e aplicativos web, fornecendo uma série de recursos úteis e uma estrutura organizada.
- PostgreSQL: Um sistema de gerenciamento de banco de dados relacional de código aberto e poderoso, amplamente utilizado em projetos web para armazenamento seguro e eficiente de dados.
- SQLite: Um motor de banco de dados SQL embutido que oferece uma solução leve e autônoma para aplicações que precisam de armazenamento local de dados.
- JWT (JSON Web Tokens): Um padrão aberto (RFC 7519) que define uma forma compacta e autossuficiente para transmitir informações de forma segura entre as partes como um objeto JSON.

### 💻 Pré-requisitos

Antes de iniciar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/): Faça o download e siga as instruções de instalação para o seu sistema operacional.
- [Git](https://git-scm.com/): Utilizado para clonar o repositório e trabalhar com controle de versão.

Além disso, você precisará de um editor de código de sua preferência, como [Visual Studio Code](https://code.visualstudio.com/).

## 🔧 Instalação e Uso

1. **Clonagem do repositório:** Clone este repositório para o seu ambiente local usando o comando:

   ```
   git clone https://github.com/prpires66/bookstore-api.git
   ```
   
3. **Instalação de dependências:** Navegue até o diretório do projeto e instale as dependências usando o comando:

   ```
   npm install
   ```
   
5. **Configuração do ambiente:** Antes de executar a API, certifique-se de configurar as seguintes variáveis de ambiente:

- **`SECRET`:** Chave secreta utilizada pelo JWT para assinar tokens de autenticação.
- **`POSTGRES_URL`:** URL de conexão com o banco de dados PostgreSQL.
Você pode definir essas variáveis de ambiente em um arquivo `.env` na raiz do projeto ou configurá-las diretamente no ambiente de execução, dependendo das suas preferências e ambiente de desenvolvimento.

4. **Execução da API:** Inicie o servidor da API usando o comando:

   ```
   npm start
   ```
   
5. **Utilização da API:** A API estará disponível em `http://localhost:3000`. Você pode enviar requisições HTTP para as rotas especificadas abaixo.


## ⚙️ Utilização da API

Esta API oferece diversos endpoints para interagir com os funcionários e livros de uma empresa.

> **:information_source: Observação:** Substitua `<baseUrl>` pelo endpoint que você está tentando acessar.

### Rotas para Funcionários

| Método | Endpoint                 | Descrição                                                     | Exemplo de Uso (bash)                      |
| ------ | ------------------------ | ------------------------------------------------------------- | ------------------------------------------ |
| `POST` | `/login`                 | Autentica um funcionário.                                     | `curl <baseUrl>/login`                     |
| `POST` | `/funcionarios`          | Cadastra um novo funcionário.                                 | `curl -X POST <baseUrl>/funcionarios`      |
| `GET`  | `/funcionarios/:id?`     | Lista todos os funcionários ou obtém detalhes de um específico. | `curl <baseUrl>/funcionarios/1`           |
| `PUT`  | `/funcionarios/:id`      | Atualiza os dados de um funcionário.                          | `curl -X PUT <baseUrl>/funcionarios/1`     |
| `DELETE` | `/funcionarios/:id`      | Exclui um funcionário.                                        | `curl -X DELETE <baseUrl>/funcionarios/1`  |

### Rotas para Livros

| Método | Endpoint                 | Descrição                                                     | Exemplo de Uso (bash)                      |
| ------ | ------------------------ | ------------------------------------------------------------- | ------------------------------------------ |
| `POST` | `/livros/Cadastrar`      | Cadastra um novo livro.                                       | `curl -X POST <baseUrl>/livros/Cadastrar`  |
| `GET`  | `/livros/:id?`           | Lista todos os livros ou obtém detalhes de um específico.     | `curl <baseUrl>/livros/1`                 |
| `PUT`  | `/livros/:id`            | Atualiza os dados de um livro.                                | `curl -X PUT <baseUrl>/livros/1`           |
| `DELETE` | `/livros/:id`            | Exclui um livro.                                              | `curl -X DELETE <baseUrl>/livros/1`        |

> Lembre-se de substituir `:id` pelo ID correspondente ao funcionário ou livro desejado nas rotas que exigem esse parâmetro.

## ㊙️ Acesso às Rotas Protegidas

Para acessar as rotas protegidas da API, você precisa incluir o token de autenticação no header da requisição. No caso do Postman ou programas similares, você deve adicionar o header `x-access-token` com o valor do token na requisição. Todas as rotas são protegidas, exceto: `/login` e `/funcionarios`.

> Ao enviar uma requisição para uma rota protegida, certifique-se de incluir esse header para garantir o acesso autorizado.

```bash
curl -X GET \
  http://sua_api.com/rota_protegida \
  -H 'x-access-token: TOKEN_DE_AUTENTICACAO'
```

> Substitua `http://sua_api.com/rota_protegida` pelo URL da rota protegida que você deseja acessar e `TOKEN_DE_AUTENTICACAO` pelo token de autenticação válido para acessar essa rota.

## 📄 Licença

![License: MIT](https://img.shields.io/github/license/prpires66/nlw-esports?style=for-the-badge)

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE.md](https://github.com/prpires66/bookstore-api/blob/main/LICENSE) para obter mais detalhes.

## 🙏 Agradecimento

> - Agradeço ao IFES - Instituto Federal do Espírito Santo pelo apoio através do projeto Reprograme-se, assim como aos professores e colegas alunos.
> - Contribuições e sugestões são sempre bem-vindas.
> - Muito obrigado!
