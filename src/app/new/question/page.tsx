"use client"

import Markdown from "react-markdown"
import "./style.scss"
import { useEffect, useRef, useState } from "react"
import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage"

import Image from 'next/image'

import notificationIcon from "@/assets/icons/notification-icon.png"
import toolsIcons from "@/assets/icons/Tools.png"
import moreIcons from "@/assets/icons/More.png"

import { montserrat } from "@/utils/fonts/font"

import SelectedItem from "@/components/atoms/NewPostItem/NewPostItem"
import CourseSelector from "@/components/organisms/CourseSelector/CourseSelector"
import { removeFromArray } from "@/utils/functions/removeFromArray"
import Link from "next/link"
import TagSelector from "@/components/organisms/TagSelector/TagSelector"

type questionFormType = {
  title: string,
  course: string,
  tags: string[],
  content: string,
  isDraft: boolean
}

const NewQuestion = () => {
  const [questionForm, setQuestionForm] = useState<questionFormType>({
    title: "",
    course: "",
    tags: [],
    content: "",
    isDraft: true
  })

  const [isPreviewing, setPreviewing] = useState(true)
  const titleTextAreaRef = useRef<HTMLTextAreaElement | null>(null);

  function handleRemoveCourseItem() {
    setQuestionForm({ ...questionForm, course: "" })
  }
  function handleRemoveTagItem(tagTitle: string) {
    const currentTags = questionForm.tags
    const newTags = removeFromArray(currentTags, tagTitle)

    setQuestionForm({ ...questionForm, tags: newTags })
  }
  function handleAddTagItem(tagTitle: string) {
    const newTags = questionForm.tags
    newTags.unshift(tagTitle)

    console.log(questionForm.tags.length)
    console.log(questionForm.tags)

    setQuestionForm({
      ...questionForm,
      tags: newTags
    })
  }

  function handleAddCouseItem(course: string) {
    setQuestionForm({ ...questionForm, course })
  }

  function changeTitleTextAreaHeight() {
    if (titleTextAreaRef.current) {
      titleTextAreaRef.current.style.maxHeight = "42px"
      titleTextAreaRef.current.style.maxHeight = (titleTextAreaRef.current?.scrollHeight) + "px"
      titleTextAreaRef.current.style.height = (titleTextAreaRef.current?.scrollHeight) + "px"
    }
  }

  return (
    <>
      <header>
        <Link href="/home" >
          <Image src="/assets/icon-colored.svg" width={72} height={40} alt='Stuuky' />
        </Link>
        <div className="page-title-container">
          <h3 className={montserrat.className}>Criar Questão</h3>
        </div>
        <div className='icons-container'>
          <Image src={notificationIcon} width={24} height={24} alt='Notification' />
          <ProfileImage width={28} height={28} studentUsername='albberrrt' />
        </div>
      </header>
      <main>
        <div className="edit-mode-buttons">
          <button className={isPreviewing ? "" : "active"} type="button" onClick={() => setPreviewing(true)}>Edição</button>
          <button className={isPreviewing ? "active" : ""} type="button" onClick={() => setPreviewing(false)}>Prévia</button>
        </div>
        <div className="main-content">
          {isPreviewing ?
            <>
              <section className="header-section">
                <div className="new-question-input">
                  <textarea
                    ref={titleTextAreaRef}
                    className={`title-input ${montserrat.className}`}
                    placeholder="Título da pergunta aqui..."
                    onInput={changeTitleTextAreaHeight}
                    onChange={event => setQuestionForm({
                      ...questionForm,
                      title: event.target.value
                    })}
                    value={questionForm.title}
                  />
                </div>
                <div className="bottom-container">
                  {questionForm.course ? (
                    <SelectedItem title={questionForm.course} removeItem={handleRemoveCourseItem} />
                  ) :
                    (
                      <CourseSelector addItem={handleAddCouseItem} questionCourse={questionForm.course} />
                    )
                  }
                  {questionForm.tags.map((tag) => {
                    return tag ? <SelectedItem title={tag} removeItem={handleRemoveTagItem} key={tag} /> : null
                  })
                  }
                  {
                    questionForm.tags.length < 3 ? (
                      <TagSelector addItem={handleAddTagItem} />
                    ) : null
                  }
                </div>
              </section>
              <section className="content-tools">
                <div className="main-tools">
                  <Image src={toolsIcons} height={29} width={376} alt="tools" />
                </div>
                <div className="more">
                  <Image src={moreIcons} height={32} width={32} alt="more" />
                </div>
              </section>
              <section className="content-section">
                <textarea className="content-input" placeholder="Escreva aqui sua pergunta..." value={questionForm.content} onChange={event => setQuestionForm(
                  {
                    ...questionForm,
                    content: event.target.value
                  }
                )} ></textarea>
              </section>
            </>

            :
            <>
              <section className={`title-preview ${montserrat.className}`}>
                <span>{questionForm.title}</span>
                {questionForm.course ? (
                  <SelectedItem title={questionForm.course} canRemoveItem={false} removeItem={handleRemoveCourseItem} />
                ) :
                  null
                }
              </section>
              <section className="content-preview">
                <Markdown className="markdown-body">{questionForm.content}</Markdown>
              </section>
            </>
          }

        </div>
      </main>
    </>
  )
}

export default NewQuestion