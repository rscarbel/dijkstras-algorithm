import Node from './Node';
import sampleGraph from './sampleGraph';
import Line from './Line';

const GraphDisplay = () => {
  let nodes = Object.keys(sampleGraph.nodes);
  const generateNumber = (max,min) => Math.floor((Math.random() * max) + min);
  let height = window.innerHeight - 50;
  let horizontalSpacing = window.innerWidth / nodes.length
  let horizontal = 0;
  let verticle = height/2;
  let domNodes = [];
  let domNodesByKey = {};
  return <>
    {nodes.forEach(e => {
            let change = generateNumber((height/3),50)
            if ((verticle - change) < 50) {
              verticle += change;
            }
            else if ((verticle + change) > (height - 50)){
              verticle -= change;
            } else {
              if (generateNumber(2,0)) {
                verticle += change;
              } else {
                verticle -= change;
              }
            }
            horizontal += generateNumber(horizontalSpacing,26);
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
            lines.push(<Line left1={startingX} left2={startingY} right1={endingX} right2={endingY} weight={sampleGraph.nodes[e.props.name][i]} width={parseInt(sampleGraph.nodes[e.props.name][i]) ** 1.1} />)
          })
          return lines;
        })}
        {domNodes}
  </>

}

export default GraphDisplay