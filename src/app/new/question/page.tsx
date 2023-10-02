import Markdown from "react-markdown"
import "./style.scss"

const NewQuestion = () => {
  return (
    <>
      <main>
        <div className="main-content">
          <section>
            <Markdown>{`# OLÁÁÁÁÁÁ`}</Markdown>
          </section>
        </div>
      </main>
    </>
  )
}

export default NewQuestion