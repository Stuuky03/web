import Title from "@/components/atoms/Title/Title"
import Markdown from "react-markdown"

type PostContentProps = {
  title: string
  content: string
}
const PostContent = ({ title, content }: PostContentProps) => {

  // const decoded = Buffer.from(content, "base64").toString("utf8")

  return (
    <div className='post-content' >
      <h5>{title}</h5>
      <div>
        <Markdown>{`${content}`}</Markdown>
      </div>
    </div>
  )
}

export default PostContent