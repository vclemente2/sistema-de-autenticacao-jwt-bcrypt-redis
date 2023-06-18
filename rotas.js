const posts = require("./src/posts");
const usuarios = require("./src/usuarios");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Olá pessoa!");
  });

  usuarios.rotas(app);
  posts.rotas(app);
};
