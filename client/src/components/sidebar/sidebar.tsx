import styles from "./sidebar.module.css"
import titleIcon from "../../icons/title.svg"
import { useDraggable } from "@dnd-kit/core"

function Sidebar() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "elements",
  })

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <nav className={styles.sidebar} id="sidebar">
      <p>Elements</p>
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className={styles["sidebar-section"]}
        style={style}
      >
        <div className={styles["sidebar-item"]} id="text">
          <img src={titleIcon} alt="title" />
          <p>Title</p>
        </div>
      </div>
    </nav>
  )
}

export { Sidebar }
