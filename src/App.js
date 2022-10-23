
import './App.css';
import UseEffect from './hooks/UseEffect';
import UseMemo from './hooks/UseMemo';
import UseRef from './hooks/UseRef';
import UseState from './hooks/UseState';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <UseState />
      <br></br>
      <UseEffect />
      <br></br>
      <UseRef />
      <br></br>
      <UseMemo />
    </div>
  );
}

export default App;
