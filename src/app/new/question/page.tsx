"use client"

import Markdown from "react-markdown"
import "./style.scss"
import { useEffect, useRef, useState } from "react"
import ProfileImage from "@/components/atoms/ProfileImage/ProfileImage"

import Image from 'next/image'

import notificationIcon from "@/assets/icons/notification-icon.png"
import { montserrat } from "@/utils/fonts/font"
import CoursesPopover from "@/components/molecules/CoursesPopover/CoursesPopover"

const NewQuestion = () => {
  const [postContent, setPostContent] = useState("")
  const [isPopoverVisible, setPopoverVisible] = useState(false)
  const coursesPopoverRef = useRef<HTMLDivElement | null>(null);

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
            <div>
              <input type="text" className="title-input" />
            </div>
            <div className="course-input-container select-container" >
              <input type="text" autoComplete="list" placeholder="Escolha o curso..." onClick={() => setPopoverVisible(!isPopoverVisible)} />

              {isPopoverVisible && (
                <CoursesPopover ref={coursesPopoverRef} />
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default NewQuestion