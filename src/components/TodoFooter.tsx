import { connect } from "react-redux";

interface TodoFooterProps {
  completedNum: number,
  totalNum: number,
}

const TodoFooter: React.FC<TodoFooterProps> = ({ completedNum, totalNum }) => {
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox"/>
      </label>
      <span>
        <span>已完成{completedNum}</span> / 全部{totalNum}
      </span>
      <button className="btn btn-danger">清除已完成任务</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    completedNum: state.todoList.filter(todo => todo.completed).length,
    totalNum: state.todoList.length,
  }
}
 
export default connect(mapStateToProps)(TodoFooter)
