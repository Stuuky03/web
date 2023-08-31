import { AuthContext } from '@/contexts/Authentication/AuthContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { signUpUserFormSchema } from '../utils/signupSchema'

type FormData = {
  username: string,
  email: string,
  password: string
}

export const useSignupForm = () => {
  const { signUp } = useContext(AuthContext);
  const { register, setError, handleSubmit, formState } = useForm<FormData>({
    mode: 'onSubmit',
    resolver: zodResolver(signUpUserFormSchema)
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