const redis = require("redis");
const client = redis.createClient({
  host: "localhost",
  port: 6379
  // password: 'sua-senha-redis', // descomente e insira a senha se necessário
});

client.connect();

client.on("connect", () => {
  console.log("Conectado ao servidor Redis");
});

client.on("error", (error) => {
  console.error("Erro na conexão com o servidor Redis:", error);
});

module.exports = client;
