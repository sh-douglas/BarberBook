import { z } from "zod";

const createServiceSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "O campo nome deve conter no minimo 2 caracteres.")
    .max(50, "O campo nome deve conter no máximo 50 caracteres."),
  description: z
    .string()
    .trim()
    .min(10, "O campo descrição deve conter no minimo 10 caracteres.")
    .max(100, "O campo descrição deve conter no máximo 100 caracteres.")
    .optional(),
  price: z
    .string()
    .trim()
    .min(1, "O campo preço não pode estar vazio.")
    .regex(/^(0|[1-9]\d{0,7})(\.\d{1,2})?$/, {
      message:
        "Deve ser um número decimal positivo com, no máximo, 8 algarismos inteiros e 2 casas decimais.",
    })
    .refine((val) => parseFloat(val) > 0, {
      message: "O preço deve ser maior que 0.",
    }),
  duration: z
    .number("A duração deve ser um número.")
    .int("A duração deve ser informada em minutos inteiros.")
    .positive("A duração deve ser maior que 0 minutos."),
});

type CreateServiceInput = z.infer<typeof createServiceSchema>;

export { createServiceSchema, type CreateServiceInput };
