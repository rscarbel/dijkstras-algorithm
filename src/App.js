import { useRef, React } from 'react';
import Node from './components/Node';
import './App.css';
import sampleGraph from './components/sampleGraph';
import Line from './components/Line';

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
            let change = generateNumber(110,75)
            if (verticle < 120) {
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
            horizontal += generateNumber(60,27);
            return <Node name={e} x={horizontal} y={verticle} />
        })}
        <Line left1={20} left2={20} right1={450} right2={450} />
      </div>
    </div>
  );
}

export default App;
