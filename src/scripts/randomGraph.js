import Graph from "../dataStructures/graph";
import addRandomConnections from "./addRandomConnections";
import nodeNameSeeds from "./nodeNameSeeds";

const generateNumber = (max,min) => Math.ceil((Math.random() * (max - min + 1)) + min);

const chooseNodeNames = () => {
  let nodeNames = []
  let choice = generateNumber(nodeNameSeeds.length,0);
  nodeNames = [...nodeNameSeeds[choice]]
  return nodeNames;
};

const graphLetters = chooseNodeNames()

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * @description Function produce array of node names
 * @param {Number} max value for highest possible array length
 * @param {Number} min value for lowest possible array length
 * @param {Array} array source for values in new array
 *
 * @returns {Array} List of names for nodes
 */
const selectRandomIndices = (max,min,array) => {
  const newArr = [];
  for (let i = 0; i < generateNumber(max,min); i++) {
    newArr.push(array[i])
  };
  return newArr;
}

shuffleArray(graphLetters);

const nodeNames = selectRandomIndices(18,12,graphLetters);

const randomGraph = new Graph(nodeNames[0]);

for (let i = 1; i < nodeNames.length; i++){
  randomGraph.addNode(nodeNames[i])
}

addRandomConnections(randomGraph,nodeNames)


export default randomGraph