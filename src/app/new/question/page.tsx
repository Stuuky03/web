"use client"

import Markdown from "react-markdown"
import "./style.scss"
import PageHeader from "@/components/organisms/PageHeader/PageHeader"
import { useState } from "react"

const NewQuestion = () => {
  const [postContent, setPostContent] = useState("")

  return (
    <>
      <PageHeader />
      <main>
        <div className="main-content">
          <section>
            <textarea value={postContent} onChange={e => setPostContent(e.target.value)} />
          </section>
          <section>
            <div className="markdown-body">
              <Markdown>{postContent}</Markdown>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default NewQuestion