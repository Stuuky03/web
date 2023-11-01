import "./style.scss"

import { useEffect, useRef, useState } from "react"
import Popover from "@/components/molecules/Popover"
import { gqlGetAllCourses } from "@/graphql/queries/getAllCourses"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

type CourseSelectorProps = {
  addItem: (course: string) => void
  questionCourse: string
}
const CourseSelector = ({ addItem, questionCourse }: CourseSelectorProps) => {
  const [isTyping, setIsTyping] = useState(false)
  const [isPopoverVisible, setPopoverVisible] = useState(false)
  const coursesPopoverRef = useRef<HTMLDivElement | null>(null);

  const { data, refetch } = useSuspenseQuery(gqlGetAllCourses, {
    variables: { courseTitle: questionCourse },
  })

  function addCourseItemController(course: string) {
    addItem(course)
  }

  function handleCourseInputChange(courseString: string) {
    refetch({
      courseTitle: courseString
    })
    setIsTyping(courseString ? true : false)
  }

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

    <div className="new-question-input course-input-container select-container" >
      <input
        type="text"
        autoComplete="list"
        placeholder="Escolha o curso..."
        onChange={(event) => handleCourseInputChange(event.target.value)}
        onClick={() => setPopoverVisible(!isPopoverVisible)}
        onBlur={() => addCourseItemController("")}
      />

      {isPopoverVisible && (
        <Popover.Root>
          {isTyping ?
            null
            :
            <Popover.Title title="Cursos" />

          }
          <Popover.CourseList coursesList={data.allCourses} ref={coursesPopoverRef} addItem={addCourseItemController} />
        </Popover.Root>
      )}
    </div>

  )
}

export default CourseSelector