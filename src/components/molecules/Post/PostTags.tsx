import { montserrat } from "@/utils/fonts/font"
import PostTag from "@/components/atoms/PostTag/PostTag"
import { ReactNode } from "react"

type PostTagsProps = {
  course: string
  tags: ({
    __typename: "Tag";
    name: string;
  })[]
  children: ReactNode
}
const PostTags = ({ course, tags, children }: PostTagsProps) => {
  return (
    <div className='post-bottom' >
      <div className={`${montserrat.className} tags-container`}>
        <span className="tag course">{course}</span>
        {
          tags === null || undefined ? null : <PostTag tags={tags} />
        }
      </div>
      {children}
    </div>
  )
}

export default PostTags