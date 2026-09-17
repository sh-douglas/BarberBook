import { z } from "zod";

const phoneSchema = z
  .string()
  .trim()
  .regex(/^[\d\s()-]+$/, {
    message: "O campo telefone contém caracteres inválidos.",
  })
  .transform((value) => value.replace(/\D/g, ""))
  .refine((value) => value.length === 10 || value.length === 11, {
    message: "O telefone deve conter 10 ou 11 dígitos.",
  });

export { phoneSchema };
