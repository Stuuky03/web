import { forwardRef } from "react"

type PopoverTagListProps = {
  addItem: (tag: string) => void,
  tagList?: {
    __typeName?: string
    id: string
    title: string
  }[]
}
const PopoverTagList = forwardRef<HTMLDivElement, PopoverTagListProps>(
  function PopoverTagList({ addItem, tagList }, ref) {

    if (tagList?.length === 0) {
      return (
        <div ref={ref} className="popover-list error">
          <div className="popover-item error">
            <h5>Não foi possível encontrar a tag</h5>
          </div>
        </div>
      )
    }

    return (
      <div ref={ref} className="popover-list">
        {
          tagList?.map((tag) => {
            return (
              // TODO: Find a way to make course unable to be "null or undefined"
              <div className="popover-item" key={tag?.id} onClick={() => addItem(tag?.title)}>
                <h5>{tag?.title}</h5>
              </div>
            )
          })
        }
      </div>
    )
  }
)
export default PopoverTagList