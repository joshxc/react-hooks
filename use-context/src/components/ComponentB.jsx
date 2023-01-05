//! HOOK VERSION
import React, { useContext } from 'react';
import ComponentC from './ComponentC';
import { UserContext, UserContext2 } from '../App';

function ComponentB() {
  const value1 = useContext(UserContext);
  const value2 = useContext(UserContext2);

  return (
    <>
      <div>
        <h4>Hooks:</h4>
        <p>UserContext value: {value1}</p>
        <p>UserContext2 value: {value2}</p>
      </div>
      <div>
        <ComponentC />
      </div>
    </>
  );
}

export default ComponentB;
