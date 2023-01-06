import React, { useState, useCallback } from 'react';
import Count from './Count';
import Button from './Button';
import Title from './Title';

//! useCallback is used to optimise performance.
//! - useCallback is a hook that will return a momoised version of the callback function that only change if one of the dependencies has changed
//! - it is useful when passing callbacks to optimised child components that rely on rely on reference equality to prevent unnecessary renders.

function ParentComponent() {
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
