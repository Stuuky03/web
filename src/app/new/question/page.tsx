"use client"

import Markdown from "react-markdown"
import "./style.scss"
import { useEffect, useRef, useState } from "react"
import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage"

import Image from 'next/image'

import notificationIcon from "@/assets/icons/notification-icon.png"
import { montserrat } from "@/utils/fonts/font"
import Popover from "@/components/molecules/Popover"
import SelectedItem from "@/components/atoms/SelectedItem/SelectedItem"

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
    tags: [""],
    content: "",
    isDraft: true
  })

  const [isPopoverVisible, setPopoverVisible] = useState(false)
  const coursesPopoverRef = useRef<HTMLDivElement | null>(null);
  const titleTextAreaRef = useRef<HTMLTextAreaElement | null>(null);

  function handleRemoveCourseItem() {
    setQuestionForm({ ...questionForm, course: "" })
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
                <SelectedItem title={questionForm.course} removeItem={handleRemoveCourseItem} />
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
                      <Popover.Root>
                        <Popover.Title title="Cursos" />
                        <Popover.CourseList ref={coursesPopoverRef} addItem={handleAddCouseItem} />
                      </Popover.Root>
                    )}
                  </div>
                )
              }

            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default NewQuestion