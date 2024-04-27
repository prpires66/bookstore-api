// INSTALAÇÃO BIBLIOTECAS/MÓDULOS
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3010;
const database = require("./db/db");
const routes = require("./routes/routes");
const jwt = require("jsonwebtoken");
const pg = require("pg");

//CODIFICAÇÃO JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROTA PRINCIPAL
app.use("/", routes);
try {
  database.sync().then(() => {});
} catch (erro) {
  console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro);
}
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
