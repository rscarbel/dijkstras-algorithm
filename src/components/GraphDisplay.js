import Node from './Node';
import sampleGraph from './sampleGraph';
import Line from './Line';

const GraphDisplay = () => {

  let nodes = Object.keys(sampleGraph.nodes);

  //rng helper function for randomizing graph placement
  const generateNumber = (max,min) => Math.floor((Math.random() * max) + min);

  //subtract 50 or so from the height to account for the title text
  let height = window.innerHeight - 50;

  //Allow the largest possible spacing to be limited to screen width
  let horizontalSpacing = (window.innerWidth / nodes.length) - (50 / nodes.length)
  //Nodes should start being placed from left to right
  let horizontal = 0;
  //the starting vertical alignment will be calculated from a third of the way down the page.
  let vertical = height/3;
  //Keep the nodes in an array to display on the dom
  let domNodes = [];
  //I'll need to search the values of each node to make connecting lines, so keeping them in an object allows me to find the items using the node name
  let domNodesByKey = {};

  return <>

    {nodes.forEach(e => {
      //verticalChange  must be at least 50, because that is the height of the nodes themselves
      let verticalChange = generateNumber((height/3),50)
      //keep nodes from being created above the top of the page
      if ((vertical - verticalChange) < 50) {
        vertical += verticalChange;
      }
      //keep nodes from being created below the bottom of the page
      else if ((vertical + verticalChange) > (height - 50)){
        vertical -= verticalChange;
      } else {
        if (generateNumber(2,0)) {
          vertical += verticalChange;
        } else {
          vertical -= verticalChange;
        }
      }

      horizontal += generateNumber(horizontalSpacing,26);

      domNodes.push(<Node key={e} name={e} x={horizontal} y={vertical} />)

      domNodesByKey[e] = {}
      domNodesByKey[e].x = horizontal;
      domNodesByKey[e].y = vertical;

        })};

        {/* Now to add the connecting lines */}
        {domNodes.map(e => {
          const lines = []
          const connectedNodes = Object.keys(sampleGraph.nodes[e.props.name]);

          //One of the keys in each node object is an array keeping track of all nodes with incoming connections, I need to get rid of that since it's not something to connect
          connectedNodes.splice(connectedNodes.indexOf('incomingNodes'),1);
          //Add 25 to the starting x & y values to place it in the center of the circle
          let startingX = parseInt(e.props.x) + 25;
          let startingY = parseInt(e.props.y) + 25;
          //Now I need to iterate through each of the connections in the node to see what nodes I need to draw a line to
          connectedNodes.forEach(i => {
            let endingX = parseInt(domNodesByKey[i].x) + 25;
            let endingY = parseInt(domNodesByKey[i].y) + 25;

            lines.push(<Line startingX={startingX} startingY={startingY} endingX={endingX} endingY={endingY} weight={sampleGraph.nodes[e.props.name][i]} width={parseInt(sampleGraph.nodes[e.props.name][i]) ** 1.1} />)
          })
          return lines;
        })}
        {domNodes}
  </>

}

export default GraphDisplay