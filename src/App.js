import React, { useReducer } from "react";
import "./style.css";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

export default function App() {

  function reducer(state, action) {
    if(action.type === ACTIONS.INCREMENT) {
      return {count: state.count++}
    }

    if(action.type === ACTIONS.DECREMENT) {
      return {count: state.count--}
    }
  }

  const [state, dispatch] = useReducer(reducer, {count: 0});

  function decrement() {
    dispatch({type: ACTIONS.DECREMENT})
  }

  function increment() {
    dispatch({type: ACTIONS.INCREMENT})
  }

  return (
    <div>
      <button onClick={decrement}>-</button><span>{state.count}</span><button onClick={increment}>+</button>
    </div>
  );
}
