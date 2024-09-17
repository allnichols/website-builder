import { useState } from "react"
import { useDroppable, useDndContext } from "@dnd-kit/core"

function MainContent() {
  const [tree, setTree] = useState({})
  const { active, activeNode, activatorEvent } = useDndContext()
  const { isOver, setNodeRef } = useDroppable({
    id: "canvas",
    data: {
      supports: ["elements"],
    },
  })

  const style = {
    backgroundColor: isOver ? "#f0f0f0" : "white",
  }

  if (active) {
    // console.log(active.data)
  }

  return (
    <main
      className="content"
      ref={setNodeRef}
      style={style}
      onMouseUp={e => console.log(e)}
    >
      {}
    </main>
  )
}

export { MainContent }
