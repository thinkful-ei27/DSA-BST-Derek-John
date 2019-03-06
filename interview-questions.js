'use strict';

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }

    else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    }
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this.value;
    }
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      else if (this.left) {
        this._replaceWith(this.left);
      }
      else if (this.right) {
        this._replaceWith(this.right);
      }
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      }
      else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

// Find a book

/*
Because the Dewey Decimal index is essentially a tree that goes from general to specific. If you wanted to find a book about a T-rex, for example, you would first find the section for Animals, then Birds, then Dinosaurs, then T-Rexes. Reading the Dewey Decimal index is essentially reading a PRE-ORDER traversal through the Dewey Decimal tree. Finding the book simply requires you to follow the appropriate branches down the tree.
*/

// Tree traversal
const datastring = '25 15 50 10 24 35 70 4 12 18 31 44 66 90 22';
const dataset = datastring.split(' ').map(num => Number(num));
const bst = new BinarySearchTree();
dataset.forEach(num => bst.insert(num, num));

// Pre-order traversal
// Expected output: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
const preOrder = node => {
  if (node !== null) {
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }
};
// preOrder(bst);

// In-order traversal
// Expected output: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
const inOrder = node => {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
};
// inOrder(bst);

// Post-order traversal
// Expected output: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25
const postOrder = node => {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
  }
};
postOrder(bst);