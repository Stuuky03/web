'use client'

import Link from 'next/link'
import Image from 'next/image'

import './Form.scss'
import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import linkArrowImage from '@/assets/icons/small-arrow.svg'

import { useForm } from 'react-hook-form'
import { signUpUserFormSchema } from '../utils/signupSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignupForm } from '../Hooks/useSignupForm'
import { AuthContext } from '@/contexts/Authentication/AuthContext'
import { useContext, useEffect } from 'react'
// import { useSignupForm } from '../Hooks/useSignupForm'

type FormData = {
  username: string,
  email: string,
  password: string
}

const Form = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onSubmit',
    resolver: zodResolver(signUpUserFormSchema)
  })

  const { signUp } = useContext(AuthContext);

  const handleSignUp = async ({ username, email, password }: FormData) => {
    try {
      const response = await signUp({ username, email, password })

      setError("email", {
        type: "manual",
        message: response.data.message
      })
    } catch (err) {
      console.log("Error: " + err)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <div className='input-container'>
        <Input
          {...register("username")}
          placeholder='Username'
          id='username'
          errorMessage={errors.username?.message}
        />
        <Input
          {...register("email")}
          placeholder='E-mail'
          id='email'
          errorMessage={errors.email?.message}
        />
        <Input
          {...register("password")}
          placeholder='Senha'
          id='password'
          errorMessage={errors.password?.message}
          type='password'

        />
      </div>

      <span className='burocratic-info'>Ao criar uma conta, você concorda com a <span>Política de Privacidade</span> e
        com os <span>Termos de Uso</span> da Stuuky.</span>

      <div className='submit-div'>
        <Button name='submit' value='Próximo' />
      </div>
      <h6 className='login-link'>Já é usuário?
        <Link href="/login">Fazer Login
          <Image src={linkArrowImage} width={12} height={7} alt='Login Arrow' />
        </Link>
      </h6>
    </form>
  )
}

export default Form;