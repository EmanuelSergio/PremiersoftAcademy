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

  async buscarPorId(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      if (isNaN(id)) {
        throw new Error("ID invalido");
      }

      const result = await pool.query("select * from livros where id = $1", [
        id,
      ]);
      res.json(result.rows[0]);
    } catch (error) {
      console.error("erro ao buscar o livro pelo id");
      res.status(500).json({ erro: "erro ao buscar o livro pelo id" });
    }
  },

  async editarLivro(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      if (isNaN(id)) {
        throw new Error("ID INVALIDO");
      }

      const { titulo, autor, ano_publicacao } = req.body;

      const result = await pool.query(
        "update livros set titulo = $1, autor = $2, ano_publicacao = $3 where id = $4",
        [titulo, autor, ano_publicacao, id]
      );

      res
        .status(200)
        .json({ message: "livro atualizado com sucesso", livro: result });
    } catch (error) {
      console.error("error ao atualizar o livro ", error);
      res.status(500).json({ error: "erro interno ao atualizar" });
    }
  },

  async deletar(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      throw new Error("ID INVALIDO");
    }

    try {
      const result = await pool.query("delete from livros where id = $1", [id]);
      res.status(200).json({ message: "item deletado" });
    } catch (error) {
      console.error("errro ao deletar o item", error);
      res.status(500).json({ error: "erro ao deletar o item" });
    }
  },
};
