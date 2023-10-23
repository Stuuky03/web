type PostTagsProps = {
  tags: {
    __typename?: "Tag",
    id: string
    title: string
  }[]
}
const PostTags = ({ tags }: PostTagsProps) => {
  return (
    tags?.map((tags) => {
      return (
        <span className="tag" key={tags?.title}>#{tags?.title.toLowerCase().replace(/\s/g, '')}</span>
      )
    })
  )
}

export default PostTags