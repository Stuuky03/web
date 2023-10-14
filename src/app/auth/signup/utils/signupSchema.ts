import { z } from 'zod'

const signUpFormSchema = z.object({
  firstName: z.string()
    .nonempty('Digite o seu nome')
    .trim(),

  lastName: z.string()
    .nonempty('Digite o seu sobrenome')
    .trim(),

  username: z.string()
    .nonempty('Digite o username')
    .min(3, 'Nome de usuário deve ter no mínimo 3 dígitos')
    .max(32, 'Nome de usuário deve ter até no máximo 32 dígitos')
    .trim(),

  email: z.string()
    .nonempty('Digite o email')
    .email('Digite um email válido')
    .trim(),

  password: z.string()
    .nonempty('Digite a senha')
    .min(6, 'Senha deve ter no mínimo 6 dígitos')
    .max(80, 'Senha deve ter até 80 dígitos')
    .trim(),

})

export { signUpFormSchema }