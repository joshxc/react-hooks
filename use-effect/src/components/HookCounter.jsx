import { useState, useEffect } from 'react';

function HookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // By default, useEffect runs on mount (first render), and after each re-render
  // useEffect takes an array as a second argument, and useEffect will only be called on first mount plus when the variables inside this array are updated/re-rendered
  useEffect(() => {
    console.log('useEffect - Updating document title');
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default HookCounter;
