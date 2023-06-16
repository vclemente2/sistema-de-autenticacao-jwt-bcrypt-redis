const Usuario = require("./usuarios-modelo");
const { InvalidArgumentError, InternalServerError } = require("../erros");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  adiciona: async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
      const usuario = new Usuario({
        nome,
        email
      });

      await usuario.salvaSenhaHash(senha);
      await usuario.adiciona();

      res.status(201).json();
    } catch (erro) {
      if (erro instanceof InvalidArgumentError) {
        res.status(422).json({ erro: erro.message });
      } else if (erro instanceof InternalServerError) {
        res.status(500).json({ erro: erro.message });
      } else {
        res.status(500).json({ erro: erro.message });
      }
    }
  },

  lista: async (req, res) => {
    const usuarios = await Usuario.lista();
    res.json(usuarios);
  },

  deleta: async (req, res) => {
    const usuario = await Usuario.buscaPorId(req.params.id);
    try {
      await usuario.deleta();
      res.status(200).send();
    } catch (erro) {
      res.status(500).json({ erro: erro });
    }
  },

  loga: async (req, res) => {
    const { email, senha } = req.body;

    try {
      if (!email || !senha)
        throw new InvalidArgumentError(
          "Os campos email e senha são obrigatórios"
        );

      const usuario = await Usuario.buscaPorEmail(email);
      if (!usuario) throw new InvalidArgumentError("E-mail ou senha inválidos");

      const senhaValida = await bcrypt.compare(senha, usuario.senhaHash);
      if (!senhaValida)
        throw new InvalidArgumentError("E-mail ou senha inválidos");

      const token = jwt.sign({ id: usuario.id }, process.env.JWT_PASS, {
        expiresIn: "8h"
      });

      res.set("Authorization", token);
      return res.status(204).send();
    } catch (erro) {
      if (erro.name === "InvalidArgumentError")
        return res.status(400).json({ erro: erro.message });
      return res.status(500).json({ erro: erro.message });
    }
  }
};
