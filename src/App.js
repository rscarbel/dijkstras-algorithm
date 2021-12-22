import GraphDisplay from './components/GraphDisplay';
import './App.css';
import TopBar from './components/TopBar';
import {useState } from 'react';
import DijkstrasAlorithm from './scripts/DijkstrasAlgorithm';
import randomGraph from './scripts/randomGraph';

function App() {

  const [graph, setGraph] = useState(randomGraph());

  const reloadGraph = () => {
    setGraph(randomGraph());
  };

  let keys = [];

  for (let key in graph.nodes) {
    keys.push(key)
  };

  let shortestPath = DijkstrasAlorithm(graph,keys[0],keys[keys.length - 1]);
  // const [startNode, setStartNode] = useState(keys[0]);
  const startNode = keys[0];
  // const [endNode, setEndNode] = useState(keys[keys.length - 1]);
  const endNode = keys[keys.length - 1];

  const path = shortestPath[0] ? shortestPath[0].print().join(' --> ') : 'No Path Exists';

  return (
    <div className="App">
        <div className='relative-container'>
          <TopBar startNode={startNode} endNode={endNode} path={path} reloadAction={reloadGraph} />
          <GraphDisplay displayedGraph={graph} />
          {console.log(graph)}
          {console.log(shortestPath)}
      </div>
    </div>
  );
}

export default App;
