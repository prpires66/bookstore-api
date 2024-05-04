const Sequelize = require("sequelize");

let sequelize;

// Verifica se a variável de ambiente DB_TYPE é válida
if (process.env.DB_TYPE === "sqlite") {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./bookstoreDB.sqlite",
  });
} else if (process.env.DB_TYPE === "postgres") {
  sequelize = new Sequelize(process.env.POSTGRES_URL, {
    dialect: "postgres",
  });
} else {
  console.error("Valor inválido para variavel de ambiente DB_TYPE. Use 'sqlite' ou 'postgres'.");
  process.exit(1); // Encerra o processo com código de erro
}

// Função para autenticar e tratar erros
async function authenticateDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Banco de dados conectado com sucesso!");
  } catch (error) {
        const mensagem =
          error.response.status + " - " + error.response.data.message;
        const descricao = error.config.url;
        res.render("mensagem", {
          mensagem: mensagem,
          descricao: descricao,
          layout: "main_log_false",
        });
  }
}

// Chama a função para autenticar
authenticateDatabase();

module.exports = sequelize;
