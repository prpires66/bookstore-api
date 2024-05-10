# Bookstore Controle Digital (Back-end)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

<p align="left">
  <a href="#%E2%84%B9%EF%B8%8F-reprograme-se">Reprograme-se</a> •
  <a href="#%EF%B8%8F-tecnologias">Tecnologias</a> •
  <a href="#-pré-requisitos">Pré-requisitos</a> •
  <a href="#-instalação-e-uso">Instalação</a> •
  <a href="#%EF%B8%8F-utiliza%C3%A7%C3%A3o-da-api">Utilização</a> •
  <a href="#%EF%B8%8F-rotas-protegidas">Rotas Protegidas</a> •
  <a href="#-implantação">Implantação</a> •
  <a href="#-licença">Licença</a> •
  <a href="#-agradecimentos">Agradecimentos</a>
</p>

---
## 🚀 Descrição

Este projeto faz parte das atividades práticas do módulo 2024-F2M4: Node.js, do programa **Reprograme-se**. A proposta consiste em desenvolver um sistema de cadastro de livros e funcionários, dividido em duas partes:

1. **Aplicação Front-end**: Responsável pela interface do usuário, esta parte permite que os usuários visualizem, adicionem, editem e excluam informações sobre livros e funcionários de forma intuitiva e amigável. [Repositório no Github](https://github.com/prpires66/bookstore-front)

2. **Aplicação Back-end**: Esta parte gerencia os dados dos livros e funcionários, possibilitando a realização de operações de CRUD (Create, Read, Update, Delete) por meio de uma API, garantindo assim a integridade e segurança dos dados. [Repositório no Github](https://github.com/prpires66/bookstore-api)

> [!NOTE]
> Esta aplicação se refere ao **item 2 (Aplicação Back-end)** e é responsável pelo gerenciamento dos dados dos livros e funcionários em um sistema de livraria, fornecendo uma API para interação com o banco de dados.

## ℹ️ Reprograme-se

O Reprograme-se é um programa oferecido pelo IFES - Instituto Federal do Espírito Santo, com o objetivo de qualificar jovens e adultos para o mercado de trabalho na área de Tecnologia da Informação (TI). Para mais informações, visite o [site oficial do Reprograme-se](https://reprograme-se.org.br/).

## 🛠️ Tecnologias

Este projeto foi desenvolvido utilizando um conjunto de tecnologias modernas e poderosas que contribuem para a construção de uma aplicação web robusta e eficiente:

- **JavaScript**: Uma linguagem de programação amplamente utilizada, tanto no front-end quanto no back-end, que oferece flexibilidade e desempenho.
- **Node.js**: Um ambiente de execução JavaScript que permite a criação de aplicativos escaláveis do lado do servidor.
- **Express.js**: Um framework web minimalista para Node.js que simplifica o desenvolvimento de APIs e aplicativos web, fornecendo uma série de recursos úteis e uma estrutura organizada.
- **PostgreSQL**: Um sistema de gerenciamento de banco de dados relacional de código aberto e poderoso, amplamente utilizado em projetos web para armazenamento seguro e eficiente de dados.
- **SQLite**: Um motor de banco de dados SQL embutido que oferece uma solução leve e autônoma para aplicações que precisam de armazenamento local de dados.
- **JWT (JSON Web Tokens)**: Um padrão aberto (RFC 7519) que define uma forma compacta e autossuficiente para transmitir informações de forma segura entre as partes como um objeto JSON.

## 💻 Pré-requisitos

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
- **`PORT`:** Porta em que o servidor da API será executado. Por padrão, é `3000`, mas você pode definir uma porta diferente se necessário.
- **`DB_TYPE`:** Tipo de banco de dados a ser utilizado. Os valores válidos são `sqlite` ou `postgres`.

> [!TIP]
> Você pode definir essas variáveis de ambiente em um arquivo `.env` na raiz do projeto ou configurá-las diretamente no ambiente de execução, conforme suas preferências e os recursos disponíveis no ambiente utilizado. Abaixo um exemplo de arquivo `.env`:
```dotenv
SECRET=seu_segredo_aqui
POSTGRES_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
PORT=3000
DB_TYPE=postgres
```

4. **Execução da API:** Inicie o servidor da API usando o comando:

   ```
   npm start
   ```
 **Utilização da API:** A API estará disponível em `http://localhost:3010` por padrão, ou na porta especificada pela variável de ambiente `PORT`. Você pode enviar requisições HTTP para as rotas especificadas abaixo.

## ⚙️ Utilização da API

Esta API oferece diversos endpoints para interagir com os funcionários e livros de uma empresa.

> [!NOTE]
> Substitua `<baseUrl>` pelo endpoint que você está tentando acessar.

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

## ㊙️ Rotas Protegidas

Para acessar as rotas protegidas da API, você precisa incluir o token de autenticação no header da requisição. No caso do Postman ou programas similares, você deve adicionar o header `x-access-token` com o valor do token na requisição. Todas as rotas são protegidas, exceto: `/` e `/login`.

> [!WARNING]
> Ao enviar uma requisição para uma rota protegida, certifique-se de incluir esse header para garantir o acesso autorizado.

```bash
curl -X GET \
  http://sua_api.com/rota_protegida \
  -H 'x-access-token: TOKEN_DE_AUTENTICACAO'
```
> [!NOTE]
> Substitua `http://sua_api.com/rota_protegida` pelo URL da rota protegida que você deseja acessar e `TOKEN_DE_AUTENTICACAO` pelo token de autenticação válido para acessar essa rota.

## 📦 Implantação

Para implantar esta aplicação, você pode considerar duas abordagens populares:

1. **Implantação em Servidor de Nuvem:**

   - Esta abordagem envolve hospedar a sua aplicação em um provedor de serviços de nuvem, como Vercel, Heroku ou Netlify.
   - Você pode fazer o upload do código fonte da sua aplicação para a plataforma de hospedagem e seguir as instruções fornecidas pela plataforma para implantar a aplicação.
   - Essas plataformas geralmente oferecem integração contínua, escalabilidade automática e gerenciamento simplificado de infraestrutura, o que facilita o processo de implantação e gerenciamento da aplicação.

2. **Implantação em Container Docker**:
   - Nesta abordagem, você empacota sua aplicação e suas dependências em um contêiner Docker, que pode ser implantado em qualquer ambiente compatível com Docker.
   - É necessário criar um arquivo de configuração Dockerfile para a aplicação e construir a imagem do contêiner.
   - Depois de construir a imagem, você pode implantar o contêiner em qualquer host que execute o Docker Engine, como servidores físicos, máquinas virtuais ou clusters de contêineres gerenciados.
   - O uso de contêineres Docker oferece portabilidade, consistência de ambiente e isolamento de recursos, o que pode ser vantajoso para ambientes de desenvolvimento, teste e produção.

> [!NOTE]
> Cada abordagem tem suas próprias vantagens e desvantagens, e a escolha entre elas dependerá das necessidades específicas do seu projeto, dos requisitos de escalabilidade, do orçamento e da preferência pessoal. Certifique-se de avaliar cuidadosamente cada opção antes de decidir qual é a melhor para sua aplicação.

## 📄 Licença
![License: MIT](https://img.shields.io/github/license/prpires66/nlw-esports?style=for-the-badge)

Copyright © 2024 [Paulo Pires](https://github.com/prpires66).

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](https://github.com/prpires66/bookstore-front/blob/main/LICENSE) para obter mais detalhes.

## 🙏 Agradecimentos

> - Agradeço ao IFES - Instituto Federal do Espírito Santo pelo apoio através do projeto Reprograme-se, assim como professores e colegas.
> - Contribuições e sugestões são sempre bem-vindas.
> - Muito obrigado! :blue_heart:
