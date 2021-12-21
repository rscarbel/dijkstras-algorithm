import Node from './Node';
import Line from './Line';
// import { useState } from 'react';

const GraphDisplay = ({displayedGraph}) => {

  let nodes = Object.keys(displayedGraph.nodes);

  const generateNumber = (max,min) => Math.ceil((Math.random() * (max - min + 1)) + min);

  //I subtracted 100 to account for the title text
  let height = window.innerHeight - 100;

  let horizontalSpacing = (window.innerWidth / nodes.length) - (200 / nodes.length)

  let xCoordinate = 0;

  let yCoordinate = 0;

  let domNodes = [];
  let domNodesByKey = {};
  const lines = [];

  return <>
    {nodes.forEach(e => {

      let distanceToWindowEdge = yCoordinate < (height / 2)
      ? height - yCoordinate - 50
      : yCoordinate - 150

      //Anything less than this just isn't interesting, and anything more starts to be too predictable
      let minimumVerticalChange = height / 3.2 > 100
      ? height / 5
      : 100

      let verticalChange = generateNumber(distanceToWindowEdge, minimumVerticalChange)
      //keep nodes from being created above the top of the page
      if ((yCoordinate - verticalChange) < 100) {
        yCoordinate += verticalChange;
      }
      //keep nodes from being created below the bottom of the page
      else if ((yCoordinate + verticalChange) > (height - 100)){
        yCoordinate -= verticalChange;
      } else {
        if (generateNumber(1,0)) {
          yCoordinate += verticalChange;
        } else {
          yCoordinate -= verticalChange;
        }
      }

      xCoordinate += generateNumber(horizontalSpacing,100);

      domNodes.push(<Node key={e} name={e} x={xCoordinate} y={yCoordinate} />)

      domNodesByKey[e] = {}
      domNodesByKey[e].x = xCoordinate;
      domNodesByKey[e].y = yCoordinate;

        })}

        {/* Now to add the connecting lines */}
        {domNodes.forEach(e => {
          const connectedNodes = Object.keys(displayedGraph.nodes[e.props.name].outgoingConnections);
          //I added 50 to the starting x & y values to place it in the center of the circle
          let startingX = parseInt(e.props.x) + 50;
          let startingY = parseInt(e.props.y) + 50;

          connectedNodes.forEach(i => {

            const weight = displayedGraph.nodes[e.props.name].outgoingConnections[i];

            let endingX = parseInt(domNodesByKey[i].x) + 50;

            let endingY = parseInt(domNodesByKey[i].y) + 50;

            //Check if the key is aready there
            //then check to see if a line has already been drawn in the reverse direction
            //finally, make sure the connection doesn't have a weight of 0
            if (lines.every(j => (j.key !== (`${startingX},${endingX}`)) && (j.key !== (`${endingX},${startingX}`))) && weight) {

              lines.push(<Line
                key={`${startingX},${endingX}`}
                startingX={startingX}
                startingY={startingY}
                endingX={endingX}
                endingY={endingY}
                weight={weight}
                width={parseInt(weight) ** 1.1} />)
            }
          })
        })}
        {lines}
        {domNodes}
  </>

}

export default GraphDisplay