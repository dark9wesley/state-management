import React, { useEffect, useState } from "react";
import store from '../store'
import { decrement, increment } from "../store/actions";

interface CounterProps {
  name: string;
}
 
const Counter: React.FC<CounterProps> = ({ name }) => {

  const [count, setCount] = useState(store.getState()[name])

  const style = {
    width: 100,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0'
  }

  const eventListener = () => setCount(store.getState()[name])

  useEffect(() => {
    const unSubscribe = store.subscribe(eventListener)
    return () => unSubscribe()
  }, [])

  return <div style={style}>
    <button onClick={() => store.dispatch(decrement(name))}>-</button>
    <span>{ count }</span>
    <button onClick={() => store.dispatch(increment(name))}>+</button>
  </div>;
}
 
export default Counter
