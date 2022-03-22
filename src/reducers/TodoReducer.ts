import { ActionTypes } from '../actions'

const TodoReducer = (state: any[] = [], actions) => {
  switch (actions.type) {
    case ActionTypes.ADDTODO:
      return [actions.payload, ...state]
    case ActionTypes.REMOVETODO:
      return state.filter(todo => todo.id !== actions.payload)
    case ActionTypes.COMPLETEDTODO:
      return state.map(todo => ({...todo, completed: todo.id === actions.payload ? !todo.completed : todo.completed}))
    case ActionTypes.EDITTODO:
      const {id, text} = actions.payload
      return state.map(todo => ({...todo, text: todo.id === id ? text : todo.text}))
    case ActionTypes.COMPLETEDALLTODO:
      return state.map(todo => ({...todo, completed: actions.payload}))
    case ActionTypes.CLEARCOMPLETEDTODO:
      console.log('1111')
      return state.filter(todo => !todo.completed)
    default :
      return state
  }
}

export default TodoReducer
