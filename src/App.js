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

  const [startNode, setStartNode] = useState(keys[0]);

  const selectStartNode = (newNode) => {
    setStartNode(newNode)
  }

  const [endNode, setEndNode] = useState(keys[keys.length - 1]);

  const selectEndNode = (newNode) => {
    setEndNode(newNode)
  }

  const [selectionMode, setSelectionMode] = useState(false);

  const toggleSelectionMode = () => {
    setSelectionMode(!selectionMode)
  }

  const path = shortestPath[0] ? shortestPath[0].print().join(' --> ') : 'No Path Exists';

  return (
    <div className="App">
      <TopBar
        startNode={startNode}
        selectionMode={selectionMode}
        toggleSelectionMode={toggleSelectionMode}
        endNode={endNode}
        path={path}
        reloadAction={reloadGraph}
      />

      <GraphDisplay
        displayedGraph={graph}
        selectionMode={selectionMode}
        toggleSelectionMode={toggleSelectionMode}
        selectStartNode={selectStartNode}
        selectEndNode={selectEndNode}
      />

      {console.log(graph)}
      {console.log(shortestPath)}
    </div>
  );
}

export default App;
