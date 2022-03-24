import { connect } from 'react-redux'
import { ActionsCreator } from '../actions';

interface TodoHeaderProps {
  addTodo: (todo: string) => void
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ addTodo }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const {code, currentTarget} = e
    const value = currentTarget.value.trim()
    if(code === 'Enter' && value) {
      addTodo(e.currentTarget.value)
      e.currentTarget.value = ''
    }
  }

  return (
    <div className="todo-header">
      <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={handleKeyDown}/>
    </div>
  );
}

const maoDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo: string) => {
      dispatch(ActionsCreator.addTodo(todo))
    }
  }
}

export default connect(null, maoDispatchToProps)(TodoHeader)
