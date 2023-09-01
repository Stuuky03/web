import { AuthContext } from '@/contexts/Authentication/AuthContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { signUpFormSchema } from '../utils/signupSchema'
import { z } from 'zod'

type FormData = z.infer<typeof signUpFormSchema>

export const useHandleSignup = () => {
  const { signUp } = useContext(AuthContext);
  const { register, setError, handleSubmit, formState } = useForm<FormData>({
    mode: 'onSubmit',
    resolver: zodResolver(signUpFormSchema)
  })

  const handleSignUp = async ({ username, email, password }: FormData) => {
    const response = await signUp({ username, email, password })

    setError("email", {
      type: "manual",
      message: response.data.error
    })
  }

  return { handleSignUp, formMethods: { register, handleSubmit, formState } }
}