import React, { useReducer } from "react";
import "./style.css";

export default function App() {

  function reducer(state, action) {
    if(action.type === 'increment') {
      return {count: state.count++}
    }

    if(action.type === 'decrement') {
      return {count: state.count--}
    }
  }

  const [state, dispatch] = useReducer(reducer, {count: 0});

  function decrement() {
    dispatch({type: 'decrement'})
  }

  function increment() {
    dispatch({type: 'increment'})
  }

  return (
    <div>
      <button onClick={decrement}>-</button><span>{state.count}</span><button onClick={increment}>+</button>
    </div>
  );
}
