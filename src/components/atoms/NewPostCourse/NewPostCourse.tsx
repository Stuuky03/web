import "./style.scss"

import Image from "next/image"
import removeItemIcon from "@/assets/icons/x-icon.png"

type NewPostCourseProps = {
  course: string
  removeItem: () => void
}
const NewPostCourse = ({ course, removeItem }: NewPostCourseProps) => {
  return (
    <div className="selected-course-container">
      <span>{course}</span>
      <button onClick={removeItem}>
        <Image src={removeItemIcon} alt="Remove Item" width={18} height={18} />
      </button>
    </div>
  )
}

export default NewPostCourse