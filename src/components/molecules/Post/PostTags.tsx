import { montserrat } from "@/utils/fonts/font"
import PostTag from "@/components/atoms/PostTag/PostTag"
import { ReactNode } from "react"

type PostTagsProps = {
  course: string
  tags: {
    __typename?: "Tag",
    name: string
  }[]
  button: ReactNode
}
const PostTags = ({ course, tags, button }: PostTagsProps) => {
  return (
    <div className='post-bottom' >
      <div className={`${montserrat.className} tags-container`}>
        <span className="tag course">{course}</span>
        <PostTag tags={tags} />
      </div>
      {button}
    </div>
  )
}

export default PostTags