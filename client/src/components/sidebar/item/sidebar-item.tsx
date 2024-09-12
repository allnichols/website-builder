import styles from "./sidebar-item.module.css"
import { useDraggable } from "@dnd-kit/core"

function SidebarItems({ element }: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${element.id}`,
    attributes: {
      role: "sidebar-elements",
      roleDescription: "basic elements to drop",
    },
    data: {
      name: "elemtents",
      type: `${element.id}`,
    },
  })

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <div
      className={styles["sidebar-item"]}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <img src={element.icon} alt={element.name} />
      <p>{element.name}</p>
    </div>
  )
}

export { SidebarItems }
