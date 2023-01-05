import React from 'react';
import { UserContext, UserContext2 } from '../App';

function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {(value1) => {
          return (
            <UserContext2.Consumer>
              {(value2) => {
                return (
                  <div>
                    <h4>Consumer:</h4>
                    <p>UserContext value: {value1}</p>
                    <p>UserContext2 value: {value2}</p>
                  </div>
                );
              }}
            </UserContext2.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentC;
