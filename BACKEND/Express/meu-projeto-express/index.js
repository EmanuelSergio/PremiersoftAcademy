const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);
const PORT = 3000;

//rota principal

//rota para obter informacoes de usuarios

app.use((req, res, next) => {
  console.log(`${req.method} e ${req.url}`);
  next();
});

//rota padrao

app.listen(PORT, () => {
  console.log(`server rodando na ${PORT}`);
});
