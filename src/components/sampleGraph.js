import Graph from "../dataStructures/graph";

const graphLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N']

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
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
sampleGraph.addConnection(graphLetters[0],graphLetters[1],1);
sampleGraph.addConnection(graphLetters[0],graphLetters[2],1);
sampleGraph.addConnection(graphLetters[2],graphLetters[3],2);
sampleGraph.addConnection(graphLetters[2],graphLetters[4],3);
sampleGraph.addConnection(graphLetters[2],graphLetters[5],2);
sampleGraph.addConnection(graphLetters[3],graphLetters[4],3);
sampleGraph.addConnection(graphLetters[4],graphLetters[5],1);
sampleGraph.addConnection(graphLetters[5],graphLetters[9],2);
sampleGraph.addConnection(graphLetters[5],graphLetters[6],1);
sampleGraph.addConnection(graphLetters[4],graphLetters[7],5);
sampleGraph.addConnection(graphLetters[6],graphLetters[8],1);
sampleGraph.addConnection(graphLetters[7],graphLetters[11],2);
sampleGraph.addConnection(graphLetters[7],graphLetters[9],1);
sampleGraph.addConnection(graphLetters[8],graphLetters[11],1);
sampleGraph.addConnection(graphLetters[7],graphLetters[6],3);
sampleGraph.addConnection(graphLetters[10],graphLetters[11],1);
sampleGraph.addConnection(graphLetters[10],graphLetters[13],1);
sampleGraph.addConnection(graphLetters[11],graphLetters[13],1);
sampleGraph.addConnection(graphLetters[11],graphLetters[12],1);
sampleGraph.addConnection(graphLetters[13],graphLetters[12],2);

export default sampleGraph