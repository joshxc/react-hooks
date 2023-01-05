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

function MultipleReducers() {
  // useReducer returns the current state, and dispatch method to call actions in the reducer()
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h3>Counter 1:</h3>
        <button onClick={() => dispatch('decrement')}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch('increment')}>+</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
      <div>
        <h3>Counter 1:</h3>
        <button onClick={() => dispatch2('decrement')}>-</button>
        <span>{count2}</span>
        <button onClick={() => dispatch2('increment')}>+</button>
        <button onClick={() => dispatch2('reset')}>Reset</button>
      </div>
    </div>
  );
}

export default MultipleReducers;
