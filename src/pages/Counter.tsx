// @ts-noCheck
import React, { useState, useEffect } from "react";
import CounterStore from '../store/counterStore';
import { increment, decrement } from '../store/actions'

interface CounterProps {
  counterCaption: string
}


const Counter: React.FC<CounterProps> = ({ counterCaption }) => {
  const getValue = () => CounterStore.getCounterValues()[counterCaption]

  const [count, setCount] = useState(getValue());

  const style = {
    width: 100,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0'
  }

  const calculate = (flag: 'increment' | 'decrement') => {
    if (flag === 'increment') {
      increment(counterCaption)
    } else {
      decrement(counterCaption)
    }
  }

  const eventListener = () => setCount(getValue())

  useEffect(() => {
    CounterStore.addChangeListener(eventListener);

    return () => {
      CounterStore.removeChangeListener(eventListener);
    }
  })

  return <div style={style}>
    <button onClick={() => calculate('decrement')}>-</button>
    <span>{ count }</span>
    <button onClick={() => calculate('increment')}>+</button>
  </div>;
}
 
export default Counter
