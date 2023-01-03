import { useState } from 'react';

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h4>Hook Counter: </h4>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default HookCounter;
