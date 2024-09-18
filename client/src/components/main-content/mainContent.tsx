import { useState } from "react"
import { useDroppable, useDndContext } from "@dnd-kit/core"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

function MainContent() {
  const dispatch = useAppDispatch()
  const canvas = useAppSelector(state => state.canvas)
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
    <main className="content" ref={setNodeRef} style={style}>
      {canvas.tree.map((element: any) => {
        if (element.component === "title") {
          return <h1 key={element.id}>title</h1>
        }
        if (element.component === "text") {
          return <p key={element.id}>text</p>
        }
      })}
    </main>
  )
}

export { MainContent }
