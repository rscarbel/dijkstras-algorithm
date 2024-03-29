import Node from './Node';
import Line from './Line';
import React from 'react';
import Graph from '../dataStructures/graph';

const NODE_RADIUS_PX = 40;

interface GraphDisplayProps {
  verticalLocations: any;
  horizontalLocations: any;
  displayedGraph: Graph;
  clearSelections: Function;
  selectStartNode: Function;
  selectEndNode: Function;
  endNode: string;
  startNode: string;
  path: string[];
}

const GraphDisplay: React.FC<GraphDisplayProps> = ({
  verticalLocations,
  horizontalLocations,
  displayedGraph,
  clearSelections,
  selectStartNode,
  selectEndNode,
  endNode,
  startNode,
  path,
}) => {
  let solutionArray = path;

  let nodes = Object.keys(displayedGraph.nodes);

  let domNodes: JSX.Element[] = [];
  let domNodesByKey: any = {};
  const lines: JSX.Element[] = [];
  let nodePositionCounter = 0;

  return (
    <>
      {nodes.forEach((e) => {
        domNodes.push(
          <Node
            selectStartNode={selectStartNode}
            selectEndNode={selectEndNode}
            endNode={endNode}
            startNode={startNode}
            key={e}
            name={e}
            x={horizontalLocations[nodePositionCounter]}
            y={verticalLocations[nodePositionCounter]}
          />
        );

        domNodesByKey[e] = {};
        domNodesByKey[e].x = horizontalLocations[nodePositionCounter];
        domNodesByKey[e].y = verticalLocations[nodePositionCounter];
        nodePositionCounter++;
      })}

      {/* Now to add the connecting lines */}
      {domNodes.forEach((e) => {
        const connectedNodes = Object.keys(
          displayedGraph.nodes[e.props.name].connections
        );
        let startingX = parseInt(e.props.x) + NODE_RADIUS_PX;
        let startingY = parseInt(e.props.y) + NODE_RADIUS_PX;

        connectedNodes.forEach((i) => {
          const weight =
            displayedGraph.nodes[e.props.name].connections[i].weight;

          let endingX = parseInt(domNodesByKey[i].x) + NODE_RADIUS_PX;

          let endingY = parseInt(domNodesByKey[i].y) + NODE_RADIUS_PX;

          //Check if the key is aready there
          //then check to see if a line has already been drawn in the reverse direction
          //finally, make sure the connection doesn't have a weight of 0
          if (
            lines.every(
              (j) =>
                j.key !== `${startingX},${endingX}` &&
                j.key !== `${endingX},${startingX}`
            ) &&
            weight
          ) {
            let isPartOfPath = false;

            if (solutionArray.indexOf(e.props.name) !== -1) {
              if (
                solutionArray[solutionArray.indexOf(e.props.name) + 1] === i ||
                solutionArray[solutionArray.indexOf(e.props.name) - 1] === i
              ) {
                isPartOfPath = true;
              }
            }

            lines.push(
              <Line
                key={`${startingX},${endingX}`}
                startingX={startingX}
                isPartOfPath={isPartOfPath}
                startingY={startingY}
                endingX={endingX}
                endingY={endingY}
                weight={weight}
                width={weight ** 1.1}
              />
            );
          }
        });
      })}
      {lines}
      {domNodes}
    </>
  );
};

export default GraphDisplay;
