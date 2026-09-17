import { z } from "zod";
import { phoneSchema } from "./common/phone.schema.js";

const createCustomerSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "O campo nome deve conter no minimo 2 caracteres.")
    .max(50, "O campo nome deve conter no máximo 50 caracteres."),
  lastName: z
    .string()
    .trim()
    .min(2, "O campo sobrenome deve conter no minimo 2 caracteres.")
    .max(50, "O campo sobrenome deve conter no máximo 50 caracteres."),
  phone: phoneSchema,
});

type CreateCustomerInput = z.infer<typeof createCustomerSchema>;

export { createCustomerSchema, type CreateCustomerInput };
