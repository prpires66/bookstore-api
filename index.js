// INSTALAÇÃO BIBLIOTECAS/MÓDULOS
const dotenv = require("dotenv").config();
const express = require("express");
const favicon = require("express-favicon");

const app = express();
const PORT = process.env.PORT || 3010;

const database = require("./api/db/db");
const routes = require("./api/routes/routes");
const jwt = require("jsonwebtoken");
const pg = require("pg");

app.use(favicon(__dirname + "/public/images/favicon.png"));

//CODIFICAÇÃO JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ARQUIVOS ESTÁTICOS
app.use("/static", express.static(__dirname + "/public"));

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
