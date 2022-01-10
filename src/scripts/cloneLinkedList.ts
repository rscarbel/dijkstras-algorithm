import DoublyLinkedList from '../dataStructures/DoublyLinkedList';

const cloneLinkedList = (list: any) => {
  let head = list.head;
  let nextNode = head.next;
  const newList = new DoublyLinkedList();
  newList.addNode(head.name, 0);
  while (nextNode) {
    newList.addNode(nextNode.name, nextNode.weight);
    nextNode = nextNode.next;
  }
  return newList;
};

export default cloneLinkedList;
