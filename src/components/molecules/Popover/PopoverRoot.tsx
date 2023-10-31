import "./style.scss"

import { ReactNode } from "react"

type PopoverRootProps = {
  children: ReactNode
}

const PopoverRoot = ({ children }: PopoverRootProps) => {
  return (
    <div className="popover-root">
      {children}
    </div>
  )
}

export default PopoverRoot