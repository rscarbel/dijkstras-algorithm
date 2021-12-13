const createNode = (name,weight) => {
  return {
    name,
    weight,
    next: null,
    prev: null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null,
    this.tail = null,
    this.length = 0,
    this. weight = 0
  }

  addToHead(name,weight) {
    const newHead = createNode(name,weight);
    this.length ++
    this.weight += weight
    if (!this.head) {
      this.tail = newHead
    } else {
      const previousHead = this.head;
      previousHead.prev = newHead;
      newHead.next = previousHead;
    }
    this.head = newHead
  }
};

export default DoublyLinkedList;