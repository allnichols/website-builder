import styles from "./sidebar.module.css"
import TitleIcon from "../../icons/title.svg"
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <p>Elements</p>
      <div className={styles["sidebar-section"]}>
        <div className={styles["sidebar-item"]}>
          <img src={TitleIcon} />
          <p>Title</p>
        </div>
      </div>
    </div>
  )
}

export { Sidebar }
