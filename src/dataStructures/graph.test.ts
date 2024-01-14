import Graph from './graph';

describe('graph methods & attributes', () => {
  test('it should be a function', () => {
    expect(typeof Graph).toBe('function');
  });

  test('new graph should be an object', () => {
    const graphTemp = new Graph('A');
    expect(typeof graphTemp).toBe('object');
  });

  test('graph nodes attribute contains an object', () => {
    const graphTemp = new Graph('A');
    expect(typeof graphTemp.nodes).toBe('object');
  });

  test('new graph should have one node', () => {
    const graphTemp = new Graph('A');
    expect(Object.keys(graphTemp.nodes).length).toBe(1);
  });

  test('the addNode method should add a node to the graph nodes object', () => {
    const graphTemp = new Graph('A');
    graphTemp.addNode('B');
    expect(!!graphTemp.nodes.B).toBe(true);
  });
});
