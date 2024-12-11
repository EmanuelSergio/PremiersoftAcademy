const express = require("express");
const app = express();
const PORT = 3000;

//rota principal

//rota para obter informacoes de usuarios

app.get("/", (req, res) => {
  res.send("welcome to express.js");
});

//rota padrao

app.get("/users", (req, res) => {
  res.json({ users: ["Alice", "Bob", "Charlie"] });
});

//rota para pegar personalizados

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`id do usuario ${userId}`);
});

app.listen(PORT, () => {
  console.log(`server rodando na ${PORT}`);
});
