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

  addNode (name,weight) {
    if (!this.head) {
      this.addToHead(name, weight)
    } else {
      const newNode = createNode(name,weight);
      const prevTail = this.tail;
      prevTail.next = newNode;
      this.tail = newNode;
      newNode.prev = prevTail;
      this.weight += weight
      this.length ++
    }
  }

  contains (name) {
    if (!this.head) {
      return false
    }
    function checkForItem(node, name) {
      if (node.name === name) {
        return true
      }
      if (node.next) {
        return checkForItem(node.next, name)
      }
      return false
    }
    return checkForItem(this.head,name)
  }
};

export default DoublyLinkedList;