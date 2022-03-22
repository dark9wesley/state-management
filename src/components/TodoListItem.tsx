import { useState } from "react";
import { connect } from "react-redux";
import { ActionsCreator } from "../actions";

interface TodoListItemProps {
  todo: Record<string, any>,
  removeTodo: () => void
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, removeTodo }) => {

  const [isEdit, setIsEdit] = useState(false)

  const handleEdit = () => setIsEdit(!isEdit)

  return (
    <li>
      <label>
        <input type="checkbox"/>
        {isEdit ? <input type="text" /> : <span>{ todo.text }</span>}
      </label>
      {!isEdit && <button className="btn btn-danger" onClick={removeTodo}>删除</button>}
      {!isEdit && <button className="btn btn-edit" onClick={handleEdit}>编辑</button>}
    </li>
  );
}

const maoDispatchToProps = (dispatch, { todo }) => {
  return {
    removeTodo: () => {dispatch(ActionsCreator.removeTodo(todo.id))}
  }
}
 
export default connect(null, maoDispatchToProps)(TodoListItem)
