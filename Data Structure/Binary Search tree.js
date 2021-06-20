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
}

/*

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(5);
tree.root.left.right = new Node(7);
tree.root.left.left = new Node(-3);
Visual representation of tree above

        10

    5         15

-3    7

*/

const bst1 = new BinarySearchTree();
bst1.insert(1);
bst1.insert(-5);
bst1.insert(5);
bst1.insert(-15);
bst1.insert(1);
bst1.insert(1);
bst1.insert(1);
bst1.insert(1);
bst1.insert(1);
bst1.insert(1);
console.log(bst1.find(3));
