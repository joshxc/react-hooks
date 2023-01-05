import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function SimpleReducerCounter() {
  // useReducer returns the current state, and dispatch method to call actions in the reducer()
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch('decrement')}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
}

export default SimpleReducerCounter;
