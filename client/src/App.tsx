import "./App.css"
import { Sidebar } from "./components/sidebar/sidebar"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <Sidebar />
    </div>
  )
}

export default App
