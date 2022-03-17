// @ts-noCheck
import * as ActionTypes from './actionTypes';
import dispatcher from './dispatcher';

export const increment = (counterCaption) => {
  dispatcher.dispatch({
    type: ActionTypes.INCREMENT,
    counterCaption
  });
}

export const decrement = (counterCaption) => {
  dispatcher.dispatch({
    type: ActionTypes.DECREMENT,
    counterCaption
  })
}
