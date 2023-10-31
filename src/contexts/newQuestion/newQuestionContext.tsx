"use client"

import { ReactNode, createContext, useState } from "react"

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
  saveQuestionForm: (question: questionFormType) => void
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

  function saveQuestionForm(question: questionFormType) {
    const newQuestion: questionFormType = {
      title: question.title,
      content: question.content,
      course: question.course,
      tags: question.tags,
      isDraft: question.isDraft
    }
    setQuestionForm(newQuestion)
  }

  return (
    <NewQuestionContext.Provider value={{ questionForm, saveQuestionForm }} >
      {children}
    </NewQuestionContext.Provider>
  )
}