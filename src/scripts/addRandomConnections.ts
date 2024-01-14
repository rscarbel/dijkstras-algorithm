import generateWeight from './generateWeight';

const generateNumber = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

/**
 *
 * @param {Graph} graph graph to call addConnection method
 * @param {Array} graphNodeNames node names in the graph
 */
const addRandomConnections = (graph: any, graphNodeNames: string[]) => {
  //80% chance of having connection to adjecent node
  for (let i = 0; i < graphNodeNames.length - 1; i++) {
    if (generateNumber(5, 0)) {
      graph.addConnection({
        firstNodeName: graphNodeNames[i],
        secondNodeName: graphNodeNames[i + 1],
        weight: generateWeight(),
      });
    }
  }

  //80% chance of having connection to index two to the left
  for (let i = 2; i < graphNodeNames.length; i++) {
    if (generateNumber(5, 0)) {
      graph.addConnection({
        firstNodeName: graphNodeNames[i],
        secondNodeName: graphNodeNames[i - 2],
        weight: generateWeight(),
      });
    }
  }

  //20% chance of having connection to index three to the left
  for (let i = 3; i < graphNodeNames.length; i++) {
    if (!generateNumber(5, 0)) {
      graph.addConnection({
        firstNodeName: graphNodeNames[i],
        secondNodeName: graphNodeNames[i - 3],
        weight: generateWeight(),
      });
    }
  }

  //10% chance of having connection to index four to the left
  for (let i = 4; i < graphNodeNames.length; i++) {
    if (!generateNumber(10, 0)) {
      graph.addConnection({
        firstNodeName: graphNodeNames[i],
        secondNodeName: graphNodeNames[i - 4],
        weight: generateWeight(),
      });
    }
  }

  //1% chance of having connection to index five to the left
  for (let i = 5; i < graphNodeNames.length; i++) {
    if (!generateNumber(100, 0)) {
      graph.addConnection({
        firstNodeName: graphNodeNames[i],
        secondNodeName: graphNodeNames[i - 5],
        weight: generateWeight(),
      });
    }
  }
};

export default addRandomConnections;
