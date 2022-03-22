import { connect } from 'react-redux'
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todoList: Record<string, any>[]
}

const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
  return (
    <ul className="todo-main">
      {todoList.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo}/>
      })}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
}
 
export default connect(mapStateToProps)(TodoList)
