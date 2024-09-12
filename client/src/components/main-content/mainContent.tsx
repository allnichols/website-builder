import { useDroppable, useDndContext } from "@dnd-kit/core"

function MainContent() {
  const { active } = useDndContext()
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
    data: {
      supports: ["elements"],
    },
  })

  if (active?.data) {
    console.log("active", active.data)
  }

  const style = {
    backgroundColor: isOver ? "red" : "green",
  }

  return <main className="content" ref={setNodeRef} style={style}></main>
}

export { MainContent }
