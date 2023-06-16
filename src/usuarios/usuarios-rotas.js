const AuthMiddleware = require("../middleware/AuthMiddleware");
const usuariosControlador = require("./usuarios-controlador");

module.exports = (app) => {
  app.route("/usuario/login").post(usuariosControlador.loga);
  app.route("/usuario").post(usuariosControlador.adiciona);

  app.use(AuthMiddleware.verificaToken);

  app.route("/usuario").get(usuariosControlador.lista);

  app.route("/usuario/:id").delete(usuariosControlador.deleta);
};
