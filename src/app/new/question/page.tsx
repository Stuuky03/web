"use client"

import Markdown from "react-markdown"
import "./style.scss"
import { useRef, useState } from "react"
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
import Button from "@/components/atoms/Button/Button"
import { useForm } from "react-hook-form"
import { useMutation } from "@apollo/client"
import { gqlCreateQuestion } from "@/graphql/mutations/createQuestion"
import { useRouter } from "next/navigation"

type questionFormType = {
  title: string,
  courseId: string,
  tags: string[],
  content: string,
  isDraft: boolean,
  createdAt: string,
  studentId: string
}

const NewQuestion = () => {
  const router = useRouter()

  const [questionForm, setQuestionForm] = useState<questionFormType>({
    title: "",
    courseId: "",
    tags: [],
    content: "",
    isDraft: false,
    createdAt: "2023-12-03T10:15:30.000Z",
    studentId: "rqw5uert2w111tfivjilwbsp"
  })

  const { handleSubmit } = useForm<questionFormType>({
    mode: 'onSubmit',
  })

  const [createQuestion] = useMutation(gqlCreateQuestion)

  const [isPreviewing, setPreviewing] = useState(true)
  const titleTextAreaRef = useRef<HTMLTextAreaElement | null>(null);

  function handleRemoveCourseItem() {
    setQuestionForm({ ...questionForm, courseId: "" })
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

  function handleAddCouseItem(courseId: string) {
    setQuestionForm({ ...questionForm, courseId })
  }

  function changeTitleTextAreaHeight() {
    if (titleTextAreaRef.current) {
      titleTextAreaRef.current.style.maxHeight = "42px"
      titleTextAreaRef.current.style.maxHeight = (titleTextAreaRef.current?.scrollHeight) + "px"
      titleTextAreaRef.current.style.height = (titleTextAreaRef.current?.scrollHeight) + "px"
    }
  }

  async function onSubmitForm() {
    createQuestion({
      variables: {
        input: questionForm
      }
    })

    router.push(`/home`)
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
        <form onSubmit={handleSubmit(onSubmitForm)}>
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
                    {questionForm.courseId ? (
                      <SelectedItem title={questionForm.courseId} removeItem={handleRemoveCourseItem} />
                    ) :
                      (
                        <CourseSelector addItem={handleAddCouseItem} questionCourse={questionForm.courseId} />
                      )
                    }
                    <div className="tag-list-items">
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
                  <div className="bottom-container">
                    {questionForm.courseId ? (
                      <SelectedItem title={questionForm.courseId} canRemoveItem={false} removeItem={handleRemoveCourseItem} />
                    ) :
                      null
                    }
                    <div className="tag-list-items">
                      {questionForm.tags.map(tag => {
                        return <SelectedItem key={tag} title={tag} canRemoveItem={false} removeItem={handleRemoveTagItem} />
                      })
                      }
                    </div>
                  </div>
                </section>
                <section className="content-preview">
                  <Markdown className="markdown-body">{questionForm.content}</Markdown>
                </section>
              </>
            }


          </div>
          <div className="last-section">
            <Button name="Submit" value="Publicar pergunta" />
          </div>
        </form>
      </main>
    </>
  )
}

export default NewQuestion