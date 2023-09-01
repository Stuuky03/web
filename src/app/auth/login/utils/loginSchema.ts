import { z } from "zod";

const loginFormSchema = z.object({
  emailOrUsername: z.string()
    .nonempty('Desculpe, não encontramos sua conta')
    .min(3, 'Desculpe, não encontramos sua conta.')
    .max(32, 'Desculpe, não encontramos sua conta.')
    .trim(),
  password: z.string()
    .nonempty('Desculpe, não encontramos sua conta.')
    .trim(),
})

export { loginFormSchema }