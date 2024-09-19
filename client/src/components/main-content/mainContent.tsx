import { useDroppable } from "@dnd-kit/core"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

function MainContent() {
  const dispatch = useAppDispatch()
  const canvas = useAppSelector(state => state.canvas)
  const { isOver, setNodeRef } = useDroppable({
    id: "canvas",
    data: {
      supports: ["elements"],
    },
  })

  const style = {
    backgroundColor: isOver ? "#f0f0f0" : "white",
  }

  return (
    <main className="content" ref={setNodeRef} style={style}>
      {canvas.tree.map((element: any, index: number) => {
        if (element.component === "title") {
          return <h1 key={element.id + "-" + index}>title</h1>
        }
        if (element.component === "text") {
          return <p key={element.id + "-" + index}>text</p>
        }
      })}
    </main>
  )
}

export { MainContent }
