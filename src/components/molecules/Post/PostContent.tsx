
type PostContentProps = {
  title: string
  content: string
}
const PostContent = ({ title, content }: PostContentProps) => {
  return (
    <div className='post-content' >
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  )
}

export default PostContent