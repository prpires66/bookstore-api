const Sequelize = require("sequelize");
const database = require("../db/db");

const Livro = database.define(
  "livro",
  {
    idLivro: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    autor: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    preco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    linkImagem: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { database, modelname: "livro", tableName: "livros" },
);
module.exports = Livro;
