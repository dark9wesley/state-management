import { useState } from "react";
import { connect } from "react-redux";
import { ActionsCreator } from "../actions";

interface TodoListItemProps {
  todo: Record<string, any>,
  removeTodo: () => void,
  completedTodo: () => void,
  editTodo: (text: string) => void,
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, removeTodo, completedTodo, editTodo }) => {
  const [isEdit, setIsEdit] = useState(false)

  const handleEdit = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    editTodo(value)
    setIsEdit(false)
  }

  return (
    <li>
      {isEdit ? (<input type="text" defaultValue={todo.text} onBlur={handleEdit} /> ) : (
        <>
           <label>
            <input type="checkbox" checked={todo.completed} onChange={completedTodo}/>
            <span>{ todo.text }</span>
          </label>
          <button className="btn btn-danger" onClick={removeTodo}>删除</button>
          <button className="btn btn-edit" onClick={() => setIsEdit(!isEdit)}>编辑</button>
        </>
      )}
    </li>
  );
}

const maoDispatchToProps = (dispatch, { todo }) => {
  return {
    removeTodo: () => {dispatch(ActionsCreator.removeTodo(todo.id))},
    completedTodo: () => {dispatch(ActionsCreator.completedTodo(todo.id))},
    editTodo: (text: string) => {dispatch(ActionsCreator.editTodo({ id: todo.id, text }))},
  }
}
 
export default connect(null, maoDispatchToProps)(TodoListItem)
