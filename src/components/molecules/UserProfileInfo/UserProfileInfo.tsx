import "./UserProfileInfo.scss"

import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage"
import UserPoints from "@/components/atoms/UserPoints/UserPoints"

import { getFullName } from "@/utils/functions"


type UserProfileInfoProps = {
  username: string
  firstName: string
  lastName: string
  points: number
}
const UserProfileInfo = ({ username, firstName, lastName, points }: UserProfileInfoProps) => {
  const fullName = getFullName(firstName, lastName)


  return (
    <div className='user-info-content'>
      <ProfileImage height={70} width={70} studentUsername={username} />
      <div className='user-info'>
        <div className="student-names">
          <span className='full-name'>{fullName}</span>
          <span className='username'>@{username}</span>
        </div>
        <UserPoints points={points} />
      </div>
    </div>
  )
}


export default UserProfileInfo