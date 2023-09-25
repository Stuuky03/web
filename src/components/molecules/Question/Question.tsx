import Button from "@/components/atoms/Button/Button"
import "./Question.scss"
import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage"
import { montserrat } from "@/utils/fonts/font"

type QuestionProps = {
  student: string,
  title: string,
  content: string,
  course: string,
  tags: {
    __typename?: "Tag" | undefined,
    name: string
  }[] | null | undefined
}

const Question = ({ student, content, course, title, tags }: QuestionProps) => {
  return (
    <div className='question' >
      <div className='question-header' >
        <ProfileImage studentUsername={student} height={32} width={32} />
        <div className={`${montserrat.className} info`}>
          <span className="username">{student}</span>
          <span className="dot">•</span>
          <span className="date">alguns segundos atrás</span>
        </div>
      </div>
      <div className='question-content' >
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
      <div className='question-bottom' >
        <div className={`${montserrat.className} tags`}>
          <span className="tag course">{course}</span>
          <PostTags tags={tags} />
        </div>
        <button className={montserrat.className}>Responder</button>
      </div>
    </div >
  )
}

type PostTagsProps = {
  tags: {
    __typename?: "Tag" | undefined,
    name: string
  }[] | null | undefined
}
const PostTags = ({ tags }: PostTagsProps) => {
  return (
    tags?.map((tags, key) => {
      return (
        <span className="tag" key={key}>#{tags?.name.toLowerCase().replace(/\s/g, '')}</span>
      )
    })
  )
}

export default Question