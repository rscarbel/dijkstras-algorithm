import GraphDisplay from './components/GraphDisplay';
import './App.css';
import TopBar from './components/TopBar';
import {useState } from 'react';
import DijkstrasAlorithm from './scripts/DijkstrasAlgorithm';
import randomGraph from './scripts/randomGraph';
import verticalLocations from './scripts/verticalLocations';
import horizontalLocations from './scripts/horizontalLocations';

let graph = randomGraph();
let keys = []
function App() {
  for (let key in graph.nodes) {
    keys.push(key)
  };
  let nodeAmount = Object.keys(graph.nodes).length

  const reloadGraph = () => {
    graph = randomGraph();
    nodeAmount = Object.keys(graph.nodes).length

    generateVerticalCoordinates(nodeAmount);
    generateHorizontalCoordinates(nodeAmount);
    newPathing()
  };

  const newPathing = () => {
    keys = [];
    for (let key in graph.nodes) {
      keys.push(key)
    };

    setStartNode(keys[0])
    setEndNode(keys[keys.length - 1])

    shortestPath = DijkstrasAlorithm(graph,keys[0],keys[keys.length - 1]);
    setPath(shortestPath[0] ? shortestPath[0].print().join(' --> ') : 'No Path Exists');
  }



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

  const [verticalCoordinates, setVerticalCoordinates] = useState(verticalLocations(nodeAmount));

  const generateVerticalCoordinates = () => {
    setVerticalCoordinates(verticalLocations(nodeAmount))
  };

  const [horizontalCoordinates, setHorizontalCoordinates] = useState(horizontalLocations(nodeAmount));


  const generateHorizontalCoordinates = () => {
    setHorizontalCoordinates(horizontalLocations(nodeAmount))
  };

  const toggleSelectionMode = () => {
    setSelectionMode(!selectionMode);
    shortestPath = DijkstrasAlorithm(graph,startNode,endNode);
    setPath(shortestPath[0] ? shortestPath[0].print().join(' --> ') : 'No Path Exists')
    if (!selectionMode) {
      setPath('')
      setStartNode('');
      setEndNode('');
    }
  }

  const [path, setPath] = useState(shortestPath[0] ? shortestPath[0].print().join(' --> ') : 'No Path Exists')

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
        verticalLocations={verticalCoordinates}
        horizontalLocations={horizontalCoordinates}
        selectionMode={selectionMode}
        toggleSelectionMode={toggleSelectionMode}
        selectStartNode={selectStartNode}
        selectEndNode={selectEndNode}
      />
    </div>
  );
}

export default App;
