import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage"
import { montserrat } from "@/utils/fonts/font"
import { getFullName } from "@/utils/functions";


type PostInfoProps = {
  username: string;
  firstName: string;
  lastName: string;
}
const PostInfo = ({ username, firstName, lastName }: PostInfoProps) => {
  const fullName = getFullName(firstName, lastName)
  return (
    <div className='post-header' >
      <ProfileImage studentUsername={username} height={32} width={32} />
      <div className={`${montserrat.className} info`}>
        <span className="username">{fullName}</span>
        <span className="dot">•</span>
        <span className="date">alguns segundos atrás</span>
      </div>
    </div>
  )
}

export default PostInfo