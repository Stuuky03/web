import { Dispatch, SetStateAction } from "react"
import "./FeedType.scss"

type FeedType = {
  type: "QUESTION" | "STUUKE"
  setType: Dispatch<SetStateAction<"QUESTION" | "STUUKE">>
}


const FeedType = ({ type, setType }: FeedType) => {
  function changeType() {
    const newType = type == "QUESTION" ? "STUUKE" : "QUESTION"
    setType(newType)
  }

  return (
    <div className="feed-type">
      <span className={type == "QUESTION" ? 'selected' : ''} onClick={changeType}>Questões</span>
      <span className={type == "STUUKE" ? 'selected' : ''} onClick={changeType}>Stuukes</span>
    </div>
  )
}

export default FeedType