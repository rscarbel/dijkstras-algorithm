import generateWeight from "./generateWeight";

const generateNumber = (max,min) => Math.ceil((Math.random() * (max - min + 1)) + min);

/**
 *
 * @param {Graph} graph graph to call addConnection method
 * @param {Array} sourceArray node names in the graph
 */
const addRandomConnections = (graph, sourceArray) => {
  //add at least one connection for each node
  for (let i = 0; i < sourceArray.length - 1; i++) {
    graph.addConnection(sourceArray[i],sourceArray[i+1],generateWeight())
  }

  //80% chance of having connection to index two to the left
  for(let i = 2; i < sourceArray.length; i++) {
    if (generateNumber(5,0)) {
      graph.addConnection(sourceArray[i],sourceArray[i-2],generateWeight())
    }
  }

  //20% chance of having connection to index three to the left
  for(let i = 3; i < sourceArray.length; i++) {
    if (!generateNumber(5,0)) {
      graph.addConnection(sourceArray[i],sourceArray[i-3],generateWeight())
    }
  }
};

export default addRandomConnections;