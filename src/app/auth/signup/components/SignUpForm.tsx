'use client'

import Link from 'next/link'
import Image from 'next/image'

import './SignUpForm.scss'
import Input from '@/components/atoms/Input/Input'
import Button from '@/components/atoms/Button/Button'
import linkArrowImage from '@/assets/icons/small-arrow.svg'

import { useHandleSignup } from '../Hooks/useHandleSignup'

type FormData = {
  username: string,
  email: string,
  password: string
}

const SignUpForm = () => {
  const { handleSignUp, formMethods } = useHandleSignup();
  const { register, handleSubmit, formState } = formMethods;
  const { errors } = formState;

  const onSubmit = async (userData: FormData) => {
    console.log("Submitting form!!")
    await handleSignUp(userData)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='input-container'>
        <Input
          {...register("username")}
          placeholder='Nome de usuário'
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
        <Link href="/auth/login">Fazer Login
          <Image src={linkArrowImage} width={12} height={7} alt='Login Arrow' />
        </Link>
      </h6>
    </form>
  )
}

export default SignUpForm;