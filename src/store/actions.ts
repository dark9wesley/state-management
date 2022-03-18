import { DECREMENT, INCREMENT } from "./actionType"

export const increment = (name: string) => {
  return {
    type: INCREMENT,
    name,
  }
}

export  const decrement = (name: string) => {
  return {
    type: DECREMENT,
    name
  }
}
