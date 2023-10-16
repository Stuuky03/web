import Markdown from "react-markdown"
import "./style.scss"
import PageHeader from "@/components/organisms/PageHeader/PageHeader"

const NewQuestion = () => {
  return (
    <>
      <PageHeader />
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