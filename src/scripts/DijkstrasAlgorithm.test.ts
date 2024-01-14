import dijkstrasAlgorithm, { PathInterface } from './dijkstrasAlgorithm';
import Graph from '../dataStructures/graph';
import { performance } from 'perf_hooks';
const LOAD_TEST_NODES = 10_000;

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
exampleGraph.addConnection({
  firstNodeName: 'A',
  secondNodeName: 'B',
  weight: 1,
});
exampleGraph.addConnection({
  firstNodeName: 'A',
  secondNodeName: 'C',
  weight: 1,
});
exampleGraph.addConnection({
  firstNodeName: 'B',
  secondNodeName: 'C',
  weight: 1,
});
exampleGraph.addConnection({
  firstNodeName: 'C',
  secondNodeName: 'D',
  weight: 2,
});
exampleGraph.addConnection({
  firstNodeName: 'D',
  secondNodeName: 'E',
  weight: 2,
});
exampleGraph.addConnection({
  firstNodeName: 'E',
  secondNodeName: 'F',
  weight: 2,
});
exampleGraph.addConnection({
  firstNodeName: 'E',
  secondNodeName: 'D',
  weight: 4,
});
exampleGraph.addConnection({
  firstNodeName: 'G',
  secondNodeName: 'D',
  weight: 10,
});

describe("Dijkstra's algorithm should find the shortest path between two nodes", () => {
  let temp: PathInterface = dijkstrasAlgorithm(exampleGraph, 'A', 'A');
  test("It should be ['A']", () => {
    expect(temp.path.join(', ')).toBe('A');
  });
});

describe('handelers no path exists to ending node', () => {
  let temp: PathInterface = dijkstrasAlgorithm(exampleGraph, 'A', 'Z');

  test('The weight should be infinite', () => {
    expect(temp.totalWeight).toBe(Infinity);
  });

  test('It should print null', () => {
    expect(temp.path.join(', ')).toBe('');
  });
});

describe('no path exists leaving starting node', () => {
  let temp2: PathInterface = dijkstrasAlgorithm(exampleGraph, 'Z', 'H');

  test('The weight should be infinite', () => {
    expect(temp2.totalWeight).toBe(Infinity);
  });

  test('It should print null', () => {
    expect(temp2.path.join(', ')).toBe('');
  });
});

const graphStart = performance.now();
let performanceGraph = new Graph('1');

for (let i = 2; i <= LOAD_TEST_NODES; i++) {
  performanceGraph.addNode(`${i}`);
}
//guarantee each node has at least one connection
for (let i = 1; i < LOAD_TEST_NODES; i++) {
  performanceGraph.addConnection({
    firstNodeName: `${i}`,
    secondNodeName: `${i + 1}`,
    weight: generateNumber(0, 4),
  });
}
//make random connections
for (let i = 1; i < LOAD_TEST_NODES - 4; i++) {
  let firstEndNode = generateNumber(i + 1, i + (LOAD_TEST_NODES - i));
  let secondEndNode = generateNumber(i + 1, i + (LOAD_TEST_NODES - i));
  performanceGraph.addConnection({
    firstNodeName: `${i}`,
    secondNodeName: `${firstEndNode}`,
    weight: generateNumber(0, 4),
  });
  performanceGraph.addConnection({
    firstNodeName: `${i}`,
    secondNodeName: `${secondEndNode}`,
    weight: generateNumber(0, 4),
  });
}
const graphEnd = performance.now();
console.log(`Generating the graph took ${graphEnd - graphStart} milliseconds`);
const startTime = performance.now();
const performAlgo: PathInterface = dijkstrasAlgorithm(
  performanceGraph,
  '1',
  `${LOAD_TEST_NODES}`
);
const endTime = performance.now();
console.log(
  `With ${LOAD_TEST_NODES} nodes, each representing a 4-way intersection, the Algorithm took ${
    endTime - startTime
  } milliseconds`
);

console.log(`Path weight: ${performAlgo.totalWeight}`);
console.log(`Path length: ${performAlgo.path.length}`);
