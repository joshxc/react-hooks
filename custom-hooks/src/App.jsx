import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter initialValue={10} stepValue={10} />
      <Counter initialValue={100} stepValue={100} />
    </div>
  );
}

export default App;
