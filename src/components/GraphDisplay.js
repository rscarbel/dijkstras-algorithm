import Node from './Node';
import randomGraph from '../scripts/randomGraph';
import Line from './Line';

const GraphDisplay = () => {

  let nodes = Object.keys(randomGraph.nodes);

  const generateNumber = (max,min) => Math.ceil((Math.random() * (max - min + 1)) + min);

  //I subtracted 50 to account for the title text
  let height = window.innerHeight - 50;

  let horizontalSpacing = (window.innerWidth / nodes.length) - (50 / nodes.length)

  let xCoordinate = 0;

  let yCoordinate = height/3;

  let domNodes = [];
  let domNodesByKey = {};
  const lines = [];

  return <>
    {console.log(randomGraph)}
    {nodes.forEach(e => {
      //verticalChange must be at least 50, because that is the height of the nodes
      let verticalChange = generateNumber((height/3),50)
      //keep nodes from being created above the top of the page
      if ((yCoordinate - verticalChange) < 50) {
        yCoordinate += verticalChange;
      }
      //keep nodes from being created below the bottom of the page
      else if ((yCoordinate + verticalChange) > (height - 50)){
        yCoordinate -= verticalChange;
      } else {
        if (generateNumber(1,0)) {
          yCoordinate += verticalChange;
        } else {
          yCoordinate -= verticalChange;
        }
      }

      xCoordinate += generateNumber(horizontalSpacing,26);

      domNodes.push(<Node key={e} name={e} x={xCoordinate} y={yCoordinate} />)

      domNodesByKey[e] = {}
      domNodesByKey[e].x = xCoordinate;
      domNodesByKey[e].y = yCoordinate;

        })}

        {/* Now to add the connecting lines */}
        {domNodes.forEach(e => {

          const connectedNodes = Object.keys(randomGraph.nodes[e.props.name]);

          //incomingNodes isn't a connection, so I need to remove it
          connectedNodes.splice(connectedNodes.indexOf('incomingNodes'),1);
          //I added 25 to the starting x & y values to place it in the center of the circle
          let startingX = parseInt(e.props.x) + 25;
          let startingY = parseInt(e.props.y) + 25;

          connectedNodes.forEach(i => {

            const weight = randomGraph.nodes[e.props.name][i];

            let endingX = parseInt(domNodesByKey[i].x) + 25;

            let endingY = parseInt(domNodesByKey[i].y) + 25;

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