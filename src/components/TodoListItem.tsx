import { useState } from "react";
import { connect } from "react-redux";
import { ActionsCreator } from "../actions";

interface TodoListItemProps {
  todo: Record<string, any>,
  removeTodo: () => void,
  completedTodo: () => void,
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, removeTodo, completedTodo }) => {
  const [isEdit, setIsEdit] = useState(false)

  const handleEdit = () => setIsEdit(!isEdit)

  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={completedTodo}/>
        {isEdit ? <input type="text" /> : <span>{ todo.text }</span>}
      </label>
      {!isEdit && <button className="btn btn-danger" onClick={removeTodo}>删除</button>}
      {!isEdit && <button className="btn btn-edit" onClick={handleEdit}>编辑</button>}
    </li>
  );
}

const maoDispatchToProps = (dispatch, { todo }) => {
  return {
    removeTodo: () => {dispatch(ActionsCreator.removeTodo(todo.id))},
    completedTodo: () => {dispatch(ActionsCreator.completedTodo(todo.id))}
  }
}
 
export default connect(null, maoDispatchToProps)(TodoListItem)
