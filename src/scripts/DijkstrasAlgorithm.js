import DoublyLinkedList from "../dataStructures/DoublyLinkedList";
import MinBinaryHeap from "../dataStructures/MinBinaryHeap";

/**
 * @description Finds the shortest path in a graph between two nodes
 * @param {Graph} graph
 * @param {String} startNode
 * @param {String} endNode
 *
 * @returns {DoublyLinkedList} Path from start node to end node
 */
const DijkstrasAlorithm = (graph, startNode, endNode) => {

  if (startNode === endNode) {
    const completePath = new DoublyLinkedList();
    completePath.addToHead(startNode, 0);
    return completePath
  }

  //initialize a heap to store the paths in order from shortest to longest
  const sortedLinkedLists = new MinBinaryHeap ();
  //keep track of what nodes have been discovered
  const foundNodes = [];

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
  return [sortedLinkedLists,foundNodes,dijkstraTime]

};

export default DijkstrasAlorithm;