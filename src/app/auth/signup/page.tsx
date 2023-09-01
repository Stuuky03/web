import Image from 'next/image'

import './style.scss'
import SignUpForm from './components/SignUpForm'
import SaturnPlanet from '@/components/canvas/Saturn/Saturn'
import Planet from '@/components/canvas/Planet/Planet'
import Alert from "@/components/atoms/Alert/Alert"
import { montserrat } from '@/utils/fonts/font'

export default function signUp() {
  return (
    <main>
      <Image src="/assets/Logotype.svg" alt='Stuuky' width={166} height={50}></Image>
      <div className='main-container'>
        <div className={`${montserrat.className} title-container`}>
          <h1>Cadastre-se e comece a <br></br> tirar dúvidas agora mesmo!</h1>
          <h5>Crie seu perfil Stuuky para fazer e responder perguntas de suas matérias preferidas, ganhar pontos e subir no ranking de sua escola</h5>
        </div>
        <SignUpForm />
      </div>
      <Alert id="error-alert" message="Desculpe, não encontramos sua conta" />
    </main>
  )
}
