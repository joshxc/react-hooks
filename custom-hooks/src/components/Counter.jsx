import React from 'react';
import useCounter from '../hooks/useCounter';

// destructure props
function Counter2({ initialValue = 0, stepValue = 1 }) {
  // easily create a counter in any component with this custom hook
  // useCounter(initialValue, stepValue)
  const [count, increment, decrement, reset] = useCounter(initialValue, stepValue);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter2;
