import Button from "./atoms/Button/Button"
import "./Question.scss"

type QuestionProps = {
  username: string,
  content: string,
  course: string
}

const Question = ({ username, content, course }: QuestionProps) => {
  return (
    <div className='question' >
      <div className='question-header' >
        <span></span>
        <div className="info">
          <h5>{username}</h5>
          <h6>{course}</h6>
        </div>
      </div>
      <div className='question-content' >
        <p>{content}</p>
      </div>
      <div className='question-button' >
        <Button name='sendButton' value='Responder' />
      </div>
    </div>
  )
}

export default Question