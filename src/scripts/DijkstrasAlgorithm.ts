import cloneLinkedList from './cloneLinkedList';
import DoublyLinkedList from '../dataStructures/DoublyLinkedList';
import MinBinaryHeap from '../dataStructures/MinBinaryHeap';

/**
 * @description Finds the shortest path in a graph between two nodes
 * @param {Graph} graph
 * @param {String} startNode
 * @param {String} endNode
 * @returns {DoublyLinkedList} Path from start node to end node
 */
const DijkstrasAlorithm = (graph: any, startNode: string, endNode: string) => {
  const noPath = new DoublyLinkedList();
  noPath.addNode('', Infinity);
  noPath.length = Infinity;
  noPath.print = () => null;

  const startingLinkedList = new DoublyLinkedList();
  startingLinkedList.addNode(startNode, 0);

  const sortedPaths = new MinBinaryHeap();
  sortedPaths.insert(startingLinkedList);

  const foundNodes = [startNode];

  while (
    sortedPaths.values.length > 0 &&
    sortedPaths.values[0].tail.name !== endNode
  ) {
    //current node is always the smallest linked list
    //smallest meaning it has the lowest weight
    let currentNode = sortedPaths.values[0].tail.name;

    //check for connections before making the assignment, otherwise it will throw an error
    let nodeConnections = graph?.nodes[currentNode]?.outgoingConnections
      ? graph.nodes[currentNode].outgoingConnections
      : {};

    //look though each outgoing connection to make linked lists for new paths
    for (let i in nodeConnections) {
      //need to check if the path is already in the route
      if (!sortedPaths.values[0].contains(i) && foundNodes.indexOf(i) === -1) {
        //each path gets a new linked list
        let newPath = cloneLinkedList(sortedPaths.values[0]);
        //I add a millionth to each weight so that when more than one possible route is present, it will prefer the one with fewer connections.
        newPath.addNode(i, nodeConnections[i] + 0.000001);
        sortedPaths.insert(newPath);
      }
    }
    //remove slower paths that included found nodes
    for (let i = 64; i < sortedPaths.values.length; i++) {
      if (foundNodes.indexOf(sortedPaths.values[i].tail.name) !== -1) {
        sortedPaths.values.splice(i, 1);
      }
    }
    //the shortest path in the list is going to be the one we just looked at all the outgoing connections for, so let's get rid of the path to keep progressing though the graph.
    foundNodes.push(sortedPaths.extract()?.tail.name);
    foundNodes.push(sortedPaths.values[0]?.tail.name);
  }

  //If no path was found, then the first path was extracted, meaning there's no length to the linked list, so check for a length first, and if there isn't one, there isn't a path.
  return sortedPaths.values.length ? sortedPaths.values : noPath;
};

export default DijkstrasAlorithm;
