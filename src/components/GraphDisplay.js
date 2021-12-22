import Node from './Node';
import Line from './Line';

const GraphDisplay = ({
  verticalLocations,
  horizontalLocations,
  displayedGraph,
  selectionMode,
  toggleSelectionMode,
  selectStartNode,
  selectEndNode
  }) => {

  let nodes = Object.keys(displayedGraph.nodes);

  let domNodes = [];
  let domNodesByKey = {};
  const lines = [];
  let nodePositionCounter = 0;

  return <>
    {nodes.forEach(e => {

      domNodes.push(<Node
        selectionMode={selectionMode}
        toggleSelectionMode={toggleSelectionMode}
        selectStartNode={selectStartNode}
        selectEndNode={selectEndNode}
        key={e}
        name={e}
        x={horizontalLocations[nodePositionCounter]}
        y={verticalLocations[nodePositionCounter]}
        />)

      domNodesByKey[e] = {}
      domNodesByKey[e].x = horizontalLocations[nodePositionCounter];
      domNodesByKey[e].y = verticalLocations[nodePositionCounter];
      nodePositionCounter++
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