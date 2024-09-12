import "./App.css"
import { DndContext } from "@dnd-kit/core"
import { Sidebar } from "./components/sidebar/sidebar"

const App = () => {
  return (
    <div className="App">
      <header className="header">Header</header>
      <DndContext>
        <Sidebar />
        <main className="content"></main>
      </DndContext>
    </div>
  )
}

export default App
