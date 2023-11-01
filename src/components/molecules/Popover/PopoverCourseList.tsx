import { forwardRef } from "react"

type PopoverCourseListProps = {
  addItem: (course: string) => void,
  coursesList?: {
    __typeName?: string
    id: string
    title: string
  }[]
}
const PopoverCourseList = forwardRef<HTMLDivElement, PopoverCourseListProps>(
  function PopoverCourseList({ addItem, coursesList }, ref) {

    if (coursesList?.length === 0) {
      return (
        <div ref={ref} className="popover-list error">
          <div className="popover-item error">
            <h5>Não foi possível encontrar o curso</h5>
          </div>
        </div>
      )
    }

    return (
      <div ref={ref} className="popover-list">
        {
          coursesList?.map((course) => {
            return (
              // TODO: Find a way to make course unable to be "null or undefined"
              <div className="popover-item" key={course?.id} onClick={() => addItem(course?.title)}>
                <h5>{course?.title}</h5>
              </div>
            )
          })
        }
      </div>
    )
  }
)
export default PopoverCourseList