import React, { useState } from "react";

interface CounterProps {
  changeSummary: (prevValue: number, value: number) => void
}
 
const Counter: React.FC<CounterProps> = ({changeSummary}) => {
  const [count, setCount] = useState(0);

  const style = {
    width: 100,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0'
  }

  const calculate = (flag: 'increment' | 'decrement') => {
    const newCount = flag === 'increment' ? count + 1 : count - 1;
    setCount(newCount);
    changeSummary(count, newCount)
  }

  return <div style={style}>
    <button onClick={() => calculate('decrement')}>-</button>
    <span>{ count }</span>
    <button onClick={() => calculate('increment')}>+</button>
  </div>;
}
 
export default Counter
