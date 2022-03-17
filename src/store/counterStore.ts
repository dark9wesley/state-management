// @ts-noCheck
import * as ActionTypes from './actionTypes';
import dispatcher from './dispatcher';
import { EventEmitter } from 'events';

const CounterValues = {
  'First': 0,
  'Second': 10,
  'Third': 20,
}

const CHANGE_EVENT = 'change';

const counterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues(){
    return CounterValues;
  },
  emitChange(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }
})

counterStore.dispatchToken = dispatcher.register((action) => {
  if(action.type === ActionTypes.INCREMENT){
    CounterValues[action.counterCaption] += 1;
    counterStore.emitChange();
  }

  if(action.type === ActionTypes.DECREMENT){
    CounterValues[action.counterCaption] -= 1;
    counterStore.emitChange();
  }
})

export default counterStore


