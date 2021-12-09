import React from 'react';
import Node from './components/Node';
import './App.css';
import sampleGraph from './components/sampleGraph';

function App() {
  let nodes = Object.keys(sampleGraph.nodes);
  const generateNumber = () => Math.floor((Math.random() * 400) + 50);
  return (
    <div className="App">
        {console.log(JSON.stringify(sampleGraph))}
        <div className='relative-container'>
          <h1>Dikstra's Algorithm</h1>
          {nodes.map(e => {
            return <Node name={e} x={generateNumber()} y={generateNumber()} />
        })}
      </div>
    </div>
  );
}

export default App;
