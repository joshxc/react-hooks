import ComponentA from './components/ComponentA';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Data passed as props through to ComponentC */}
      <ComponentA />
    </div>
  );
}

export default App;
