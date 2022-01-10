/**
 * @description Graph Data Structure
 * @param {string} node name of initial node
 *
 * @returns {object} graph
 */
class Graph {
  public nodes: {
    [key: string]: {
      outgoingConnections: {
        [key: string]: number;
      };
      incomingConnections: string[];
    };
  };

  constructor(node: string) {
    this.nodes = {};
    this.nodes[node] = { outgoingConnections: {}, incomingConnections: [] };
    this.nodes[node].outgoingConnections[node] = 0;
    this.nodes[node].incomingConnections = [node];
  }

  /**
   * @param {String} node node name
   */
  addNode(node: string) {
    this.nodes[node] = { outgoingConnections: {}, incomingConnections: [] };
    this.nodes[node].outgoingConnections[node] = 0;
    this.nodes[node].incomingConnections = [node];
  }

  /**
   * @description adds a connection to the node passed in
   * @param {string} node name of source node
   * @param {string} connection name of endpoint node
   * @param {number} weight weight of connection
   * @param {boolean} [bidirectional=true] (optional) whether the connection go both ways
   */
  addConnection(
    node: string,
    connection: string,
    weight: number,
    bidirectional = true
  ) {
    // add neighbor & its weight to the node
    this.nodes[node].outgoingConnections[connection] = weight;
    // add neighbor to the list of incoming nodes
    this.nodes[node].incomingConnections.push(connection);
    // if the connection goes both ways, add it for the other node as well
    if (bidirectional) {
      this.nodes[connection].outgoingConnections[node] = weight;
      this.nodes[connection].incomingConnections.push(node);
    }
  }

  /**
   * @description deletes a connection from the node passed in
   * @param {string} node name of source node
   * @param {string} connection name of endpoint node
   * @param {boolean} [bidirectional=true] (optional) whether the deletion is for both directions of the connection
   */
  deleteConnection(node: string, connection: string, bidirectional = true) {
    //delete node from connections
    delete this.nodes[node].outgoingConnections[connection];
    //delete node from incomingConnections
    this.nodes[node].incomingConnections.splice(
      this.nodes[node].incomingConnections.indexOf(connection),
      1
    );
    if (bidirectional) {
      delete this.nodes[connection].outgoingConnections[node];
      this.nodes[connection].incomingConnections.splice(
        this.nodes[connection].incomingConnections.indexOf(node),
        1
      );
    }
  }

  /**
   * @description deletes node and all connections to and from it
   * @param {string} node name of source node
   */
  deleteNode(node: string) {
    //loop through incoming nodes to remove their connection
    for (let i = this.nodes[node].incomingConnections.length - 1; i >= 0; i--) {
      let incomingNode = this.nodes[node].incomingConnections[i];
      delete this.nodes[incomingNode].outgoingConnections[node];
    }
    //delete all references to this node in other incomingConnections arrays
    const outgoingNodes = Object.keys(this.nodes[node].outgoingConnections);

    outgoingNodes.forEach((e) => {
      const nodeIndex = this.nodes[e].incomingConnections.indexOf(node);
      this.nodes[e].incomingConnections.splice(nodeIndex, 1);
    });

    //finally, remove this node
    delete this.nodes[node];
  }
}

export default Graph;
