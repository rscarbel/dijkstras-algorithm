import Graph from "../dataStructures/graph";

const graphLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N']

const generateNumber = (max,min) => Math.floor((Math.random() * max) + min);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const calculateWeight = () => {
  let val = generateNumber(20, 0)
  if (val === 13 ) {
    return 7
  } else if (val === 12) {
    return 6
  }
  else if (val === 11) {
    return 5
  }
  else if (val === 10) {
    return 4
  }
  else if (val === 9) {
    return 3
  }
  else if (val === 8) {
    return 2
  }
  else {
    return 1
  }

}

shuffleArray(graphLetters)

const sampleGraph = new Graph(graphLetters[0]);
sampleGraph.addNode(graphLetters[1]);
sampleGraph.addNode(graphLetters[2]);
sampleGraph.addNode(graphLetters[3]);
sampleGraph.addNode(graphLetters[4]);
sampleGraph.addNode(graphLetters[5]);
sampleGraph.addNode(graphLetters[6]);
sampleGraph.addNode(graphLetters[7]);
sampleGraph.addNode(graphLetters[8]);
sampleGraph.addNode(graphLetters[9]);
sampleGraph.addNode(graphLetters[10]);
sampleGraph.addNode(graphLetters[11]);
sampleGraph.addNode(graphLetters[12]);
sampleGraph.addNode(graphLetters[13]);
sampleGraph.addConnection(graphLetters[0],graphLetters[1],calculateWeight());
sampleGraph.addConnection(graphLetters[0],graphLetters[2],calculateWeight());
sampleGraph.addConnection(graphLetters[2],graphLetters[3],calculateWeight());
sampleGraph.addConnection(graphLetters[2],graphLetters[4],calculateWeight());
sampleGraph.addConnection(graphLetters[2],graphLetters[5],calculateWeight());
sampleGraph.addConnection(graphLetters[3],graphLetters[4],calculateWeight());
sampleGraph.addConnection(graphLetters[4],graphLetters[5],calculateWeight());
sampleGraph.addConnection(graphLetters[5],graphLetters[9],calculateWeight());
sampleGraph.addConnection(graphLetters[5],graphLetters[6],calculateWeight());
sampleGraph.addConnection(graphLetters[4],graphLetters[7],calculateWeight());
sampleGraph.addConnection(graphLetters[6],graphLetters[8],calculateWeight());
sampleGraph.addConnection(graphLetters[7],graphLetters[11],calculateWeight());
sampleGraph.addConnection(graphLetters[7],graphLetters[9],calculateWeight());
sampleGraph.addConnection(graphLetters[8],graphLetters[11],calculateWeight());
sampleGraph.addConnection(graphLetters[7],graphLetters[6],calculateWeight());
sampleGraph.addConnection(graphLetters[10],graphLetters[11],calculateWeight());
sampleGraph.addConnection(graphLetters[10],graphLetters[13],calculateWeight());
sampleGraph.addConnection(graphLetters[11],graphLetters[13],calculateWeight());
sampleGraph.addConnection(graphLetters[11],graphLetters[12],calculateWeight());
sampleGraph.addConnection(graphLetters[13],graphLetters[12],calculateWeight());

export default sampleGraph