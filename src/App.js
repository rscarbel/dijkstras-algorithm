import GraphDisplay from './components/GraphDisplay';
import './App.css';
import TopBar from './components/TopBar';
import {useState } from 'react';
import DijkstrasAlorithm from './scripts/DijkstrasAlgorithm';
import randomGraph from './scripts/randomGraph';

function App() {
  const theGraph = randomGraph;
  const [graph, setGraph] = useState(<GraphDisplay displayedGraph={theGraph} />)
  const reloadGraph = () => {
    setGraph(<GraphDisplay displayedGraph={theGraph} />);
  }
  let keys = []
  for (let key in theGraph.nodes) {
    keys.push(key)
  }
  let shortestPath = DijkstrasAlorithm(theGraph,keys[0],keys[keys.length - 1]);
  const [startNode, setStartNode] = useState(keys[0]);
  const [endNode, setEndNode] = useState(keys[keys.length - 1]);
  const path = shortestPath[0].print() ? shortestPath[0].print().join(' --> ') : 'No Path Exists';
  return (
    <div className="App">
        <div className='relative-container'>
          <TopBar startNode={startNode} endNode={endNode} path={path} reloadAction={reloadGraph} />
          {graph}
          {console.log(theGraph)}
          {console.log(shortestPath)}
      </div>
    </div>
  );
}

export default App;
