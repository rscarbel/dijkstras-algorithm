import GraphDisplay from './components/GraphDisplay';
import './App.css';
import TopBar from './components/TopBar';
import { useState } from 'react';
import dijkstrasAlgorithm, {
  PathInterface,
} from './scripts/dijkstrasAlgorithm';
import randomGraph from './scripts/randomGraph';
import verticalLocations from './scripts/verticalLocations';
import horizontalLocations from './scripts/horizontalLocations';

let graph = randomGraph();

function App() {
  let nodeAmount: number = Object.keys(graph.nodes).length;
  let shortestPath: PathInterface = dijkstrasAlgorithm(graph, '', '');
  const [startNode, setStartNode] = useState('');
  const [endNode, setEndNode] = useState('');
  const [path, setPath] = useState<string[]>([]);
  const [totalWeight, setTotalWeight] = useState(0);

  const reloadGraph = () => {
    graph = randomGraph();
    nodeAmount = Object.keys(graph.nodes).length;

    generateVerticalCoordinates();
    generateHorizontalCoordinates();
    newPathing();
  };

  const newPathing = () => {
    setStartNode('');
    setEndNode('');
    shortestPath = dijkstrasAlgorithm(graph, '', '');
    setPath([]);
    setTotalWeight(0);
  };

  const selectStartNode = (newNode: string) => {
    setStartNode(newNode);
  };

  const selectEndNode = (newNode: string) => {
    setEndNode(newNode);
    shortestPath = dijkstrasAlgorithm(graph, startNode, newNode);
    setTotalWeight(shortestPath.totalWeight);
    setPath(shortestPath.path);
  };

  const [verticalCoordinates, setVerticalCoordinates] = useState(
    verticalLocations(nodeAmount)
  );

  const generateVerticalCoordinates = () => {
    setVerticalCoordinates(verticalLocations(nodeAmount));
  };

  const [horizontalCoordinates, setHorizontalCoordinates] = useState(
    horizontalLocations(nodeAmount)
  );

  const generateHorizontalCoordinates = () => {
    setHorizontalCoordinates(horizontalLocations(nodeAmount));
  };

  const clearSelections = (start: string, end: string) => {
    setPath([]);
    setTotalWeight(0);
    setStartNode('');
    setEndNode('');
  };

  return (
    <div className="App">
      <TopBar
        startNode={startNode}
        clearSelections={clearSelections}
        endNode={endNode}
        path={path}
        reloadAction={reloadGraph}
        totalWeight={totalWeight}
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
