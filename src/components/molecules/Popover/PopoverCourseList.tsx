import { gqlGetAllCourses } from "@/graphql/queries/getAllCourses"
import { useSuspenseQuery } from "@apollo/client"
import { forwardRef } from "react"

type PopoverCourseListProps = {
  addItem: (course: string) => void,
  searchString: string
}
const PopoverCourseList = forwardRef<HTMLDivElement, PopoverCourseListProps>(
  function PopoverCourseList({ addItem, searchString }, ref) {
    const { data } = useSuspenseQuery(gqlGetAllCourses, {
      variables: { courseTitle: searchString },
    })

    if (data === null || data.allCourses === null) {
      return (
        <div className="popover-list-error">
          <span>Não foi possível encontrar o curso</span>
        </div>
      )
    }

    return (
      <div ref={ref} className="popover-list">
        {
          data.allCourses?.map((course) => {
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