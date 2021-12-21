import cloneLinkedList from "./cloneLinkedList";
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

  // if (startNode === endNode) {
  //   const path = new DoublyLinkedList();
  //   path.addToHead(startNode, 0);
  //   return path
  // }

  const noPath = new DoublyLinkedList();
  noPath.addNode(null,Infinity)
  noPath.length = Infinity;
  noPath.print = () => null;

  const startingLinkedList = new DoublyLinkedList ();
  startingLinkedList.addNode(startNode,0);

  const sortedPaths = new MinBinaryHeap ();
  sortedPaths.insert(startingLinkedList);

  // if (Object.keys(graph.nodes[startNode].outgoingConnections).length === 1 ||
  // graph.nodes[endNode].incomingConnections.length === 1 ) {
  //   return noPath;
  // }

  while (sortedPaths.values.length > 0 && sortedPaths.values[0].tail.name !== endNode) {
    let currentNode =  sortedPaths.values[0].tail.name;
    let nodeConnections = graph.nodes[currentNode].outgoingConnections;
    for (let i in nodeConnections) {
      if (!sortedPaths.values[0].contains(i)) {
        let newPath = cloneLinkedList(sortedPaths.values[0]);
        newPath.addNode(i, nodeConnections[i]);
        sortedPaths.insert(newPath)
      }
    }
    sortedPaths.extract()
    }

    return sortedPaths.values.length ? sortedPaths.values[0] : noPath;
};

export default DijkstrasAlorithm;