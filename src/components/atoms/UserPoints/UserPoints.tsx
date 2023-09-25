import "./UserPoints.scss"

import Image from "next/image"

import pointsIcon from "@/assets/icons/point-icon.svg"

type UserPointsProps = { points: number }
const UserPoints = ({ points }: UserPointsProps) => {
  return (
    <span className="points">
      <p>{points}</p>
      <Image src={pointsIcon} width={18} height={18} alt="VOOLLEYYY" />
    </span>
  )
}

export default UserPoints