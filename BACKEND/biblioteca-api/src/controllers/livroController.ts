import { Request, Response } from "express";
import { pool } from "../config/database";

export const livroController = {
  async criar(req: Request, res: Response) {
    try {
      const { titulo, autor, ano_publicacao } = req.body;

      const result = await pool.query(
        "INSERT INTO livros (titulo, autor, ano_publicacao) values ($1, $2, $3) returning *",
        [titulo, autor, ano_publicacao]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error("erro ao criar o livro ", error);
      res.status(500).json({ erro: "erro ao criar o livro" });
    }
  },

  async listar(req: Request, res: Response) {
    try {
      const result = await pool.query("select * from livros");
      res.json(result.rows);
    } catch (error) {
      console.error("erro ao listar os livros");
      res.status(500).json({ erro: "erro ao listar os livros" });
    }
  },
};
