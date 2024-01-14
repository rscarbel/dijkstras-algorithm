import Graph from '../dataStructures/graph';
import { getClosestNode } from './getClosestNode';

export interface PathInterface {
  path: string[];
  totalWeight: number;
}

const DEFAULT_EMPTY_PATH = { path: [], totalWeight: Infinity };

/**
 * @description Finds the shortest path in a graph between two nodes
 * @param {Graph} graph
 * @param {String} startNode
 * @param {String} endNode
 * @returns {PathInterface} Path from start node to end node
 */
const dijkstrasAlgorithm = (
  graph: Graph,
  startNode: string,
  endNode: string
): PathInterface => {
  const initialNode = graph.nodes[startNode];
  const finalNode = graph.nodes[endNode];
  if (!initialNode || !finalNode) return DEFAULT_EMPTY_PATH;

  const paths: PathInterface[] = [{ path: [initialNode.name], totalWeight: 0 }];

  if (startNode === endNode) {
    return { path: [startNode], totalWeight: 0 };
  }

  const nodes = graph.nodes;
  const visitedNodes: { [key: string]: boolean } = {};
  const previousNodes: { [key: string]: string | null } = {};
  const distances: { [key: string]: number } = {};
  const path: string[] = [];

  // Set all distances to infinity except for the starting node
  for (const nodeName in nodes) {
    distances[nodeName] = Infinity;
  }
  distances[startNode] = 0;

  while (Object.keys(visitedNodes).length !== Object.keys(nodes).length) {
    const currentNode = getClosestNode(distances, visitedNodes);
    if (!currentNode) return DEFAULT_EMPTY_PATH;

    visitedNodes[currentNode] = true;
    const currentDistance = distances[currentNode];

    for (const connectionName in nodes[currentNode].connections) {
      const { node, weight } = nodes[currentNode].connections[connectionName];
      if (visitedNodes[node.name]) continue;

      const newDistance = currentDistance + weight;
      if (newDistance < distances[node.name]) {
        distances[node.name] = newDistance;
        previousNodes[node.name] = currentNode;
      }
    }
  }

  let currentNode = endNode;
  while (currentNode !== startNode) {
    path.unshift(currentNode);
    currentNode = previousNodes[currentNode] as string;
  }
  path.unshift(startNode);

  return { path, totalWeight: distances[endNode] || Infinity };
};

export default dijkstrasAlgorithm;
