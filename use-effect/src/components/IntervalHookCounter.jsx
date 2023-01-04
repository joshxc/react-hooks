import { useState, useEffect } from 'react';

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    // return statement to match functionality of componentWillUnmount
    return () => {
      clearInterval(interval);
    };
    // dependency array tells React what to watch for changes
  }, [count]);

  //! Another method without dependency array - use prevCount in setCount
  // const tick = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // useEffect(() => {
  //   const interval = setInterval(tick, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  return <h3>{count}</h3>;
}

export default IntervalHookCounter;
