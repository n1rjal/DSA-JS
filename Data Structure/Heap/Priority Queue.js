/*
Priority queue using Heap

Lets least priority value gets served first
*/

class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.values = [];
  }

  swap(index1, index2) {
    // exchange parent element and child element
    let temp = this.values[index2];
    this.values[index2] = this.values[index1];
    this.values[index1] = temp;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (
      index > 0 ||
      parentIndex > 0 ||
      this.values[index].priority < this.values[parentIndex].priority
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      if (index) {
        parentIndex = Math.floor((index - 1) / 2);
      }
    }
  }

  insert(value, priority = 100) {
    //default priority size is 100
    if (this.values.length > this.maxSize) {
      throw new Error("Queue Size exceeded");
    }
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    if (this.values.length > 1) {
      this.bubbleUp();
    }
  }

  extractMin() {
    if (this.values.length <= 0) {
      return null;
    }
    this.swap(0, this.values.length - 1);
    let returnValue = this.values.pop();

    let startIndex = 0;
    let pc1 = startIndex * 2 + 1;
    let pc2 = startIndex * 2 + 2;

    while (
      this.values[startIndex] > this.values[pc1] ||
      this.values[startIndex] > this.values[pc2]
    ) {
      // lets use sum this time
      // to decide where the
      // pointer should go next
      let d1 = this.values[startIndex] + this.values[pc1];
      let d2 = this.values[startIndex] + this.values[pc2];
      if (d1 >= d2) {
        this.swap(startIndex, pc1);
        startIndex = pc1;
      } else if (d1 < d2) {
        this.swap(startIndex, pc2);
        startIndex = pc2;
      }
      pc1 = startIndex * 2 + 1;
      pc2 = startIndex * 2 + 2;
    }
    return returnValue;
  }
}

let p1 = new PriorityQueue();
p1.insert("Head Ache", 2);
p1.insert("Mild Head Ache", 3);
p1.insert("Accident", 1);
p1.insert("Fight", 2);
p1.insert("Cancer last stage", 0);

console.log(p1);

console.log(p1.extractMin());
console.log(p1);

console.log(p1.extractMin());
console.log(p1);

console.log(p1.extractMin());
console.log(p1);

console.log(p1.extractMin());
console.log(p1);

console.log(p1.extractMin());
console.log(p1);

console.log(p1.extractMin());
console.log(p1);
