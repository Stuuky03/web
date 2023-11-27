import Popover from "@/components/molecules/Popover";
import gqlGetTagList from "@/graphql/queries/getTagList";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useState, useRef, useEffect } from "react";


type TagSelectorProps = {
  addItem: (tag: string) => void
}
const TagSelector = ({ addItem }: TagSelectorProps) => {
  const [isTyping, setIsTyping] = useState(false)
  const [isPopoverVisible, setPopoverVisible] = useState(false)
  const tagPopoverRef = useRef<HTMLDivElement | null>(null);

  const { data, refetch } = useSuspenseQuery(gqlGetTagList, {
    variables: { tagTitle: null },
  })

  function addTagItemController(tag: string) {
    addItem(tag)
  }

  function handleTagInputChange(tagString: string) {
    refetch({
      tagTitle: tagString
    })
    setIsTyping(tagString ? true : false)
  }

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (tagPopoverRef.current && !tagPopoverRef.current.contains(event.target as Node)) {
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
        placeholder="Escolha até 3 tags..."
        onChange={(event) => handleTagInputChange(event.target.value)}
        onClick={() => setPopoverVisible(!isPopoverVisible)}
        onBlur={(event) => event.target.value ? addTagItemController(event.target.value) : null}
      />

      {isPopoverVisible && (
        <Popover.Root>
          {isTyping ?
            null
            :
            <Popover.Title title="Tags" />

          }
          <Popover.TagList tagList={data.tagsList} ref={tagPopoverRef} addItem={addTagItemController} />
        </Popover.Root>
      )}
    </div>
  )

}

export default TagSelector