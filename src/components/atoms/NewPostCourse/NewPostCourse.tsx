import "./style.scss"

import Image from "next/image"
import removeItemIcon from "@/assets/icons/x-icon.png"

type NewPostCourseProps = {
  title: string
  canRemoveItem?: boolean
  removeItem: () => void
}
const selectedItem = ({ title, removeItem, canRemoveItem = true }: NewPostCourseProps) => {
  return (
    <div className="selected-course-container">
      <span>{title}</span>
      {canRemoveItem && (
        <button onClick={removeItem}>
          <Image src={removeItemIcon} alt="Remove Item" width={18} height={18} />
        </button>
      )

      }
    </div>
  )
}

export default selectedItem