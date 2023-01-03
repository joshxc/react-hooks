import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import ObjectState from './components/ObjectState';
import ArrayState from './components/ArrayState';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <ObjectState />
      <ArrayState />
    </div>
  );
}

export default App;
