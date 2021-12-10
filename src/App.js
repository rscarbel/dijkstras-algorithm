import React from 'react';
import Node from './components/Node';
import './App.css';
import sampleGraph from './components/sampleGraph';

function App() {
  let nodes = Object.keys(sampleGraph.nodes);
  const generateNumber = (max,min) => Math.floor((Math.random() * max) + min);
  let horizontal = 0;
  let verticle = 200;
  return (
    <div className="App">
        {console.log(JSON.stringify(sampleGraph))}
        <div className='relative-container'>
          <h1>Dikstra's Algorithm</h1>
          {nodes.map(e => {
            let change = generateNumber(100,75)
            if (verticle < 75) {
              verticle += change;
            }
            else if (verticle > 200){
              verticle -= change;
            } else {
              if (generateNumber(1.99,1)) {
                verticle += change;
              } else {
                verticle -= change;
              }
            }
            horizontal += 50;
            return <Node name={e} x={horizontal} y={verticle} />
        })}
      </div>
    </div>
  );
}

export default App;
