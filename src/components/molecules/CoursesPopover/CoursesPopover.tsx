import "./style.scss"

import { useSuspenseQuery } from "@apollo/client"
import { forwardRef } from "react"
import { gqlGetAllCourses } from "./graphql/getAllCourses"

const CoursesPopover = forwardRef<HTMLDivElement | null>(
  function CoursesPopover({ }, ref) {
    const { data } = useSuspenseQuery(gqlGetAllCourses)

    if (data == null || data.allCourses == null) return null

    return (
      <div ref={ref} className="courses-autocomplete-popover">
        <span>Cursos</span>
        <div className="popover-list">
          {
            data.allCourses?.map((course) => {
              return (
                <div className="popover-item" key={course?.id}>
                  <h5>{course?.title}</h5>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
)


export default CoursesPopover 