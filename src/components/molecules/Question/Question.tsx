import Button from "@/components/atoms/Button/Button"
import "./Question.scss"
import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage"
import { montserrat } from "@/utils/fonts/font"
import { getFullName } from "@/utils/functions"

type QuestionProps = {
  username: string,
  firstName: string,
  lastName: string
  title: string,
  content: string,
  course: string,
  tags: {
    __typename?: "Tag" | undefined,
    name: string
  }[] | null | undefined
}

const Question = ({ username, firstName, lastName, content, course, title, tags }: QuestionProps) => {
  const fullName = getFullName(firstName, lastName)

  return (
    <div className='question' >
      <div className='question-header' >
        <ProfileImage studentUsername={username} height={32} width={32} />
        <div className={`${montserrat.className} info`}>
          <span className="username">{fullName}</span>
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
    tags?.map((tags) => {
      return (
        <span className="tag" key={tags?.name}>#{tags?.name.toLowerCase().replace(/\s/g, '')}</span>
      )
    })
  )
}

export default Question