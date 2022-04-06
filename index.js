const { add } = require("nodemon/lib/rules");

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // if value is less than current value
    if (node.value < this.value) {
      //if no left node, make this the left node
      if (!this.left) this.left = node;
      //otherwise add a new node and make this the new node value?
      else this.left.add(node);
    } else {
      //if no right, make this the right.
      if (!this.right) this.right = node;
      //otherwise add a new node with this value
      else this.right.add(node);
    }
  }
}

const B = new BinaryTreeNode("B");
const A = new BinaryTreeNode("A");
const C = new BinaryTreeNode("C");
const D = new BinaryTreeNode("D");

B.add(A);
B.add(D);
B.add(C);

console.log(B);
