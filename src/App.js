import GraphDisplay from './components/GraphDisplay';
import './App.css';
import TopBar from './components/TopBar';
import {useState } from 'react';
import DijkstrasAlorithm from './scripts/DijkstrasAlgorithm';
import randomGraph from './scripts/randomGraph';
import verticalLocations from './scripts/verticalLocations';
import horizontalLocations from './scripts/horizontalLocations';

let graph = randomGraph();
// let fullPath = []

function App() {
  let nodeAmount = Object.keys(graph.nodes).length

  const reloadGraph = () => {
    graph = randomGraph();
    // fullPath = []
    nodeAmount = Object.keys(graph.nodes).length;

    generateVerticalCoordinates(nodeAmount);
    generateHorizontalCoordinates(nodeAmount);
    newPathing()
  };

  const newPathing = () => {
    setStartNode('')
    setEndNode('')
    shortestPath = DijkstrasAlorithm(graph,'','');
    setPath(null);
  }



  let shortestPath = DijkstrasAlorithm(graph,'','');

  const [startNode, setStartNode] = useState('');

  const selectStartNode = (newNode) => {
    setStartNode(newNode)
  }

  const [endNode, setEndNode] = useState('');

  const selectEndNode = (newNode) => {
    setEndNode(newNode);
    shortestPath = DijkstrasAlorithm(graph,startNode,newNode);
      setPath(shortestPath[0]);
  }

  const [verticalCoordinates, setVerticalCoordinates] = useState(verticalLocations(nodeAmount));

  const generateVerticalCoordinates = () => {
    setVerticalCoordinates(verticalLocations(nodeAmount))
  };

  const [horizontalCoordinates, setHorizontalCoordinates] = useState(horizontalLocations(nodeAmount));


  const generateHorizontalCoordinates = () => {
    setHorizontalCoordinates(horizontalLocations(nodeAmount))
  };

  const clearSelections = (start,end) => {
    // fullPath = []
    setPath('')
    setStartNode('');
    setEndNode('');
  }

  const [path, setPath] = useState(null)

  return (
    <div className="App">
      <TopBar
        startNode={startNode}
        clearSelections={clearSelections}
        endNode={endNode}
        path={path}
        reloadAction={reloadGraph}
      />

      <GraphDisplay
        displayedGraph={graph}
        path={path}
        verticalLocations={verticalCoordinates}
        horizontalLocations={horizontalCoordinates}
        clearSelections={clearSelections}
        startNode={startNode}
        endNode={endNode}
        selectStartNode={selectStartNode}
        selectEndNode={selectEndNode}
      />
    </div>
  );
}

export default App;
