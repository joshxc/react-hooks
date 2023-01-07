//! useCounter hook:
// sets up basic logic for a counter and returns an array to access the `count` and the methods to manipulate it

import { useState } from 'react';

function useCounter(initialCount = 0, stepValue = 1) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + stepValue);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - stepValue);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return [count, increment, decrement, reset];
}

export default useCounter;
