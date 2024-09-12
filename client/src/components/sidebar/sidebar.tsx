import styles from "./sidebar.module.css"
import titleIcon from "../../icons/title.svg"
import { SidebarItems } from "./item/sidebar-item"

const elements = [
  {
    id: "title",
    icon: titleIcon,
    name: "Title",
  },
  {
    id: "text",
    icon: titleIcon,
    name: "Text",
  },
]
function Sidebar() {
  return (
    <nav className={styles.sidebar} id="sidebar">
      <p>Elements</p>
      <div className={styles["sidebar-section"]}>
        {elements.map(element => {
          return <SidebarItems key={element.id} element={element} />
        })}
      </div>
    </nav>
  )
}

export { Sidebar }
