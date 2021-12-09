  /*
  new node

  graph.nodes {
    A: [ {node: A, weight: 0}, {node: B, weight, 1} ]
    B: [ {node: B, weight: 0}, {node: A, weight, 1}, {node: C, weight: 1} ]
    C: [ {node: C, weight: 0}, {node: B, weight, 1} ]
  }

    graph.nodes {
      A: {A: 0, B: 1}
      B: {B: 0, A: 1, C: 1}
      C: {C: 0, B: 1}
    }

  A: {A: 0, B: 1}

  graph.addNode(name, [])
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

  //false can be passed in as a third argument to only create the connection one-way
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

  //false can be passed in as a third argument to only delete the connection one-way
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

  deleteNode(node) {
    delete this.nodes[node]
  }

};

export default Graph;