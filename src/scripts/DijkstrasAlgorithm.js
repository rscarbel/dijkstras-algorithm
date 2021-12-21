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

  const dijkstraTime = (currentNode) => {
    //track what the lowest weight is
    let lowestWeight = {weight: -Infinity}

    let neighbors = currentNode.outgoingConnections
    //look through connections in current node
    for (let nextNode in neighbors) {

      let neighborWeight = neighbors[nextNode]

      if (neighborWeight > lowestWeight.weight) {
        lowestWeight = {name: nextNode, weight: neighborWeight}
      }
    }
  }
  return sortedPaths.values[0];

};

export default DijkstrasAlorithm;