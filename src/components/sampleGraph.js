import Graph from "../dataStructures/graph";

const sampleGraph = new Graph('A');
sampleGraph.addNode('B');
sampleGraph.addNode('C');
sampleGraph.addNode('D');
sampleGraph.addNode('E');
sampleGraph.addNode('F');
sampleGraph.addNode('G');
sampleGraph.addNode('H');
sampleGraph.addNode('I');
sampleGraph.addNode('J');
sampleGraph.addNode('K');
sampleGraph.addNode('L');
sampleGraph.addNode('M');
sampleGraph.addNode('N');
sampleGraph.addConnection('A','B',1);
sampleGraph.addConnection('A','C',1);
sampleGraph.addConnection('C','D',2);
sampleGraph.addConnection('C','E',3);
sampleGraph.addConnection('C','F',2);
sampleGraph.addConnection('D','I',3);
sampleGraph.addConnection('E','F',1);
sampleGraph.addConnection('F','J',2);
sampleGraph.addConnection('F','H',1);
sampleGraph.addConnection('E','H',5);
sampleGraph.addConnection('H','I',1);
sampleGraph.addConnection('H','L',2);
sampleGraph.addConnection('H','J',1);
sampleGraph.addConnection('I','L',1);
sampleGraph.addConnection('H','K',3);
sampleGraph.addConnection('K','L',1);
sampleGraph.addConnection('K','N',1);
sampleGraph.addConnection('L','N',1);
sampleGraph.addConnection('L','M',1);
sampleGraph.addConnection('N','M',2);

export default sampleGraph