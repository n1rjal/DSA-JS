/*

Array can be used as Heap
removes from root

*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(index1, index2) {
    // exchange parent element and child element
    console.log(`Swapping ${this.values[index1]} and ${this.values[index2]}`);
    let temp = this.values[index2];
    this.values[index2] = this.values[index1];
    this.values[index1] = temp;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.values[parentIndex] < this.values[index] || index > 0) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    console.log(this.values);
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  extractMax() {
    this.swap(0, this.values.length - 1);
    let valueToReturn = this.values.pop();
    let index = 0;

    // two childrens indexes
    let ci1 = 2 * index + 1;
    let ci2 = 2 * index + 2;
    let c1 = this.values[ci1];
    let c2 = this.values[ci2];

    while (this.values[index] < c1 || this.values[index] < c2) {
      // check which is largest and swap with it
      // so calcuate diff
      let d1 = this.values[index] - c1;
      let d2 = this.values[index] - c2;
      if (d1 <= d2) {
        this.swap(ci1, index);
        index = ci1;
      }
      if (d1 > d2) {
        this.swap(ci2, index);
        index = ci2;
      }
      ci1 = 2 * index + 1;
      ci2 = 2 * index + 2;
      c1 = this.values[ci1];
      c2 = this.values[ci2];
    }
    return valueToReturn;
  }
}

let mb1 = new MaxBinaryHeap();
let inputs = [10, 20, 30, 40, 50, 60, 100];

for (let i = 0; i < inputs.length; i++) {
  mb1.insert(inputs[i]);
}

console.log(mb1.values);
console.log(mb1.extractMax());
console.log(mb1.values);
