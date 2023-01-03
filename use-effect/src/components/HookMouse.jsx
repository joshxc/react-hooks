import { useState, useEffect } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log('Mouse event');
    setX(e.clientX);
    setY(e.clientY);
  };

  // An empty array argument is the same behaviour as componentDidMount in ClassMouse.jsx. We only want to add the event listener once, on mount.
  useEffect(() => {
    console.log('useEffect mount');
    window.addEventListener('mousemove', logMousePosition);
    // Whatever our callback function returns will be run on component unmount
    return () => {
      console.log('useEffect unmount');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  return (
    <div>
      <span>x: {x}</span>, <span>y: {y}</span>
    </div>
  );
}

export default HookMouse;
