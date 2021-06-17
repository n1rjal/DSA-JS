/*
follows LIFO
LAST IN FIRST OUT


1 <- Added nth time (First Out)
2
3
4
5 <- Added at 1th (LAST IN)


this is like stack of plates.

Stacks are used for function invocation
i.e call stack

Stack is just push and pop

Undo/Redo

History in react router is made using stack 

Higher Data Structures like Tree etc are
realised using stacks

*/
 
// stack uisng array
// let make a browser history

let history = [];
// lets visit google fb and realmadrid
history.push("google");
history.push("fb");
history.push("realmadrid");

// our history
// [google,fb,realmadrid]

// use pop

// In case of undo/redo used in text editor
// we have to add and remove from the beginning

// why not use array
// because reindexing takes more computation
// removing from front is expensive

// in stack we don't need to re-index
// so use STACK

// so we will need too use linked list as stack not array
// lets write stack using singly linked list

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  push(value) {
    // linked list unshift
    // is push for stack
    // Time Complexity O(1)
    let newNode = new Node(value);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }

  pop() {
    // linked list shift is pop
    // for stack
    // Time Complexity O(1)

    if (this.size === 0) return null;
    let firstTask = this.first;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    this.first = firstTask.next;
    firstTask.next = null;
    return firstTask;
  }
}

let s1 = new Stack();

for (let i = 0; i <= 100; i++) {
  s1.push(i);
}

console.log(s1);
console.log("Lets try popping");
console.log(s1.pop());
console.log(s1);
