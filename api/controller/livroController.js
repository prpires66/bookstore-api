const Livro = require("../model/livroModel");

module.exports = class livroController {
  //CREATE

  static async LivroCreate(req, res) {
    let titulo = req.body.titulo;
    let autor = req.body.autor;
    let preco = req.body.preco;
    let linkImagem = req.body.linkImagem;

    const livro = {
      titulo: titulo,
      autor: autor,
      preco: preco,
      linkImagem: linkImagem,
    };
    await Livro.create(livro)
      .then(() => {
        res.json({ message: "Livro cadastrado com sucesso!" });
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
  //READ - LISTAR
  static async LivroListar(req, res) {
    const idLivro = req.params.id;
    if (idLivro) {
      const livro = await Livro.findOne({
        where: { idLivro: idLivro },
      })
        .then((livro) => {
          res.json(livro);
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
      const livro = await Livro.findAll({ raw: true })
        .then((livro) => {
          res.json(livro);
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
  //UPDATE
  static async LivroUpdate(req, res) {
    const idLivro = req.params.id;
    let titulo = req.body.titulo;
    let autor = req.body.autor;
    let preco = req.body.preco;
    let linkImagem = req.body.linkImagem;
    const livro = {
      titulo: titulo,
      autor: autor,
      preco: preco,
      linkImagem: linkImagem,
    };
    await Livro.update(livro, { where: { idLivro: idLivro } })
      .then(() => {
        res.json({
          message: "Cadastro atualizado com sucesso! ",
          dados: livro,
        });
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
  //DELETE
  static async LivroDelete(req, res) {
    const idLivro = req.params.id;
    await Livro.destroy({ where: { idLivro: idLivro } })
      .then(() => {
        res.json({ message: "Livro excluído com sucesso!" });
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
};
