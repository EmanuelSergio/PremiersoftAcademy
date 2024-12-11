import { Request, Response } from "express";
import { User } from "../models/userModel";

// Tipagem para o corpo da requisição
export interface CreateUserRequest extends Request {
  body: {
    name: string;
    email: string;
  };
}

const users: User[] = [];

export const userController = {
  getUsers: (req: Request, res: Response) => {
    res.json({ message: "listando usuarios" });
  },

  createUser: (req: Request, res: Response): Response => {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "some parameter is incorrect" });
    }

    const newUser: User = {
      id: users.length + 1, // Simula um ID
      name,
      email,
      ativo: true,
    };

    users.push(newUser);
    return res.status(201).json({ message: "created", user: newUser });
  },
};
