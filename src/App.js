import GraphDisplay from './components/GraphDisplay';
import './App.css';
import sampleGraph from './components/sampleGraph';

function App() {

  return (
    <div className="App">
        {console.log(JSON.stringify(sampleGraph))}
        <div className='relative-container'>
          <h1>Dijkstra's Algorithm</h1>
          <GraphDisplay />
      </div>
    </div>
  );
}

export default App;
