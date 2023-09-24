import "./FeedType.scss"

type FeedType = {
  type: "QUESTION" | "STUUKE"
}

const FeedType = ({ type }: FeedType) => {
  return (
    <div className="feed-type">
      <span className={type == "QUESTION" ? 'selected' : ''}>Questões</span>
      <span className={type == "STUUKE" ? 'selected' : ''}>Stuukes</span>
    </div>
  )
}

export default FeedType