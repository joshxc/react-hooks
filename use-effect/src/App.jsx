import { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ClassCounter />
    </>
  );
}

export default App;
