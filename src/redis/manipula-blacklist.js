const client = require("./blacklist");
const jwt = require("jsonwebtoken");

module.exports = {
  adiciona: async (token) => {
    const dataExpiracao = jwt.decode(token).exp;
    await client.set(token, "");
    client.expireAt(token, dataExpiracao);
  },
  contemToken: async (token) => {
    const contemToken = await client.exists(token);

    return contemToken === 1;
  }
};
