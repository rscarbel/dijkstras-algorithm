import { GraphNode } from './GraphNode';

interface Graph {
  nodes: {
    [key: string]: GraphNode;
  };
}

/**
 * @description Graph Data Structure
 * @param {GraphNode} node starting node
 *
 * @returns {Graph} graph
 */
class Graph {
  public nodes: {
    [key: string]: GraphNode;
  };

  constructor(nodeName: string) {
    this.nodes = {};
    this.nodes[nodeName] = new GraphNode(nodeName);
  }

  addNode(nodeName: string) {
    const newNode = new GraphNode(nodeName);
    this.nodes[nodeName] = newNode;
  }

  addConnection({
    firstNodeName,
    secondNodeName,
    weight,
  }: {
    firstNodeName: string;
    secondNodeName: string;
    weight: number;
  }) {
    const firstNode = this.nodes[firstNodeName];
    const secondNode = this.nodes[secondNodeName];
    if (!firstNode || !secondNode)
      throw Error("Cannot connect nodes that don't exist in the graph!");

    firstNode.addConnection({ node: secondNode, weight });
    secondNode.addConnection({ node: firstNode, weight });
  }

  deleteConnection(firstNodeName: string, secodnNodeName: string) {
    const firstNode = this.nodes[firstNodeName];
    const secondNode = this.nodes[secodnNodeName];
    if (!firstNode || !secondNode) return;

    firstNode.removeConnection(secodnNodeName);
  }

  deleteNode(nodeName: string) {
    const nodeToDelete = this.nodes[nodeName];
    if (!nodeToDelete) return;

    const connectionNames = Object.keys(nodeToDelete.connections);
    connectionNames.forEach((neighborName) => {
      this.deleteConnection(nodeName, neighborName);
    });

    delete this.nodes[nodeName];
  }
}

export default Graph;
