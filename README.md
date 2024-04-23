# Bookstore API

Este projeto consiste em uma API para um sistema de cadastro de livros, desenvolvido como parte do módulo 2024-F2M: Node.js, semana 3, do programa Reprograme-se, oferecido pelo IFES - Instituto Federal do Espírito Santo.

## 🚀 Descrição

Esta API permite o gerenciamento de funcionários e livros em um sistema de livraria. Ela inclui funcionalidades como cadastro, listagem, atualização e exclusão de funcionários e livros. Utiliza autenticação JWT para proteger as rotas de funcionários e livros.

## ℹ️ Reprograme-se

O Reprograme-se é um programa oferecido pelo IFES - Instituto Federal do Espírito Santo, com o objetivo de qualificar jovens e adultos para o mercado de trabalho na área de Tecnologia da Informação (TI). Para mais informações, visite [o site oficial do Reprograme-se](https://reprograme-se.org.br/).

## 🔧 Instalação e Uso

1. **Clonagem do repositório:** Clone este repositório para o seu ambiente local usando o comando:

   ```
   git clone https://github.com/prpires66/bookstore-api.git
   ```

2. **Instalação de dependências:** Navegue até o diretório do projeto e instale as dependências usando o comando:

   ```
   npm install
   ```

3. **Configuração do ambiente:** Antes de executar a API, certifique-se de configurar as seguintes variáveis de ambiente:

- **SECRET:** Chave secreta utilizada pelo JWT para assinar tokens de autenticação.
- **POSTGRES_URL:** URL de conexão com o banco de dados PostgreSQL.

Você pode definir essas variáveis de ambiente em um arquivo `.env` na raiz do projeto ou configurá-las diretamente no ambiente de execução, dependendo das suas preferências e ambiente de desenvolvimento.

4. **Execução da API:** Inicie o servidor da API usando o comando:

   ```
   npm start
   ```

5. **Utilização da API:** A API estará disponível em `http://localhost:3000`. Você pode enviar requisições HTTP para as rotas especificadas abaixo.

## ⚙️ Rotas da API

### Funcionários

- **POST /login:** Rota para login de funcionários.
- **POST /funcionarios:** Rota para cadastrar um novo funcionário.
- **GET /funcionarios/:id?:** Rota para listar todos os funcionários ou um funcionário específico.
- **PUT /funcionarios/:id:** Rota para atualizar os dados de um funcionário.
- **DELETE /funcionarios/:id:** Rota para excluir um funcionário.

### Livros

- **POST /livros/Cadastrar:** Rota para cadastrar um novo livro.
- **PUT /livros/:id:** Rota para atualizar os dados de um livro.
- **DELETE /livros/:id:** Rota para excluir um livro.
- **GET /livros/:id?:** Rota para listar todos os livros ou um livro específico.

Lembre-se de substituir `:id` pelo ID correspondente ao funcionário ou livro desejado nas rotas que exigem esse parâmetro.

## ㊙️ Acesso às Rotas Protegidas

Para acessar as rotas protegidas da API, você precisa incluir o token de autenticação no header da requisição. No caso do Postman ou programas similares, você deve adicionar o header `x-access-token` com o valor do token na requisição.

Ao enviar uma requisição para uma rota protegida, certifique-se de incluir esse header para garantir o acesso autorizado.

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE.md](https://github.com/prpires66/bookstore-api/blob/main/LICENSE) para obter mais detalhes.
