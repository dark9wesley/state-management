import { ActionTypes } from '../actions'

const TodoReducer = (state: any[] = [], actions) => {
  switch (actions.type) {
    case ActionTypes.ADDTODO:
      return [actions.payload, ...state]
    case ActionTypes.REMOVETODO:
      return state.filter(todo => todo.id !== actions.payload)
    default :
      return state
  }
}

export default TodoReducer
