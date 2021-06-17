/*
Singly linked list means one node is only connected to one node
Slide for Linked List:
https://cs.slides.com/colt_steele/singly-linked-lists

Operations
1. Push
2. Pop
3. Shift
4. UnShift
5. Get 
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    }
    if (!this.tail) {
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  print() {
    let arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    console.log(arr);
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let oldHead = this.head;
    // pushing head by one
    this.head = this.head.next;
    this.length--;
    return oldHead;
  }

  pop() {
    let node = this.head;
    while (node.next.next) {
      node = node.next;
    }
    let tailData = node.next.data;
    this.tail = node;
    node.next = null;
    return tailData;
  }

  unshift(data) {
    // add to the begining of the node
    let newHead = new Node(data);
    if (this.head) {
      newHead.next = this.head;
      this.head = newHead;
    } else {
      this.head = newHead;
      this.tail = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    // just like array taraversing by index
    // in place of index we have traverse by provided index
    // count how many time next is called
    if (index <= -1 || index >= this.length) return undefined;
    let count = 0;
    let node = this.head;
    while (node) {
      if (count === index) return node;
      node = node.next;
      count++;
    }
  }

  set(index, value) {
    // just like array taraversing by index
    // in place of index we have traverse by provided index
    // count how many time next is called
    // set the value to the value provided
    // and return
    let node = this.get(index);
    if (node) {
      node.data = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, value) {
    if (index === this.length - 1) {
      this.push(value);
      this.length++;
      return true;
    } else if (index === 0) {
      this.unshift(value);
      this.length++;
      return true;
    }

    let node = this.get(index - 1);
    if (!node) {
      return false;
    }
    let newNode = new Node(value);
    newNode.next = node.next;
    node.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) {
      this.pop();
      this.length--;
      return true;
    } else if (index === this.length) {
      this.shift();
      this.length--;
      return true;
    }
    let previousNode = this.get(index - 1);
    if (!previousNode) {
      return false;
    }
    previousNode.next = previousNode.next.next;
    this.length--;
    return true;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prevNode = null;
    let nextNode = node.next;

    for (let i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    }
  }
}

let s1 = new SinglyLinkedList();
for (let i = 0; i <= 10; i++) {
  s1.push(i);
}

s1.print();
s1.reverse();
s1.print();
