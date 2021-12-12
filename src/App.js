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
  let domNodes = [];
  let domNodesByKey = {};
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
            horizontal += generateNumber(50,26);
            domNodes.push(<Node key={e} name={e} x={horizontal} y={verticle} />)
            domNodesByKey[e] = {}
            domNodesByKey[e].x = horizontal;
            domNodesByKey[e].y = verticle;

        })}
        {domNodes.map(e => {
          const lines = []
          const connectedNodes = Object.keys(sampleGraph.nodes[e.props.name]);
          connectedNodes.splice(connectedNodes.indexOf('incomingNodes'),1);
          let startingX = parseInt(e.props.x) + 25;
          let startingY = parseInt(e.props.y) + 25;
          connectedNodes.forEach(i => {
            let endingX = parseInt(domNodesByKey[i].x) + 25;
            let endingY = parseInt(domNodesByKey[i].y) + 25;
            lines.push(<Line left1={startingX} left2={startingY} right1={endingX} right2={endingY} width={parseInt(sampleGraph.nodes[e.props.name][i]) ** 1.1} />)
          })
          return lines;
        })}
        {domNodes}
      </div>
    </div>
  );
}

export default App;
