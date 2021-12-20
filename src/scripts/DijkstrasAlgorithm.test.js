import DijkstrasAlorithm from "./DijkstrasAlgorithm";
import Graph from '../dataStructures/graph'
import DoublyLinkedList from '../dataStructures/DoublyLinkedList'


let exampleGraph = new Graph('A');
exampleGraph.addNode('B');
exampleGraph.addNode('C');
exampleGraph.addNode('D');
exampleGraph.addNode('E');
exampleGraph.addNode('F');
exampleGraph.addNode('G');
exampleGraph.addNode('H');
exampleGraph.addConnection('A','B',1);
exampleGraph.addConnection('A', 'C', 1);
exampleGraph.addConnection('B', 'C', 1);
exampleGraph.addConnection('C', 'D', 2);
exampleGraph.addConnection('D', 'E', 2);
exampleGraph.addConnection('E', 'F', 2);
exampleGraph.addConnection('E', 'D', 4);
exampleGraph.addConnection('G', 'D', 10);

describe ('Dijkstra\'s algorithm should return a doubly linked list', () => {
  let temp = DijkstrasAlorithm(exampleGraph,'A','A')
  test ('it should be a doubly linked list', () => {
    expect(temp).toBeInstanceOf(DoublyLinkedList);
  });

  test ('it should have a weight of 0', () => {
    expect(temp.weight).toBe(0);
  });

  test ('it should have a length of 1', () => {
    expect(temp.length).toBe(1);
  });
});