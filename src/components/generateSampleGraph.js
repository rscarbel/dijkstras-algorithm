import Graph from "../dataStructures/graph";

const newGraph = new Graph('A');
newGraph.addNode('B');
newGraph.addNode('C');
newGraph.addNode('D');
newGraph.addNode('E');
newGraph.addNode('F');
newGraph.addNode('G');
newGraph.addNode('H');
newGraph.addNode('I');
newGraph.addNode('J');
newGraph.addNode('K');
newGraph.addNode('L');
newGraph.addNode('M');
newGraph.addNode('N');
newGraph.addConnection('A','B',1);
newGraph.addConnection('A','C',1);
newGraph.addConnection('C','D',2);
newGraph.addConnection('C','E',3);
newGraph.addConnection('C','F',2);
newGraph.addConnection('D','I',3);
newGraph.addConnection('E','F',1);
newGraph.addConnection('F','J',2);
newGraph.addConnection('F','H',1);
newGraph.addConnection('E','H',5);
newGraph.addConnection('H','I',1);
newGraph.addConnection('H','L',2);
newGraph.addConnection('H','J',1);
newGraph.addConnection('I','L',1);
newGraph.addConnection('H','K',3);
newGraph.addConnection('K','L',1);
newGraph.addConnection('K','N',1);
newGraph.addConnection('L','N',1);
newGraph.addConnection('L','M',1);
newGraph.addConnection('N','M',2);

export default newGraph