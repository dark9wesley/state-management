import { connect } from "react-redux";
import { ActionsCreator } from "../actions";

interface TodoFooterProps {
  completedNum: number,
  totalNum: number,
  completedAll: (flag: boolean) => void,
  clearCompletedTodo: () => void,
}

const TodoFooter: React.FC<TodoFooterProps> = ({ completedNum, totalNum, completedAll, clearCompletedTodo }) => {

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const flag = e.target.checked
    completedAll(flag)
  }

  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" onChange={handleCheckBoxChange}/>
      </label>
      <span>
        <span>已完成{completedNum}</span> / 全部{totalNum}
      </span>
      <button className="btn btn-danger" onClick={clearCompletedTodo}>清除已完成任务</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    completedNum: state.todoList.filter(todo => todo.completed).length,
    totalNum: state.todoList.length,
  }
}

const maoDispatchToProps = (dispatch) => {
  return {
    completedAll: (flag: boolean) => dispatch(ActionsCreator.completedAllTodo(flag)),
    clearCompletedTodo: () => dispatch(ActionsCreator.clearCompletedTodo()),
  }
}

export default connect(mapStateToProps, maoDispatchToProps)(TodoFooter)
