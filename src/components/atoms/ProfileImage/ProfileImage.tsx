import "./ProfileImage.scss"

import Image from "next/image"
import defaultUserIcon from "@/assets/icons/user-icon.svg"

type ProfileImageProps = {
  width: number,
  height: number,
  studentUsername: string,
}

const ProfileImage = ({ width, height, studentUsername }: ProfileImageProps) => {
  return (
    <Image src={defaultUserIcon} width={width} height={height} alt={studentUsername} />
  )
}

export default ProfileImage