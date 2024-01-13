import dijkstrasAlgorithm from './dijkstrasAlorithm';
import Graph from '../dataStructures/graph';
import DoublyLinkedList from '../dataStructures/DoublyLinkedList';
import { performance } from 'perf_hooks';

const generateNumber: (max: number, min: number) => number = (max, min) => {
  return Math.ceil(Math.random() * (max - min + 1) + min);
};

let exampleGraph = new Graph('A');
exampleGraph.addNode('B');
exampleGraph.addNode('C');
exampleGraph.addNode('D');
exampleGraph.addNode('E');
exampleGraph.addNode('F');
exampleGraph.addNode('G');
exampleGraph.addNode('H');
exampleGraph.addNode('Z');
exampleGraph.addConnection('A', 'B', 1);
exampleGraph.addConnection('A', 'C', 1);
exampleGraph.addConnection('B', 'C', 1);
exampleGraph.addConnection('C', 'D', 2);
exampleGraph.addConnection('D', 'E', 2);
exampleGraph.addConnection('E', 'F', 2);
exampleGraph.addConnection('E', 'D', 4);
exampleGraph.addConnection('G', 'D', 10);

describe("Dijkstra's algorithm should return a binary heap of doubly linked lists", () => {
  let temp: any = dijkstrasAlgorithm(exampleGraph, 'A', 'A');
  test('it should be a doubly linked list', () => {
    expect(temp[0]).toBeInstanceOf(DoublyLinkedList);
  });

  test('it should have a weight of 0', () => {
    expect(temp[0].weight).toBe(0);
  });

  test('it should have a length of 1', () => {
    expect(temp[0].length).toBe(1);
  });
});

describe("Dijkstra's algorithm should find the shortest path between two nodes", () => {
  let temp: any = dijkstrasAlgorithm(exampleGraph, 'A', 'A');
  test("It should be ['A']", () => {
    expect(temp[0].print()).toStrictEqual(['A']);
  });

  let temp2: any = dijkstrasAlgorithm(exampleGraph, 'A', 'B');
  test("It should be ['A','B']", () => {
    expect(temp2[0].print()).toStrictEqual(['A', 'B']);
  });

  test('It should have a weight of 1', () => {
    expect(Math.floor(temp2[0].weight)).toBe(1);
  });

  test('It should have a length of 2', () => {
    expect(temp2[0].length).toBe(2);
  });

  let temp3: any = dijkstrasAlgorithm(exampleGraph, 'A', 'D');
  test("It should be ['A','C','D']", () => {
    expect(temp3[0].print()).toStrictEqual(['A', 'C', 'D']);
  });

  test('It have a weight of 3', () => {
    expect(Math.floor(temp3[0].weight)).toBe(3);
  });

  test('It have a length of 3', () => {
    expect(temp3[0].length).toBe(3);
  });

  let temp4: any = dijkstrasAlgorithm(exampleGraph, 'A', 'G');
  test("It should be ['A','C','D','G']", () => {
    expect(temp4[0].print()).toStrictEqual(['A', 'C', 'D', 'G']);
  });

  test('It have a weight of 13', () => {
    expect(Math.floor(temp4[0].weight)).toBe(13);
  });

  test('It have a length of 4', () => {
    expect(temp4[0].length).toBe(4);
  });
});

describe('handelers no path exists to ending node', () => {
  let temp: any = dijkstrasAlgorithm(exampleGraph, 'A', 'Z');
  test('The length should be infinite', () => {
    expect(temp.length).toBe(Infinity);
  });

  test('The weight should be infinite', () => {
    expect(temp.weight).toBe(Infinity);
  });

  test('It should print null', () => {
    expect(temp.print()).toBe(null);
  });
});

describe('no path exists leaving starting node', () => {
  let temp2: any = dijkstrasAlgorithm(exampleGraph, 'Z', 'H');

  test('The length should be infinite', () => {
    expect(temp2.length).toBe(Infinity);
  });

  test('The weight should be infinite', () => {
    expect(temp2.weight).toBe(Infinity);
  });

  test('It should print null', () => {
    expect(temp2.print()).toBe(null);
  });
});

const graphStart = performance.now();
let performanceGraph = new Graph('1');
const numOfNodes = 1000000;
for (let i = 2; i <= numOfNodes; i++) {
  performanceGraph.addNode(`${i}`);
}
//guarantee each node has at least one connection
for (let i = 1; i < numOfNodes; i++) {
  performanceGraph.addConnection(`${i}`, `${i + 1}`, generateNumber(0, 4));
}
//make random connections
for (let i = 1; i < numOfNodes - 4; i++) {
  let firstEndNode = generateNumber(i + 1, i + (numOfNodes - i));
  let secondEndNode = generateNumber(i + 1, i + (numOfNodes - i));
  performanceGraph.addConnection(
    `${i}`,
    `${firstEndNode}`,
    generateNumber(0, 4)
  );
  performanceGraph.addConnection(
    `${i}`,
    `${secondEndNode}`,
    generateNumber(0, 4)
  );
}
const graphEnd = performance.now();
console.log(`Generating the graph took ${graphEnd - graphStart} milliseconds`);
const startTime = performance.now();
const performAlgo: any = dijkstrasAlgorithm(
  performanceGraph,
  '1',
  `${numOfNodes}`,
  3
);
const endTime = performance.now();
console.log(
  `With ${numOfNodes} nodes, each representing a 4-way intersection, the Algorithm took ${
    endTime - startTime
  } milliseconds`
);

console.log(`Path weight: ${performAlgo[0].weight}`);
console.log(`Path lenth: ${performAlgo[0].length}`);
