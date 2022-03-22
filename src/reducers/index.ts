import { combineReducers } from 'redux'
import TodoReducer from "./TodoReducer"

const reducer = combineReducers({
  todoList: TodoReducer,
})

export default reducer
