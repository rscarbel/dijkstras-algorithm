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
exampleGraph.addNode('Z');
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

describe ('Dijkstra\'s algorithm should find the shortest path between two nodes', () => {
  let temp = DijkstrasAlorithm(exampleGraph,'A','A')
  test ('It should be [\'A\']', () => {
    expect(temp.print()).toStrictEqual(['A']);
  });

  let temp2 = DijkstrasAlorithm(exampleGraph,'A','B')
  test ('It should be [\'A\',\'B\']', () => {
    expect(temp2.print()).toStrictEqual(['A','B']);
  });

  test ('It should have a weight of 1', () => {
    expect(temp2.weight).toBe(1);
  });

  test ('It should have a length of 2', () => {
    expect(temp2.length).toBe(2);
  });

  let temp3 = DijkstrasAlorithm(exampleGraph,'A','D')
  test ('It should be [\'A\',\'C\',\'D\']', () => {
    expect(temp3.print()).toStrictEqual(['A','C','D']);
  });

  test ('It have a weight of 3', () => {
    expect(temp3.weight).toBe(3);
  });

  test ('It have a length of 3', () => {
    expect(temp3.length).toBe(3);
  });

  let temp4 = DijkstrasAlorithm(exampleGraph,'A','G')
  test ('It should be [\'A\',\'C\',\'D\',\'G\']', () => {
    expect(temp4.print()).toStrictEqual(['A','C','D','G']);
  });

  test ('It have a weight of 13', () => {
    expect(temp4.weight).toBe(13);
  });

  test ('It have a length of 4', () => {
    expect(temp4.length).toBe(4);
  });

});


describe ('handelers no path exists to ending node', () => {
  let temp = DijkstrasAlorithm(exampleGraph,'A','Z')
  test ('The length should be infinite', () => {
    expect(temp.length).toBe(Infinity);
  });

  test ('The weight should be infinite', () => {
    expect(temp.weight).toBe(Infinity);
  });

  test ('It should print null', () => {
    expect(temp.print()).toBe(null);
  });
});

describe ('no path exists leaving starting node', () => {
  let temp2 = DijkstrasAlorithm(exampleGraph, 'Z','H')

  test ('The length should be infinite', () => {
    expect(temp2.length).toBe(Infinity);
  });

  test ('The weight should be infinite', () => {
    expect(temp2.weight).toBe(Infinity);
  });

  test ('It should print null', () => {
    expect(temp2.print()).toBe(null);
  });
});