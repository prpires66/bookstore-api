const Funcionario = require("../model/funcionarioModel");
const jwt = require("jsonwebtoken");

module.exports = class funcionarioController {
  //CREATE - Cadastrar Funcionário
  static async FuncionarioCreate(req, res) {
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;
    const funcionario = { nome: nome, email: email, senha: senha };
    await Funcionario.create(funcionario)
      .then(() => {
        res.json({ message: "Usuário cadastrado com sucesso!" });
      })
      .catch((error) => {
        const mensagem =
          error.response.status + " - " + error.response.data.message;
        const descricao = error.config.url;
        res.render("mensagem", {
          mensagem: mensagem,
          descricao: descricao,
          layout: "main_log_false",
        });
      });
  }

  //READ - Listar Funcionário
  static async FuncionarioListar(req, res) {
    const idFuncionario = req.params.id;
    if (idFuncionario) {
      await Funcionario.findOne({
        where: { idFuncionario: idFuncionario },
      })
        .then((funcionario) => {
          res.json(funcionario);
        })
        .catch((error) => {
          const mensagem =
            error.response.status + " - " + error.response.data.message;
          const descricao = error.config.url;
          res.render("mensagem", {
            mensagem: mensagem,
            descricao: descricao,
            layout: "main_log_true",
          });
        });
    } else {
      await Funcionario.findAll({ raw: true })
        .then((funcionario) => {
          res.json(funcionario);
        })
        .catch((error) => {
          const mensagem =
            error.response.status + " - " + error.response.data.message;
          const descricao = error.config.url;
          res.render("mensagem", {
            mensagem: mensagem,
            descricao: descricao,
            layout: "main_log_true",
          });
        });
    }
  }

  //UPDATE - Atualizar Funcionário
  static async FuncionarioUpdate(req, res) {
    const idFuncionario = req.params.id;
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;
    const funcionario = {
      nome: nome,
      email: email,
      senha: senha,
    };
    await Funcionario.update(funcionario, {
      where: { idFuncionario: idFuncionario },
    })
      .then(() => {
        res.json({ message: "Funcionário atualizado com sucesso!" });
      })
      .catch((error) => {
        const mensagem =
          error.response.status + " - " + error.response.data.message;
        const descricao = error.config.url;
        res.render("mensagem", {
          mensagem: mensagem,
          descricao: descricao,
          layout: "main_log_true",
        });
      });
  }

  //DELETE - Excluir Funcionário
  static async FuncionarioDelete(req, res) {
    const idFuncionario = req.params.id;
    await Funcionario.destroy({ where: { idFuncionario: idFuncionario } })
      .then(() => {
        res.json({ message: "Usuário excluído com sucesso!" });
      })
      .catch((error) => {
        const mensagem =
          error.response.status + " - " + error.response.data.message;
        const descricao = error.config.url;
        res.render("mensagem", {
          mensagem: mensagem,
          descricao: descricao,
          layout: "main_log_true",
        });
      });
  }

  //Verifica o login do usuário
  static async FuncionarioLogin(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;
    const dados = {
      email: email,
      senha: senha,
    };
    //Credenciais para adminstração e testes -> usuario: admin, senha: 1234
    //Remover esse trecho em produção
    if (email == "admin" && senha == "1234") {
      const payload = {
        sub: 0,
        name: "Administrador",
        email: "admin@email.com",
        roles: ["admin", "user"],
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 1800,
      };
      const token = jwt.sign(payload, process.env.SECRET);
      return res.json({ auth: true, token: token, nome: payload.name });
    }
    //----------------------------------------------------------------------
    await Funcionario.findOne({
      where: { email: email, senha: senha },
    })
      .then((funcionario) => {
        if (funcionario != undefined) {
          const payload = {
            sub: funcionario.idFuncionario,
            name: funcionario.nome,
            email: funcionario.email,
            roles: ["admin", "user"],
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 1800,
          };

          const token = jwt.sign(payload, process.env.SECRET);
          return res.json({ auth: true, token: token, nome: payload.name });
        } else {
          res.status(401).json({ message: "Credenciais inválidas!" });
        }
      })
      .catch((error) => {
        const mensagem =
          error.response.status + " - " + error.response.data.message;
        const descricao = error.config.url;
        res.render("mensagem", {
          mensagem: mensagem,
          descricao: descricao,
          layout: "main_log_false",
        });
      });
  }
};
