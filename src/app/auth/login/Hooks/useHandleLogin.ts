import { AuthContext } from "@/contexts/Authentication/AuthContext"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { loginFormSchema } from "../utils/loginSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

type LoginData = z.infer<typeof loginFormSchema>

export const useHandleLogin = () => {
  const { login } = useContext(AuthContext)
  const { register, setError, handleSubmit, formState } = useForm<LoginData>({
    mode: 'onSubmit',
    resolver: zodResolver(loginFormSchema)
  })

  const handleLogin = async ({ emailOrUsername, password }: LoginData) => {
    login({ emailOrUsername, password })
  }

  return { handleLogin, formMethods: { register, handleSubmit, formState } }
}