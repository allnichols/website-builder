import styles from "./sidebar.module.css"
import titleIcon from "../../icons/title.svg"
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <p>Elements</p>
      <div className={styles["sidebar-section"]}>
        <div className={styles["sidebar-item"]} id="text">
          <img src={titleIcon} alt="title" />
          <p>Title</p>
        </div>
      </div>
    </div>
  )
}

export { Sidebar }
