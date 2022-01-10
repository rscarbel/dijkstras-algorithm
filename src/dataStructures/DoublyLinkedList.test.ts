import DoublyLinkedList from './DoublyLinkedList';

describe('DoublyLinkedList initialization', () => {
  test('It should have a head of null', () => {
    let temp = new DoublyLinkedList();
    expect(temp.head).toBe(null);
  });

  test('It should have a tail of null', () => {
    let temp = new DoublyLinkedList();
    expect(temp.tail).toBe(null);
  });

  test('It should have a length of 0', () => {
    let temp = new DoublyLinkedList();
    expect(temp.length).toBe(0);
  });

  test('It should have a weight of 0', () => {
    let temp = new DoublyLinkedList();
    expect(temp.weight).toBe(0);
  });
});

describe('DoublyLinkedList added head', () => {
  test('head should not be null', () => {
    let temp = new DoublyLinkedList();
    temp.addToHead('A', 2);
    expect(temp.head).not.toBe(null);
  });

  test('tail should not be null', () => {
    let temp = new DoublyLinkedList();
    temp.addToHead('A', 2);
    expect(temp.tail).not.toBe(null);
  });

  test('It should have a length of 1', () => {
    let temp = new DoublyLinkedList();
    temp.addToHead('A', 2);
    expect(temp.length).toBe(1);
  });

  test('It should have a weight of 2', () => {
    let temp = new DoublyLinkedList();
    temp.addToHead('A', 2);
    expect(temp.weight).toBe(2);
  });
});

describe('DoublyLinkedList add node', () => {
  test('should create a head if none exists', () => {
    let temp = new DoublyLinkedList();
    temp.addNode('A', 2);
    expect(temp.head).not.toBe(null);
  });

  test('node should be added at tail', () => {
    let temp = new DoublyLinkedList();
    temp.addToHead('A', 2);
    temp.addNode('B', 2);
    expect(temp.tail.name).toBe('B');
  });

  test('old tail should now be prev in new tail', () => {
    let temp = new DoublyLinkedList();
    temp.addToHead('A', 2);
    temp.addNode('B', 2);
    expect(temp.tail.prev.name).toBe('A');
  });

  test('length should be 2', () => {
    let temp = new DoublyLinkedList();
    temp.addToHead('A', 2);
    temp.addNode('B', 2);
    expect(temp.length).toBe(2);
  });

  test('weight should be 4', () => {
    let temp = new DoublyLinkedList();
    temp.addToHead('A', 2);
    temp.addNode('B', 2);
    expect(temp.weight).toBe(4);
  });
});

describe('DoublyLinkedList contains', () => {
  test('should return false if an item does not exist', () => {
    let temp = new DoublyLinkedList();
    temp.addNode('A', 2);
    temp.addNode('B', 3);
    expect(temp.contains('C')).toBe(false);
  });

  test('should return true if an item does exist', () => {
    let temp = new DoublyLinkedList();
    temp.addNode('A', 2);
    temp.addNode('B', 3);
    expect(temp.contains('B')).toBe(true);
  });
});

describe('DoublyLinkedList pop', () => {
  test('it should return null if the list is empty', () => {
    let temp = new DoublyLinkedList();
    expect(temp.pop()).toBe(null);
  });

  test('It should delete the tail', () => {
    let temp = new DoublyLinkedList();
    temp.addNode('A', 2);
    temp.pop();
    expect(temp.tail).toBe(null);
  });

  test('It should return the tail', () => {
    let temp = new DoublyLinkedList();
    temp.addNode('A', 2);
    temp.addNode('B', 4);
    temp.addNode('C', 2);
    expect(temp.pop()?.name).toBe('C');
  });

  test('It should decrement the length', () => {
    let temp = new DoublyLinkedList();
    temp.addNode('A', 2);
    temp.addNode('B', 4);
    temp.addNode('C', 2);
    temp.pop();
    expect(temp.length).toBe(2);
  });

  test('It should lower the weight', () => {
    let temp = new DoublyLinkedList();
    temp.addNode('A', 2);
    temp.addNode('B', 4);
    temp.addNode('C', 2);
    temp.pop();
    expect(temp.weight).toBe(6);
  });
});

describe('DoublyLinkedList print', () => {
  test('It should return an array', () => {
    let temp = new DoublyLinkedList();
    temp.addNode('A', 2);
    temp.addNode('B', 4);
    temp.addNode('C', 2);
    expect(Array.isArray(temp.print())).toBe(true);
  });

  test('It should have a length of 3', () => {
    let temp = new DoublyLinkedList();
    temp.addNode('A', 2);
    temp.addNode('B', 4);
    temp.addNode('C', 2);
    expect(temp.print()?.length).toBe(3);
  });

  test('Print the correct order of nodes', () => {
    let temp = new DoublyLinkedList();
    temp.addNode('A', 2);
    temp.addNode('B', 4);
    temp.addNode('C', 2);
    expect(temp.print()).toStrictEqual(['A', 'B', 'C']);
  });
});
