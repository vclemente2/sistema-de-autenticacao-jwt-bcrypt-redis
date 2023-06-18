const AuthMiddleware = require("../middleware/AuthMiddleware");
const postsControlador = require("./posts-controlador");

module.exports = (app) => {
  app.use(AuthMiddleware.verificaToken);
  app
    .route("/post")
    .get(postsControlador.lista)
    .post(postsControlador.adiciona);
};
