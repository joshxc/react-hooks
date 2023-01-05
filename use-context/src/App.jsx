import React from 'react';
import ComponentA from './components/ComponentA';
import './App.css';

export const UserContext = React.createContext();
export const UserContext2 = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'123'}>
        <UserContext2.Provider value={'abc'}>
          <ComponentA />
        </UserContext2.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
