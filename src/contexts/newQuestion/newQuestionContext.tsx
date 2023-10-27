"use client"

import { title } from "process"
import { ReactNode, createContext, useMemo, useState } from "react"

type questionFormType = {
  title: string,
  course: string,
  tags: string[],
  content: string,
  isDraft: boolean
}
const questionForm = {
  title: "",
  course: "",
  tags: [""],
  content: "",
  isDraft: true
}
type newQuestionContextData = {
  questionForm: questionFormType
  handleSetQuestionForm: (question: questionFormType) => void
}

export const NewQuestionContext = createContext({ questionForm } as newQuestionContextData)

type newQuestionProvider = {
  children: ReactNode
}
export function NewQuestionProvider({ children }: newQuestionProvider) {
  const [questionForm, setQuestionForm] = useState<questionFormType>({
    title: "",
    course: "",
    tags: [""],
    content: "",
    isDraft: true
  })

  function handleSetQuestionForm(question: questionFormType) {
    setQuestionForm(question)
  }

  return (
    <NewQuestionContext.Provider value={{ questionForm, handleSetQuestionForm }} >
      {children}
    </NewQuestionContext.Provider>
  )
}