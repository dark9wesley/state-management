export interface IState {
  todoList: [{
    id: number,
    text: string,
    completed: boolean,
  }] | []
}

export interface IAction {
  type: string,
  payload: any,
}
