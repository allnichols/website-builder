import "./App.css"
import { DndContext } from "@dnd-kit/core"
import { Sidebar } from "./components/sidebar/sidebar"
import { MainContent } from "./components/main-content/mainContent"

const App = () => {
  return (
    <div className="App">
      <header className="header">Header</header>
      <DndContext>
        <Sidebar />
        <MainContent />
      </DndContext>
    </div>
  )
}

export default App
