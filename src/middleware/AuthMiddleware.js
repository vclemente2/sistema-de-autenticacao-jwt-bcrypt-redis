const jwt = require("jsonwebtoken");
const Usuario = require("../usuarios/usuarios-modelo");

class AuthMiddleware {
  static async verificaToken(req, res, next) {
    const { authorization } = req.headers;

    try {
      const token = authorization.split(" ")[1];

      const { id } = jwt.verify(token, process.env.JWT_PASS);

      const usuario = await Usuario.buscaPorId(id);

      req.usuario = usuario;
      next();
    } catch (erro) {
      console.log(erro);
      return res.json(erro);
    }
  }
}

module.exports = AuthMiddleware;
