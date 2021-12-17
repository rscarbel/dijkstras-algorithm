import GraphDisplay from './components/GraphDisplay';
import './App.css';
import TopBar from './components/TopBar';
// import {useState } from 'react';
import DijkstrasAlorithm from './scripts/DijkstrasAlgorithm';
import randomGraph from './scripts/randomGraph';

function App() {
  let keys = []
  for (let key in randomGraph.nodes) {
    keys.push(key)
  }
  let shortestPath = DijkstrasAlorithm(randomGraph,keys[0],keys[0])
  return (
    <div className="App">
        <div className='relative-container'>
          <TopBar />
          <GraphDisplay displayedGraph={randomGraph} />}
          {console.log(shortestPath)}
      </div>
    </div>
  );
}

export default App;
