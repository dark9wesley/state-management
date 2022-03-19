import React, { createContext } from 'react'
import { createStore } from 'redux'
import reducer from './reducer'

const initState = {
  'First': 0,
  'Second': 10,
  'Third': 20,
}


const store = createStore(reducer, initState)

export const MainContext = createContext(store)

const StoreProvider: React.FC = ({ children }) => {
  return (
    <MainContext.Provider value={store}>
      {children}
    </MainContext.Provider>
  )
}

export default StoreProvider

