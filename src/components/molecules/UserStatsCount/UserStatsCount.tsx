import "./UserStatsCount.scss"

import Image from "next/image"

import stuukeCountIcon from "@/assets/icons/stuuke-count-icon.svg"
import questionsCountIcon from "@/assets/icons/question-count-icon.svg"
import timesOnPodiumIcon from "@/assets/icons/crown-icon.svg"

type UserStatsCountProps = {
  stuukesCount: number
  questionsCount: number
  timesOnPodium: number
}

const UserStatsCount = ({ stuukesCount, questionsCount, timesOnPodium }: UserStatsCountProps) => {
  return (
    <div className="stats-content">
      <span>
        <Image src={stuukeCountIcon} height={20} width={20} alt="stuukes" />
        <p>{stuukesCount} stuukes escritos</p>
      </span>
      <span>
        <Image src={questionsCountIcon} height={20} width={20} alt="questions" />
        <p>{questionsCount} questões feitas</p>
      </span>
      <span>
        <Image src={timesOnPodiumIcon} height={20} width={24} alt="stuukes" />
        <p>{timesOnPodium} vezes no pódio</p>
      </span>
    </div>
  )
}

export default UserStatsCount