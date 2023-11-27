import Title from "@/components/atoms/Title/Title"
import Markdown from "react-markdown"

type PostContentProps = {
  title: string
  content: string
  type: "STUUKE" | "QUESTION"
}
const PostContent = ({ title, content, type }: PostContentProps) => {

  const contentDecoded = Buffer.from(content, "base64").toString("utf8")


  return (
    <div className={`post-content ${type === "STUUKE" ? "stuuke-content" : "question-content"}`} >
      <h5>{title}</h5>

      <div className="markdown-body">
        <Markdown>{`${contentDecoded}`}</Markdown>
      </div>
    </div>
  )
}

export default PostContent