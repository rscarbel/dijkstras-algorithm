import MinBinaryHeap from './MinBinaryHeap';
import DoublyLinkedList from './DoublyLinkedList'

let list1 = new DoublyLinkedList();
list1.addNode('A',2);
list1.addNode('B',4);
list1.addNode('C',2);

let list2 = new DoublyLinkedList();
list2.addNode('A',3);
list2.addNode('B',4);
list2.addNode('C',2);

let list3 = new DoublyLinkedList();
list3.addNode('A',4);
list3.addNode('B',4);
list3.addNode('C',2);

let list4 = new DoublyLinkedList();
list4.addNode('A',5);
list4.addNode('B',4);
list4.addNode('C',2);

let list5 = new DoublyLinkedList();
list5.addNode('A',6);
list5.addNode('B',4);
list5.addNode('C',2);

let list6 = new DoublyLinkedList();
list6.addNode('A',7);
list6.addNode('B',4);
list6.addNode('C',2);

let list7 = new DoublyLinkedList();
list7.addNode('A',7);
list7.addNode('B',4);
list7.addNode('C',2);

let list8 = new DoublyLinkedList();
list8.addNode('A',8);
list8.addNode('B',4);
list8.addNode('C',2);

let list9 = new DoublyLinkedList();
list9.addNode('A',9);
list9.addNode('B',4);
list9.addNode('C',2);

describe ('Binary Heap initialization', () => {

  test ('values should be an array', () => {
    let temp = new MinBinaryHeap();
    expect(Array.isArray(temp.values)).toBe(true);
  });
});

describe ('Binary Heap insertion', () => {
  test ('Insert should push an item to the values', () => {
    let temp = new MinBinaryHeap();
    temp.insert(list5);
    temp.insert(list3);
    expect(temp.values.length).toBe(2);
  });

  test ('the lowest number should be at the beginning of the values', () => {
    let temp = new MinBinaryHeap();
    temp.insert(list5);
    temp.insert(list3);
    temp.insert(list1);
    temp.insert(list4);
    temp.insert(list2);
    temp.insert(list6);
    expect(temp.values[0]).toStrictEqual(list1);
  });

  test ('the largest number should be at the end of the values', () => {
    let temp = new MinBinaryHeap();
    temp.insert(list5);
    temp.insert(list3);
    temp.insert(list6);
    temp.insert(list1);
    temp.insert(list4);
    temp.insert(list2);
    expect(temp.values[5]).toStrictEqual(list6);
  });


  test ('parent node should be smaller than it\'s child', () => {
    let temp = new MinBinaryHeap();
    temp.insert(list5);
    temp.insert(list3);
    temp.insert(list6);
    temp.insert(list1);
    temp.insert(list4);
    temp.insert(list2);
    temp.insert(list7);
    temp.insert(list8);
    temp.insert(list9);
    expect(temp.values[1].weight).toBeLessThan(list4.weight);
    expect(temp.values[0].weight).toBeLessThan(list3.weight);
    expect(temp.values[2].weight).toBeLessThan(list4.weight);
    expect(temp.values[3].weight).toBeLessThan(list6.weight);
  });

});

describe ('Binary Heap extract', () => {

  test ('it should return the smallest value', () => {
    let temp = new MinBinaryHeap();
    temp.insert(list5);
    temp.insert(list3);
    temp.insert(list6);
    temp.insert(list1);
    temp.insert(list4);
    temp.insert(list2);
    temp.insert(list7);
    temp.insert(list8);
    temp.insert(list9);
    expect(temp.extract()).toStrictEqual(list1);
  });

  test ('it remove an element from the values', () => {
    let temp = new MinBinaryHeap();
    temp.insert(list5);
    temp.insert(list3);
    temp.insert(list6);
    temp.insert(list1);
    temp.insert(list4);
    temp.insert(list2);
    temp.insert(list7);
    temp.insert(list8);
    temp.insert(list9);
    temp.extract()
    expect(temp.values.length).toBe(8);
  });

  test ('it should remove the first index', () => {
    let temp = new MinBinaryHeap();
    temp.insert(list5);
    temp.insert(list3);
    temp.insert(list6);
    temp.insert(list1);
    temp.insert(list4);
    temp.insert(list2);
    temp.insert(list7);
    temp.insert(list8);
    temp.insert(list9);
    let beforeExtract = temp.values[0]
    temp.extract()
    let afterExtract = temp.values[0]
    expect(beforeExtract).not.toStrictEqual(afterExtract);
  });

  test ('it should resort the values', () => {
    let temp = new MinBinaryHeap();
    temp.insert(list5);
    temp.insert(list3);
    temp.insert(list6);
    temp.insert(list1);
    temp.insert(list4);
    temp.insert(list2);
    temp.insert(list7);
    temp.insert(list8);
    temp.insert(list9);
    let beforeExtract = temp.values[0]
    temp.extract()
    let afterExtract = temp.values[0]
    expect(beforeExtract).not.toStrictEqual(afterExtract);
  });

});