import { z } from "zod";

export const noticiaSchema = z.object({
  titulo: z
    .string()
    .min(3, "titulo deve ter no minimo 3 letras")
    .max(70, "titulo deve ter no maximo 70 caracteres"),
  conteudo: z.string().min(10),
  categoria: z.string(),
});

export type NoticiaFormData = z.infer<typeof noticiaSchema>;
