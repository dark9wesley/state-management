import TodoFooter from "./components/TodoFooter"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"
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
