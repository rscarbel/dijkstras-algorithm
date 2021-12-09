/*
1. visual represention of the graph/nodes
2. Graph datastructure
    - nodes attached to each location
        -difficulty of the route
*/

import Graph from './graph'

let graph1 = new Graph('A')

describe ('graph methods & attributes', () => {
  test ('it should be a function', () => {
    expect(typeof Graph).toBe('function');
  });

  test ('new graph should be an object', () => {
    expect(typeof graph1).toBe('object')
  });

  test ('graph nodes attribute contains an object', () => {
    expect(typeof graph1.nodes).toBe('object')
  });

  test ('new graph should have one node', () => {
    expect(Object.keys(graph1.nodes).length).toBe(1)
  });

  test ('the initial node in the graph should have connection weight 0', () => {
    expect(graph1.nodes.A.A).toBe(0)
  });

  test('the addNode method should add a node to the graph nodes object', () => {
    const graphTemp = new Graph('A');
    graphTemp.addNode('B')
    expect(!!graphTemp.nodes.B).toBe(true)
  })

  test('the addNode should add a connection between two nodes passed in', () => {
    const graphTemp = new Graph('A');
    graphTemp.addNode('B');
    graphTemp.addConnection('B','A',1)
    expect(graphTemp.nodes.B.A).toBe(1);
  });

});
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