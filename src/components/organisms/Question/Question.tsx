import Button from "@/components/atoms/Button/Button"
import "./Question.scss"
import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage"
import { montserrat } from "@/utils/fonts/font"

type QuestionProps = {
  username: string,
  content: string,
  course: string
}

const Question = ({ username, content, course }: QuestionProps) => {
  return (
    <div className='question' >
      <div className='question-header' >
        <ProfileImage studentUsername="albberrrt" height={32} width={32} />
        <div className={`${montserrat.className} info`}>
          <span className="course">{course}</span>
          <span className="dot">•</span>
          <span className="username">{username}</span>
          <span className="dot">•</span>
          <span className="date">alguns segundos atrás</span>
        </div>
      </div>
      <div className='question-content' >
        <p>{content}</p>
      </div>
      <div className='question-button' >
        <button className={montserrat.className}>Responder</button>
      </div>
    </div>
  )
}

export default Question