import { v4 as uuid } from 'uuid';
import { ActionTypes } from ".";

export const addTodo = (text: string) => ({
  type: ActionTypes.ADDTODO,
  payload: {
    id: uuid(),
    completed: false,
    text,
  }
})
