import styles from "./sidebar.module.css"
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <p>Elements</p>
      <div className={styles["sidebar-section"]}>
        <div className={styles["sidebar-item"]}>
          <p>Title</p>
        </div>
      </div>
    </div>
  )
}

export { Sidebar }
