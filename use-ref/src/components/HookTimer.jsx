import React, { useState, useEffect, useRef } from 'react';

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  // Exact same setup as in ClassTimer, except using useEffect hook here
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="container">
      Hook Timer: {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Clear</button>
    </div>
  );
}

export default HookTimer;
