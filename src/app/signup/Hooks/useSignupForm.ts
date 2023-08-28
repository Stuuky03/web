import { AuthContext } from '@/contexts/Authentication/AuthContext'
import { useContext, useEffect } from 'react'

type FormData = {
  username: string,
  email: string,
  password: string
}

export const useSignupForm = () => {
  const { signUp } = useContext(AuthContext);

  const handleSignUp = async ({ username, email, password }: FormData) => {
    try {
      const response = await signUp({ username, email, password })
      return response.data

      useEffect(() => {

      }[])
    } catch (err) {
      console.log("Error: " + err)
    }

  }
  return { handleSignUp }
}