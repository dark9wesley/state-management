import React from "react";
import { connect } from 'react-redux'
import { decrement, increment } from "../store/actions";

 
const Counter: React.FC<any> = (props) => {

  const { count, increment, decrement } = props;

  const style = {
    width: 100,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0'
  }

  return <div style={style}>
    <button onClick={decrement}>-</button>
    <span>{ count }</span>
    <button onClick={increment}>+</button>
  </div>;
}
 
const mapState = (state: any, props: any) => ({
  count: state[props.name]
})

const mapDispatch = (dispatch: any, props: any) => ({
  increment: () => dispatch(increment(props.name)),
  decrement: () => dispatch(decrement(props.name)),
})

export default connect(mapState, mapDispatch)(Counter)
