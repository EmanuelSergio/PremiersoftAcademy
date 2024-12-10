import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres.")
    .max(50, "o nome pode ter no maximo 50 caracteres"),
});
