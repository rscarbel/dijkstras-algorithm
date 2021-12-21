import DoublyLinkedList from "../dataStructures/DoublyLinkedList";
import MinBinaryHeap from "../dataStructures/MinBinaryHeap";

/**
 * @description Finds the shortest path in a graph between two nodes
 * @param {Graph} graph
 * @param {String} startNode
 * @param {String} endNode
 * @returns {DoublyLinkedList} Path from start node to end node
 */
const DijkstrasAlorithm = (graph, startNode, endNode) => {

  if (startNode === endNode) {
    const path = new DoublyLinkedList();
    path.addToHead(startNode, 0);
    return path
  }

  const noPath = new DoublyLinkedList();
  noPath.length = Infinity;
  noPath.weight = Infinity;
  noPath.print = () => null;

  if (Object.keys(graph.nodes[startNode].outgoingConnections).length === 1 ||
  graph.nodes[endNode].incomingConnections.length === 1 ) {
    return noPath;
  }

  //initialize heap
  const sortedPaths = new MinBinaryHeap ();
  sortedPaths.insert(startNode)

  let smallestLinkedList =  sortedPaths.values[0];;
  let currentNode =  graph[smallestLinkedList.tail.name];
  let foundNodes = [startNode];

  const findClosestNeighbor = (nodeConnections) => {
    let shortestDistance = Infinity;
    let neighbor = null;
    for (let i in nodeConnections) {
      if (!smallestLinkedList.contains(i)) {
        let currentDistance = nodeConnections[i]
        if (currentDistance < shortestDistance) {
          neighbor = i;
          shortestDistance = currentDistance;
        }
      }
    }
    return neighbor;
  };



  return sortedPaths.values[0];

};

export default DijkstrasAlorithm;