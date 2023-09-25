import UserProfileInfo from "@/components/molecules/UserProfileInfo/UserProfileInfo"
import UserStatsCount from "@/components/molecules/UserStatsCount/UserStatsCount"
import { montserrat } from "@/utils/fonts/font"

type studentProfileProps = {
  studentData: {
    username: string
    firstName: string
    lastName: string
    stuukesCount: number
    questionCount: number
    timesOnPodium: number
    points: number
  }
}
const UserProfileContent = ({
  studentData: { username, firstName, lastName, stuukesCount, questionCount, timesOnPodium, points }
}: studentProfileProps) => {
  return (
    <div className={`${montserrat.className} user-profile`}>
      <UserProfileInfo firstName={firstName} lastName={lastName} username={username} points={points} />
      <UserStatsCount questionsCount={stuukesCount} stuukesCount={questionCount} timesOnPodium={timesOnPodium} />
    </div>
  )
}

export default UserProfileContent