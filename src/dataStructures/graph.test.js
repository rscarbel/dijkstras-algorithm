import Graph from './graph'

describe ('graph methods & attributes', () => {
  test ('it should be a function', () => {
    expect(typeof Graph).toBe('function');
  });

  test ('new graph should be an object', () => {
    const graphTemp = new Graph('A')
    expect(typeof graphTemp).toBe('object')
  });

  test ('graph nodes attribute contains an object', () => {
    const graphTemp = new Graph('A')
    expect(typeof graphTemp.nodes).toBe('object')
  });

  test ('new graph should have one node', () => {
    const graphTemp = new Graph('A')
    expect(Object.keys(graphTemp.nodes).length).toBe(1)
  });

  test ('the initial node in the graph should have connection to itslef with a weight of 0', () => {
    const graphTemp = new Graph('A')
    expect(graphTemp.nodes.A.incomingNodes[0]).toBe('A')
  });

  test ('the node should have an incoming node of itself', () => {
    const graphTemp = new Graph('A')
    expect(graphTemp.nodes.A.A).toBe(0)
  });

  test('the addNode method should add a node to the graph nodes object', () => {
    const graphTemp = new Graph('A');
    graphTemp.addNode('B')
    expect(!!graphTemp.nodes.B).toBe(true)
  })

  test('the addConnection should add a connection between two nodes passed in', () => {
    const graphTemp = new Graph('A');
    graphTemp.addNode('B');
    graphTemp.addConnection('B','A',1)
    expect(graphTemp.nodes.B.A).toBe(1);
  });

  test('the addConnection should add a the connected node to the incomingNodes array', () => {
    const graphTemp = new Graph('A');
    graphTemp.addNode('B');
    graphTemp.addConnection('B','A',1)
    expect(graphTemp.nodes.B.incomingNodes.indexOf('A')).not.toBe(-1)
  });

  test('the deleteConnection should remove the connection between two nodes passed in', () => {
    const graphTemp = new Graph('A');
    graphTemp.addNode('B');
    graphTemp.addConnection('B','A',1)
    graphTemp.deleteConnection('A','B')
    expect(graphTemp.nodes.B.A).toBe(undefined);
  });

  test('the deleteConnection should remove the node from incomingNodes', () => {
    const graphTemp = new Graph('A');
    graphTemp.addNode('B');
    graphTemp.addConnection('B','A',1)
    graphTemp.deleteConnection('A','B')
    expect(graphTemp.nodes.B.incomingNodes.indexOf('A')).toBe(-1);
  });

  test('the deleteNode method should delete the node', () => {
    const graphTemp = new Graph('A');
    graphTemp.addNode('B');
    graphTemp.addConnection('B','A',1)
    graphTemp.deleteNode('A')
    expect(graphTemp.nodes.A).toBe(undefined);
  });

  test('the deleteNode method should remove references from nodes that were connected to the deleted node', () => {
    const graphTemp = new Graph('A');
    graphTemp.addNode('B');
    graphTemp.addConnection('B','A',1)
    graphTemp.deleteNode('A')
    expect(graphTemp.nodes.B.incomingNodes.length).toBe(1);
  });
});