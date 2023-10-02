import Title from "@/components/atoms/Title/Title"
import Markdown from "react-markdown"

type PostContentProps = {
  title: string
  content: string
}
const PostContent = ({ title, content }: PostContentProps) => {

  const contentDecoded = Buffer.from(content, "base64").toString("utf8")

  return (
    <div className='post-content' >
      <h5>{title}</h5>

      <div className="markdown-body">
        <Markdown>{`${contentDecoded}`}</Markdown>
      </div>
    </div>
  )
}

export default PostContent