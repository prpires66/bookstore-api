// BIBLIOTECAS/MODULOS UTILIZADOS
const Sequelize = require("sequelize");

//CRIANDO A CONFIGURAÇÃO DO BANCO DE DADOS

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: "postgres",
});

//TRATANDO POSSÍVEIS ERROS E AUTENTICANDO NO BANCO
try {
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso!");
} catch (erro) {
  console.log("Erro ao conectar ao banco", erro);
}

module.exports = sequelize;
