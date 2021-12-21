import DoublyLinkedList from "./DoublyLinkedList";
/**
 * @description Binary heap of linked list objects - stored as array ordered by weight
 */
class MinBinaryHeap {
  constructor() {
    this.values = [];
    this.size = 0;
  };

  /**
 * @description Adds list to heap. Does not return anything
 * @param {DoublyLinkedList} value
 */
  insert(value) {
    let currentValue = value;
    this.values.push(value);

    let index = this.values.length - 1

    while (index > 0 ) {

      let parentIndex = Math.floor((index - 1)/2);
      let parentValue = this.values[parentIndex];

      if (currentValue.weight >= parentValue.weight) {
        break;
      };

      this.values[index] = parentValue;
      this.values[parentIndex] = currentValue;


      index = parentIndex;
    }
  }

  extract() {
    const min = this.values[0];

    const end = this.values.pop();

    if(this.values.length > 0){
      this.values[0] = end;

      let index = 0;
      const length = this.values.length;
      const check = this.values[0];

      while(true) {
        let leftIndex = 2 * index + 1;
        let rightIndex = 2 * index + 2;
        let leftChild, rightChild;

        let swap = null;

        if(leftIndex < length) {
          leftChild = this.values[leftIndex];

          if(leftChild.length < check.length) {
            swap = leftIndex;
          }
        }

        if(rightIndex < length) {
          rightChild = this.values[rightIndex];

          if(
            (swap === null && rightChild.length < check.length) ||
            (swap !== null && rightChild.length < leftChild.length)
          ) {
            swap = rightIndex;
          }
        }

        if(swap === null) {
          break;
        }

        this.values[index] = this.values[swap];
        this.values[swap] = check;
        index = swap;
      }
    }
    return min
  }
};

export default MinBinaryHeap;