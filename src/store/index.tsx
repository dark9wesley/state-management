import React, { createContext } from 'react'
import { createStore } from 'redux'
import reducer from './reducer'

const initState = {
  'First': 0,
  'Second': 10,
  'Third': 20,
}


const store = createStore(reducer, initState)

export default store

