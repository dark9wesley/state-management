import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import TodoListItem from './TodoListItem'

interface TodoListProps {
  todoList: Record<string, any>[]
}

const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
  return (
    <ul className="todo-main">
      <TransitionGroup>
        {todoList.map((todo) => {
          return (
            <CSSTransition key={todo.id} timeout={500} classNames="item">
              <TodoListItem todo={todo}/>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
}
 
export default connect(mapStateToProps)(TodoList)
