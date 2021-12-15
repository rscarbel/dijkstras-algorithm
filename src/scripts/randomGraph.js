import Graph from "../dataStructures/graph";
import addRandomConnections from "./addRandomConnections";

const graphLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const generateNumber = (max,min) => Math.ceil((Math.random() * max) + min);

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