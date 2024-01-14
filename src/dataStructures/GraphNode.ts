interface ConnectionInterface {
  node: GraphNode;
  weight: number;
}

export class GraphNode {
  public name: string;
  public connections: {
    [key: string]: ConnectionInterface;
  };

  constructor(name: string) {
    this.name = name;
    this.connections = {};
  }

  addConnection({ node, weight }: { node: GraphNode; weight: number }) {
    this.connections[node.name] = { node, weight };
  }

  removeConnection(nodeName: string) {
    const edgeNode = this.connections[nodeName];
    if (!edgeNode) return;

    delete edgeNode.node.connections[this.name];
    delete this.connections[nodeName];
  }
}
