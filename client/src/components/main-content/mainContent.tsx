import { useDroppable } from "@dnd-kit/core"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./content.module.css"

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
    <main className={styles.main_content} ref={setNodeRef} style={style}>
      {canvas.tree.map((element: any, index: number) => {
        return <element.component key={index}>{element.name}</element.component>
      })}
    </main>
  )
}

export { MainContent }
