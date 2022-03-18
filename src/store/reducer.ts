import { DECREMENT, INCREMENT } from "./actionType"

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        [action.name]: state[action.name] + 1,
      }
    case DECREMENT:
      return {
        ...state,
        [action.name]: state[action.name] - 1,
      }
    default:
      return state
  }
}

export default reducer
