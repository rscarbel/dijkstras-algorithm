const createNode: (
  name: string,
  weight: number
) => { name: string; weight: number; next: any; prev: any } = (
  name,
  weight
) => {
  return {
    name,
    weight,
    next: null,
    prev: null,
  };
};

class DoublyLinkedList {
  public head:
    | {
        name: string;
        weight: number;
        prev: any;
        next: any;
      }
    | any;
  public tail:
    | {
        name: string;
        weight: number;
        prev: any;
        next: any;
      }
    | any;
  public length: number;
  public weight: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.weight = 0;
  }

  /**
   * @param {String} name
   * @param {Number} weight
   */
  addToHead(name: string, weight: number) {
    const newHead = createNode(name, weight);
    this.length++;
    this.weight += weight;
    if (!this.head) {
      this.tail = newHead;
    } else {
      const previousHead = this.head;
      previousHead.prev = newHead;
      newHead.next = previousHead;
    }
    this.head = newHead;
  }

  /**
   * @param {String} name
   * @param {Number} weight
   */
  addNode(name: string, weight: number) {
    if (!this.head) {
      this.addToHead(name, weight);
    } else {
      const newNode = createNode(name, weight);
      const prevTail = this.tail;
      prevTail.next = newNode;
      this.tail = newNode;
      newNode.prev = prevTail;
      this.weight += weight;
      this.length++;
    }
  }
  /**
   * @param {String} name
   */
  contains(name: string) {
    if (!this.head) {
      return false;
    }
    const checkForItem: (node: string, name: string) => boolean = (
      node: any
    ) => {
      if (node.name === name) {
        return true;
      }
      if (node.next) {
        return checkForItem(node.next, name);
      }
      return false;
    };
    return checkForItem(this.head, name);
  }

  print() {
    if (this.weight === Infinity) {
      return null;
    }
    let orderedNodes = [];
    let currentNode = this.head;
    do {
      orderedNodes.push(currentNode.name);
      currentNode = currentNode.next;
    } while (currentNode);
    return orderedNodes;
  }

  /**
   * @description Takes no arguments - removes tail of list
   * @returns {Object}  removed node
   */
  pop() {
    if (!this.head) {
      return null;
    }
    const removedNode = { name: '', weight: 0, next: null, prev: null };
    removedNode.name = this.tail.name;
    removedNode.weight = this.tail.weight;
    this.weight -= removedNode.weight;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return removedNode;
  }
}

export default DoublyLinkedList;
