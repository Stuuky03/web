import { AuthContext } from '@/contexts/Authentication/AuthContext'
import { useContext } from 'react'

type FormData = {
  username: string,
  email: string,
  password: string
}

export const useSignupForm = () => {
  const { signUp } = useContext(AuthContext);

  const handleSignUp = async ({ username, email, password }: FormData) => {
    const response = await signUp({ username, email, password })
  }

  return { handleSignUp }
}
