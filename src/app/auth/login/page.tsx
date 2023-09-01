import { montserrat } from '@/utils/fonts/font'
import './style.scss'
import Image from "next/image"
import LoginForm from './components/LoginForm'

export default function login() {
  return (
    <main>
      <Image src="/assets/Logotype.svg" alt='Stuuky' width={166} height={50}></Image>
      <div className='main-container'>
        <div className={`${montserrat.className} title-container`}>
          <h1>Bem vindo de volta!</h1>
          <h5>Entre agora para completar seus desafios diários!!</h5>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
