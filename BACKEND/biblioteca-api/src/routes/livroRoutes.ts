import { Router } from "express";
import { livroController } from "../controllers/livroController";

const router = Router();

// Define as rotas e conecta com as funções do controller
router.post("/livros", livroController.criar);
router.get("/livros", livroController.listar);

export default router;
