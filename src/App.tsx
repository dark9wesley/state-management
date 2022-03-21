import TodoFooter from "./pages/TodoFooter"
import TodoHeader from "./pages/TodoHeader"
import TodoList from "./pages/TodoList"
import "./App.css"


function App() {

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </div>
    </div>
  )
}

export default App
