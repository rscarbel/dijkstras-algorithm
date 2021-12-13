import DoublyLinkedList from './DoublyLinkedList'

describe ('DoublyLinkedList initialization', () => {

  test ('It should have a head of null', () => {
    let temp = new DoublyLinkedList();
    expect(temp.head).toBe(null);
  });

  test ('It should have a tail of null', () => {
    let temp = new DoublyLinkedList();
    expect(temp.tail).toBe(null);
  });

  test ('It should have a length of 0', () => {
    let temp = new DoublyLinkedList();
    expect(temp.length).toBe(0);
  });

  test ('It should have a weight of 0', () => {
    let temp = new DoublyLinkedList();
    expect(temp.weight).toBe(0);
  });
});

describe ('DoublyLinkedList added head', () => {

  test ('head should not be null', () => {
    let temp = new DoublyLinkedList();
    temp.addToHead('A',2);
    expect(temp.head).not.toBe(null);
  });

  test ('tail should not be null', () => {
    let temp = new DoublyLinkedList();
    temp.addToHead('A',2);
    expect(temp.tail).not.toBe(null);
  });

  test ('It should have a length of 1', () => {
    let temp = new DoublyLinkedList();
    temp.addToHead('A',2);
    expect(temp.length).toBe(1);
  });

  test ('It should have a weight of 2', () => {
    let temp = new DoublyLinkedList();
    temp.addToHead('A',2);
    expect(temp.weight).toBe(2);
  });
});

/*
function createNode (name, weight) {
  return {
    name: name,
    weight: weight,
    next: null,
    prev: null
  }
}

{
  length: 3,
  weight: 5,
  head: NODE,
  tail: NODE,
  function displayList,
  function removeTail,
  function removeHead,
  function addNode,
}
*/