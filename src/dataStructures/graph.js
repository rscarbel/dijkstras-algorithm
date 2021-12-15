/**
 * @description Graph Data Structure
 * @param {string} node name of initial node
 *
 * @returns {object} graph
 */
class Graph {
  constructor (node){
    this.nodes = {};
    this.nodes[node] = {};
    this.nodes[node][node] = 0;
    this.nodes[node].incomingNodes = [node]
  }

  addNode(node) {
    this.nodes[node] = {}
    this.nodes[node][node] = 0;
    this.nodes[node].incomingNodes = [node]
  }

  /**
   * @description adds a connection to the node passed in
   * @param {string} node name of source node
   * @param {string} connection name of endpoint node
   * @param {number} weight weight of connection
   * @param {boolean} [bidirectional=true] (optional) whether the connection go both ways
   */
  addConnection(node, connection, weight, bidirectional = true) {
    // add neighbor & its weight to the node
    this.nodes[node][connection] = weight;
    // add neighbor to the list of incoming nodes
    this.nodes[node].incomingNodes.push(connection)
    // if the connection goes both ways, add it for the other node as well
    if (bidirectional) {
      this.nodes[connection][node] = weight;
      this.nodes[connection].incomingNodes.push(node)
    };
  };

  /**
   * @description deletes a connection from the node passed in
   * @param {string} node name of source node
   * @param {string} connection name of endpoint node
   * @param {boolean} [bidirectional=true] (optional) whether the deletion is for both directions of the connection
   */
  deleteConnection(node, connection, bidirectional=true) {
    //delete node from connections
    delete this.nodes[node][connection]
    //delete node from incomingNodes
    this.nodes[node].incomingNodes.splice(this.nodes[node].incomingNodes.indexOf(connection),1)
    if (bidirectional) {
      delete this.nodes[connection][node]
      this.nodes[connection].incomingNodes.splice(this.nodes[connection].incomingNodes.indexOf(node),1)
    }
  };

  /**
   * @description deletes node and all connections to and from it
   * @param {string} node name of source node
   */
  deleteNode(node) {
    //loop through incoming nodes to remove their connection
    for (let i = this.nodes[node].incomingNodes.length - 1;i >= 0; i--) {
      let incomingNode = this.nodes[node].incomingNodes[i];
      delete this.nodes[incomingNode][node];
    };
    //get rid of property since there are no longer references from other nodes
    delete this.nodes[node].incomingNodes;
    //delete all references to this node in other incomingNodes arrays
    const outgoingNodes = Object.keys(this.nodes[node]);

    outgoingNodes.forEach(e => {
      const nodeIndex = this.nodes[e].incomingNodes.indexOf(node);
      this.nodes[e].incomingNodes.splice(nodeIndex,1)
    })

    //finally, remove this node
    delete this.nodes[node]
  }

};

export default Graph;