import "./MakeYourQuestion.scss"

import { montserrat } from "@/utils/fonts/font"
import Image from "next/image"
import questionIcon from "@/assets/icons/question-icon.svg"
import Link from "next/link"

const MakeYourQuestion = () => {
  return (
    <div className={`${montserrat.className} make-your-question`}>
      <h3>Está com dificuldade?</h3>
      <h5>Pesquise por seu problema ou escreva sua
        dúvida agora mesmo!</h5>
      <Link href="/new/question">
        <span>
          <Image src={questionIcon} height={24} width={24} alt="Faça sua pergunta!" />
          <p>Faça sua pergunta!</p>
        </span>
      </Link>
    </div>
  )
}

export default MakeYourQuestion