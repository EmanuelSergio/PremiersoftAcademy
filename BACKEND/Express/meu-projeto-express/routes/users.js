const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ users: ["Alice", "Bob", "Charlie"] });
});

//rota para pegar personalizados

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`id do usuario ${userId}`);
});

//rota para criar

router.post("/", (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: "foie", user: newUser });
});

module.exports = router;
