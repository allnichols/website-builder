import "./App.css"
import { DndContext, MouseSensor, useSensor } from "@dnd-kit/core"
import { Sidebar } from "./components/sidebar/sidebar"
import { MainContent } from "./components/main-content/mainContent"
import { useAppDispatch } from "./app/hooks"

import { addToTree, setTree } from "./features/canvas/canvasSlice"
const App = () => {
  const mouseSensor = useSensor(MouseSensor)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <header className="header">Header</header>
      <DndContext
        sensors={[mouseSensor]}
        onDragEnd={e => {
          console.log(e.active.data.current)
          dispatch(addToTree(e.active.data.current))
        }}
      >
        <Sidebar />
        <MainContent />
      </DndContext>
    </div>
  )
}

export default App
