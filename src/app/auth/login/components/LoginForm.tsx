"use client"

import './LoginForm.scss'
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Link from "next/link";
import Image from "next/image"
import linkArrowImage from '@/assets/icons/small-arrow.svg'

import { useHandleLogin } from '../Hooks/useHandleLogin';

type FormData = {
  emailOrUsername: string,
  password: string
}

const LoginForm = () => {
  const { handleLogin, formMethods } = useHandleLogin();
  const { register, handleSubmit, formState } = formMethods;
  const { errors } = formState;

  const onSubmit = async (userData: FormData) => {
    handleLogin(userData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='input-container'>
        <Input
          {...register("emailOrUsername")}
          placeholder="Nome de usuário ou Email"
          id="emailOrUsername"
          errorMessage={errors.emailOrUsername?.message}
        />
        <Input
          {...register("password")}
          placeholder='Senha'
          id='password'
          errorMessage={errors.password?.message}
          type='password'
        />
      </div>

      <div className='submit-div'>
        <Button name="submit" value='Entrar' />
      </div>
      <h6 className='login-link'>Ainda não criou sua conta?
        <Link href="/auth/signup">Fazer Cadastro
          <Image src={linkArrowImage} width={12} height={7} alt='Login Arrow' />
        </Link>
      </h6>
    </form>
  )
}

export default LoginForm;