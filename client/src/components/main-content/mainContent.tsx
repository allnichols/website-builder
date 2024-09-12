import { useDroppable, useDndContext } from "@dnd-kit/core"

function MainContent() {
  const { active, activeNode } = useDndContext()
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
    data: {
      supports: ["elements"],
    },
  })

  if (active) {
    console.log("active", active?.id)
  }

  const style = {
    backgroundColor: isOver ? "red" : "green",
  }

  return <main className="content" ref={setNodeRef} style={style}></main>
}

export { MainContent }
