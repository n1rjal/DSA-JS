/* DFS PRE ORDER */
/*
1. Cretae a varibale to store the values of nde visited
2. Store the root in current
3. Write a helper function which acepts a node
    push the value of the node to the variabe that stores the values
    if node has a left property call herlper wirth to the left node
    if node has a right property call herlper wirth to the right node

    and other operations depends upon the placement of push
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

  DFS_preorder() {
    var data = [];
    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFS_postorder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }
    traverse(this.root);
    return data;
  }

  DFS_InOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(5);
for (let i = 0; i < 10; i++) {
  tree.insert(i);
}

// console.log(tree.DFS_preorder());
// console.log(tree.DFS_postorder());
// console.log(tree.DFS_InOrder());
