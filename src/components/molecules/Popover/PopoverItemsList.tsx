import { forwardRef } from "react"

type PopoverItemsListProps = {
  addItem: (item: string) => void,
  itemsList?: {
    __typeName?: string
    id: string
    title: string
  }[]
}
const PopoverItemsList = forwardRef<HTMLDivElement, PopoverItemsListProps>(
  function PopoverItemsList({ addItem, itemsList }, ref) {

    if (itemsList?.length === 0) {
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
          itemsList?.map((item) => {
            return (
              // TODO: Find a way to make course unable to be "null or undefined"
              <div className="popover-item" key={item?.id} onClick={() => addItem(item?.title)}>
                <h5>{item?.title}</h5>
              </div>
            )
          })
        }
      </div>
    )
  }
)
export default PopoverItemsList