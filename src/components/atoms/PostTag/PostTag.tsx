type PostTagsProps = {
  tags: {
    __typename?: "Tag",
    name: string
  }[]
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

export default PostTags