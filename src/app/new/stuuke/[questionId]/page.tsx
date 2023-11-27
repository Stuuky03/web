"use client"

import "./style.scss"

import Image from 'next/image'

import notificationIcon from "@/assets/icons/notification-icon.png"
import toolsIcons from "@/assets/icons/Tools.png"
import moreIcons from "@/assets/icons/More.png"

import Button from "@/components/atoms/Button/Button"
import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage"
import CourseSelector from "@/components/organisms/CourseSelector/CourseSelector"
import TagSelector from "@/components/organisms/TagSelector/TagSelector"
import SelectedItem from "@/components/atoms/NewPostItem/NewPostItem"
import { gqlCreateQuestion } from "@/graphql/mutations/createQuestion"
import { montserrat } from "@/utils/fonts/font"
import { removeFromArray } from "@/utils/functions/removeFromArray"
import { useMutation } from "@apollo/client"
import Link from "next/link"
import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import Markdown from "react-markdown"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import { gqlGetQuestionById } from "@/graphql/queries/getQuestionById"
import { gqlCreateStuuke } from "@/graphql/mutations/createStuuke"
import { useRouter } from "next/navigation"

type questionFormType = {
  title: string,
  courseId: string,
  tags: string[],
  content: string,
  isDraft: boolean,
  createdAt: string,
  studentId: string
  questionId: string
}

type params = { params: { questionId: string } }
export default function Page({ params: { questionId } }: params) {
  const router = useRouter()

  const [questionForm, setQuestionForm] = useState<questionFormType>({
    title: "",
    courseId: "",
    tags: [],
    content: "",
    isDraft: false,
    createdAt: "2023-12-03T10:15:30.000Z",
    studentId: "rqw5uert2w111tfivjilwbsp",
    questionId: questionId
  })

  const { handleSubmit } = useForm<questionFormType>({
    mode: 'onSubmit',
  })

  const [createStuuke] = useMutation(gqlCreateStuuke)

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

  const { data } = useSuspenseQuery(gqlGetQuestionById, {
    variables: { questionId }
  })

  if (data == null || data.questionById == null) return null


  questionForm.tags = data.questionById.tags.map((tag) => tag.title)
  questionForm.courseId = data.questionById.course.title


  function changeTitleTextAreaHeight() {
    if (titleTextAreaRef.current) {
      titleTextAreaRef.current.style.maxHeight = "42px"
      titleTextAreaRef.current.style.maxHeight = (titleTextAreaRef.current?.scrollHeight) + "px"
      titleTextAreaRef.current.style.height = (titleTextAreaRef.current?.scrollHeight) + "px"
    }
  }

  async function onSubmitForm() {
    createStuuke({
      variables: {
        input: questionForm
      }
    })

    router.push(`/question/${questionId}`)
  }

  return (
    <>
      <header>
        <Link href="/home" >
          <Image src="/assets/icon-colored.svg" width={72} height={40} alt='Stuuky' />
        </Link>
        <div className="page-title-container">
          <h3 className={montserrat.className}>Criar Stuuke</h3>
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
                      placeholder="Título do stuuke aqui..."
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
                      <SelectedItem title={questionForm.courseId} canRemoveItem={false} removeItem={handleRemoveCourseItem} />
                    ) :
                      (
                        <CourseSelector addItem={handleAddCouseItem} questionCourse={questionForm.courseId} />
                      )
                    }
                    <div className="tag-list-items">
                      {questionForm.tags.map((tag) => {
                        return tag ? <SelectedItem title={tag} canRemoveItem={false} removeItem={handleRemoveTagItem} key={tag} /> : null
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
                  <textarea className="content-input" placeholder="Escreva aqui seu stuuke..." value={questionForm.content} onChange={event => setQuestionForm(
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
            <Button name="Submit" value="Publicar stuuke" />
          </div>
        </form>
      </main>
    </>
  )
}