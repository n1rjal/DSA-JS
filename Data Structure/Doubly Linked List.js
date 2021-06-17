class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) return null;
    this.length--;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let tailNode = this.tail;
    let prevNode = this.tail.prev;
    prevNode.next = null;
    tailNode.prev = null;
    this.tail = prevNode;
    return tailNode;
  }

  shift() {
    if (this.length === 0) return null;
    let currentHead = this.head;
    let newHead = currentHead.next;
    this.head = newHead;
    newHead.prev = null;
    currentHead.next = null;
    this.length--;
    return currentHead;
  }

  unshift(data) {
    let currHead = this.head;
    let newNode = new Node(data);
    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      currHead.prev = newNode;
      newNode.next = currHead;
      this.head = newNode;
    }
    this.length++;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let i = 0;
    let j = this.length - 1;
    let currHead = this.head;
    let currTail = this.tail;
    while (currHead || currTail) {
      if (i === index) {
        return currHead;
      }

      if (j === index) {
        return currTail;
      }
      currHead = currHead.next;
      i++;
      currTail = currTail.prev;
      j--;
    }
  }

  set(index, value) {
    let node = this.get(index);
    if (!node) return node;
    node.data = value;
    return node;
  }

  remove(index) {
    let node = this.get(index);
    if (!node) return node;
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
  }

  insert(index, value) {
    let node = this.get(index - 1);
    if (!node) return node;
    let newNode = new Node(value);
    let nextNode = node.next;
    newNode.next = node.next;
    newNode.prev = node;
    node.next = newNode;
    nextNode.prev = newNode;
    this.length++;
  }
}

let d1 = new DoubleLinkedList();

d1.push("HELLO");
d1.push("WORLD");
d1.push("!!!!");
d1.remove(1);
console.log("LENGTH OF D1 is ", d1.length);
console.log(d1);
