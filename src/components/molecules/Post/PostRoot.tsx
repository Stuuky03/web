
import { ReactNode } from "react"

type PostRootProps = {
  children: ReactNode
}
const PostRoot = ({ children }: PostRootProps) => {
  return (
    <div className='post' >
      {children}
    </div >
  )
}

export default PostRoot