// Stack and Queue are sister to each other
// Queue is FIFO daata strructure.
// School Bus memory lol

/*
    Waiting in line
    Uses in computer
    1. Background tasks
    2. Uploading resources (one at a time)
    3. print queue

    
    Queue is also made by array
    Use single linkedlist for making custom queue

    enQueue -> interface to add into queue
    deQueue -> interface to remove from queue

    QUEUE USING SINGLED LINKED LIST
    Adding into beginning and popping from end is too expensive (computationally)
    So we will add in the end 
    and remove from the head

*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enQueue(data) {
    var newNode = new Node(data);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var lastNode = this.last;
      lastNode.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  deQueue() {
    var first = this.first;
    if (!first) return null;
    var nextNode = first.next;
    this.first = nextNode;
    first.next = null;
    this.size--;
    return first;
  }
}

const q1 = new Queue();
q1.enQueue(1);
q1.enQueue(2);
q1.enQueue(3);
console.log(q1.deQueue());
console.log(q1);
