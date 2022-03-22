import { ActionTypes } from '../actions'

const TodoReducer = (state = [], actions) => {
  switch (actions.type) {
    case ActionTypes.ADDTODO:
      return [actions.payload, ...state]
    default :
      return state
  }
}

export default TodoReducer
