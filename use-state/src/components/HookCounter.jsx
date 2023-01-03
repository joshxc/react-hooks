import { useState } from 'react';

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div className="count">{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default HookCounter;
