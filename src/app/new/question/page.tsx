"use client"

import Markdown from "react-markdown"
import "./style.scss"
import { useContext, useEffect, useRef, useState } from "react"
import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage"

import Image from 'next/image'

import notificationIcon from "@/assets/icons/notification-icon.png"
import { montserrat } from "@/utils/fonts/font"
import CoursesPopover from "@/components/molecules/CoursesPopover/CoursesPopover"
import NewPostCourse from "@/components/atoms/NewPostCourse/NewPostCourse"
import { NewQuestionContext, NewQuestionProvider } from "@/contexts/newQuestion/newQuestionContext"

type questionFormType = {
  title: string,
  course: string,
  tags: string[],
  content: string,
  isDraft: boolean
}

const NewQuestion = () => {
  const { questionForm, handleSetQuestionForm } = useContext(NewQuestionContext)

  const [isPopoverVisible, setPopoverVisible] = useState(false)
  const coursesPopoverRef = useRef<HTMLDivElement | null>(null);
  const titleTextAreaRef = useRef<HTMLTextAreaElement | null>(null);

  function setQuestionForm(question: questionFormType) {
    handleSetQuestionForm(question)
  }

  function handleRemoveCourseItem() {
    setQuestionForm({ 
      ...questionForm,
      course: ""
    })
  }

  function changeTitleTextAreaHeight() {
    if (titleTextAreaRef.current) {
      titleTextAreaRef.current.style.maxHeight = "42px"
      titleTextAreaRef.current.style.maxHeight = (titleTextAreaRef.current?.scrollHeight) + "px"
      titleTextAreaRef.current.style.height = (titleTextAreaRef.current?.scrollHeight) + "px"
    }
  }

  // UseEffect do POPOPVER
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (coursesPopoverRef.current && !coursesPopoverRef.current.contains(event.target as Node)) {
        setPopoverVisible(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <NewQuestionProvider >
        <header>
          <Image src="/assets/icon-colored.svg" width={72} height={40} alt='Stuuky' />
          <div className="page-title-container">
            <h3 className={montserrat.className}>Criar Questão</h3>
          </div>
          <div className='icons-container'>
            <Image src={notificationIcon} width={24} height={24} alt='Notification' />
            <ProfileImage width={28} height={28} studentUsername='albberrrt' />
          </div>
        </header>
        <main>
          <div className="main-content">
            <section>
              <div className="new-question-input">
                <textarea
                  ref={titleTextAreaRef}
                  className={`title-input ${montserrat.className}`}
                  placeholder="Título da pergunta aqui..."
                  onInput={changeTitleTextAreaHeight} />
              </div>
              <div className="bottom-container">
                {questionForm.course ? (
                  <NewPostCourse course={questionForm.course} removeItem={handleRemoveCourseItem} />
                ) :
                  (
                    <div className="new-question-input course-input-container select-container" >
                      <input
                        type="text"
                        autoComplete="list"
                        placeholder="Escolha o curso..."
                        onClick={() => setPopoverVisible(!isPopoverVisible)}
                        onBlur={event => setQuestionForm({
                          ...questionForm,
                          course: event.target.value
                        })}
                      />

                      {isPopoverVisible && (
                        <CoursesPopover ref={coursesPopoverRef} />
                      )}
                    </div>
                  )
                }

              </div>
            </section>
          </div>
        </main>
      </NewQuestionProvider>
    </>
  )
}

export default NewQuestion