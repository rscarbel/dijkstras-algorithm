import MinBinaryHeap from "./MinBinaryHeap";

describe ('Binary Heap initialization', () => {

  test ('values should be an array', () => {
    let temp = new MinBinaryHeap();
    expect(Array.isArray(temp.values)).toBe(true);
  });
});

describe ('Binary Heap insertion', () => {
  test ('Insert should push an item to the values', () => {
    let temp = new MinBinaryHeap();
    temp.insert(5);
    temp.insert(3);
    expect(temp.values.length).toBe(2);
  });

  test ('the lowest number should be at the beginning of the values', () => {
    let temp = new MinBinaryHeap();
    temp.insert(5);
    temp.insert(3);
    temp.insert(1);
    temp.insert(4);
    temp.insert(2);
    temp.insert(6);
    expect(temp.values[0]).toBe(1);
  });

  test ('the largest number should be at the end of the values', () => {
    let temp = new MinBinaryHeap();
    temp.insert(5);
    temp.insert(3);
    temp.insert(6);
    temp.insert(1);
    temp.insert(4);
    temp.insert(2);
    expect(temp.values[5]).toBe(6);
  });


  test ('parent node should be smaller than it\'s child', () => {
    let temp = new MinBinaryHeap();
    temp.insert(5);
    temp.insert(3);
    temp.insert(6);
    temp.insert(1);
    temp.insert(4);
    temp.insert(2);
    temp.insert(7);
    temp.insert(8);
    temp.insert(9);
    expect(temp.values[1]).toBeLessThan(4);
    expect(temp.values[0]).toBeLessThan(3);
    expect(temp.values[2]).toBeLessThan(4);
    expect(temp.values[3]).toBeLessThan(6);
  });

});

describe ('Binary Heap extract', () => {

  test ('it should return the smallest value', () => {
    let temp = new MinBinaryHeap();
    temp.insert(5);
    temp.insert(3);
    temp.insert(6);
    temp.insert(1);
    temp.insert(4);
    temp.insert(2);
    temp.insert(7);
    temp.insert(8);
    temp.insert(9);
    expect(temp.extract()).toBe(1);
  });

  test ('it remove an element from the values', () => {
    let temp = new MinBinaryHeap();
    temp.insert(5);
    temp.insert(3);
    temp.insert(6);
    temp.insert(1);
    temp.insert(4);
    temp.insert(2);
    temp.insert(7);
    temp.insert(8);
    temp.insert(9);
    temp.extract()
    expect(temp.values.length).toBe(8);
  });

  test ('it should remove the first index', () => {
    let temp = new MinBinaryHeap();
    temp.insert(5);
    temp.insert(3);
    temp.insert(6);
    temp.insert(1);
    temp.insert(4);
    temp.insert(2);
    temp.insert(7);
    temp.insert(8);
    temp.insert(9);
    let beforeExtract = temp.values[0]
    temp.extract()
    let afterExtract = temp.values[0]
    expect(beforeExtract).not.toBe(afterExtract);
  });

  test ('it should resort the values', () => {
    let temp = new MinBinaryHeap();
    temp.insert(5);
    temp.insert(3);
    temp.insert(6);
    temp.insert(1);
    temp.insert(4);
    temp.insert(2);
    temp.insert(7);
    temp.insert(8);
    temp.insert(9);
    let beforeExtract = temp.values[0]
    temp.extract()
    let afterExtract = temp.values[0]
    expect(beforeExtract).not.toBe(afterExtract);
  });

});