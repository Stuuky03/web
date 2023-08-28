import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signUpUserFormSchema } from '../utils/signupSchema'
import { api } from '@/lib/api/axios'

type FormData = {
  username: string,
  email: string,
  password: string
}

export const useSignupForm = () => {
  const handleSignUp = async ({ username, email, password }: FormData) => {
    try {
      const response = await api.post("/user/create", {
        username,
        email,
        password
      })
      console.log(`response: ${JSON.stringify(response.data)}`);
    } catch (err) {
      console.log(err)
    }
  }

  return { handleSignUp }
}
