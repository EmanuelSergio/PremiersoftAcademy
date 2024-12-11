import { Router } from "express";
import { Request, Response } from "express";
import { userController } from "../controllers/userController";

const router = Router();

// Rota para obter a lista de usuários
router.get("/", userController.getUsers);

// Rota para criar um novo usuário
router.post("/", (req: Request, res: Response) => {
  userController.createUser(req, res);
});

export default router;
