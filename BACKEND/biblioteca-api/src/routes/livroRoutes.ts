import { Request, Response, Router } from "express";
import { livroController } from "../controllers/livroController";

const router = Router();

// Define as rotas e conecta com as funções do controller
router.post("/livros", livroController.criar);
router.get("/livros", livroController.listar);
router.get("/livros/:id", (req: Request, res: Response) => {
  livroController.buscarPorId(req, res);
});
router.put("/livros/:id", (req: Request, res: Response) => {
  livroController.editarLivro(req, res);
});

export default router;
