/*

Add nodes values at queue 
and dequeye the queue at last

If there is left
    add to queue


If there is right
    add to queue

            10
        6       15
    3   8           20

queue: [6,15,3,8]
visited: [10,6]
*/
class Node {
  constructor(value) {
    this.value = value;
    this.count = 1;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      // if there is not root, add a root
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) {
        currentNode.count++;
        return this;
      }
      if (value > currentNode.value) {
        // moving to right
        if (currentNode.right) {
          //let change the current node to the right side
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return this;
        }
      }

      if (value < currentNode.value) {
        // moving to left
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          //let change the current node to the left side
          currentNode.left = newNode;
          return this;
        }
      }
    }
  }

  find(value) {
    /*
    Find returns the node if the value is found
    else returns -1

    The code is as same as insert. But there is
    no new Node involved
    */
    if (!this.root) return false;
    let currentNode = this.root;
    while (true) {
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else if (value === currentNode.value) {
          return currentNode;
        } else {
          return false;
        }
      }

      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else if (value === currentNode.value) {
          return currentNode;
        } else {
          return false;
        }
      }
    }
  }

  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      // let the 1st node it is tree root here
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(5);
for (let i = 0; i < 10; i++) {
  tree.insert(i);
}

console.log(tree.BFS());
