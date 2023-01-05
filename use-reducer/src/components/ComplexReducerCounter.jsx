import React, { useReducer } from 'react';

const initialState = {
  firstCounter: 0,
  secondCounter: 999999,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function ComplexReducerCounter() {
  // useReducer returns the current state, and dispatch method to call actions in the reducer()
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h2>First counter: {count.firstCounter}</h2>
        <button onClick={() => dispatch({ type: 'decrement', value: 10 })}>-10</button>
        <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>-1</button>
        <button onClick={() => dispatch({ type: 'increment', value: 1 })}>+1</button>
        <button onClick={() => dispatch({ type: 'increment', value: 10 })}>+10</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
      <div>
        <h2>Second counter: {count.secondCounter}</h2>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1000 })}>-10,000</button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>-1</button>
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>+1</button>
        <button onClick={() => dispatch({ type: 'increment2', value: 10000 })}>+10,000</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  );
}

export default ComplexReducerCounter;
