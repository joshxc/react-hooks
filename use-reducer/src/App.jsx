import React from 'react';
import SimpleReducerCounter from './components/SimpleReducerCounter';
import ComplexReducerCounter from './components/ComplexReducerCounter';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* <SimpleReducerCounter /> */}
      <ComplexReducerCounter />
    </div>
  );
}

export default App;
