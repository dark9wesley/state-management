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

export const removeTodo = (id: string) => ({
  type: ActionTypes.REMOVETODO,
  payload: id
})

export const completedTodo = (id: string) => ({
  type: ActionTypes.COMPLETEDTODO,
  payload: id
})

export const editTodo = (payload: {id: string, text: string}) => ({
  type: ActionTypes.EDITTODO,
  payload
})

export const completedAllTodo = (flag: boolean) => ({
  type: ActionTypes.COMPLETEDALLTODO,
  payload: flag
})
