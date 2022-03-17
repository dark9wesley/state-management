// @ts-noCheck
import * as ActionTypes from './actionTypes';
import dispatcher from './dispatcher';
import { EventEmitter } from 'events';
import counterStore from './counterStore';

const CHANGE_EVENT = 'summaryChange';

const computedSummary = (values) => {
  let total = 0;
  for(let key in values){
    if(values.hasOwnProperty(key)){
      total += values[key];
    }
  }
  return total;
}

const summaryStore = Object.assign({}, EventEmitter.prototype, {
  getSummary(){
    return computedSummary(counterStore.getCounterValues())
  },
  emitChange(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },
})

summaryStore.dispatchToken = dispatcher.register((action) => {
  if(action.type === ActionTypes.INCREMENT || action.type === ActionTypes.DECREMENT){
    dispatcher.waitFor([counterStore.dispatchToken]);
    summaryStore.emitChange()
  }
})

export default summaryStore;
