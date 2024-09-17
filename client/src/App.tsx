import "./App.css"
import { DndContext, MouseSensor, useSensor } from "@dnd-kit/core"
import { Sidebar } from "./components/sidebar/sidebar"
import { MainContent } from "./components/main-content/mainContent"

const App = () => {
  const mouseSensor = useSensor(MouseSensor)

  return (
    <div className="App">
      <header className="header">Header</header>
      <DndContext
        sensors={[mouseSensor]}
        onDragEnd={e => {
          console.log(e)
        }}
      >
        <Sidebar />
        <MainContent />
      </DndContext>
    </div>
  )
}

export default App
