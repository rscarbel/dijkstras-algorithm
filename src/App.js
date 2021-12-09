import React from 'react';
import Node from './components/Node';
import './App.css';
import sampleGraph from './components/sampleGraph';

function App() {
  let nodes = Object.keys(sampleGraph.nodes)
  return (
    <div className="App">
      <h1>Dikstra's Algorithm</h1>
    {nodes.map(e => {
      return <Node name={e} />
    })}
    </div>
  );
}

export default App;
