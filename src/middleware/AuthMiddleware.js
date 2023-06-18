const jwt = require("jsonwebtoken");
const Usuario = require("../usuarios/usuarios-modelo");
const blacklist = require("../redis/manipula-blacklist");
const { InvalidArgumentError } = require("../erros");

class AuthMiddleware {
  static async verificaToken(req, res, next) {
    const { authorization } = req.headers;

    try {
      const token = authorization.split(" ")[1];

      const { id } = jwt.verify(token, process.env.JWT_PASS);
      const estaNaBlacklist = await blacklist.contemToken(token);
      if (estaNaBlacklist) throw new InvalidArgumentError("Token expirado.");

      const usuario = await Usuario.buscaPorId(Number(id));

      req.token = token;
      req.usuario = usuario;
      next();
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }
}

module.exports = AuthMiddleware;
