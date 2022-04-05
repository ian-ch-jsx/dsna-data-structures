// ***** BINARY NODE ADD *****
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    //create a new node
    const newNode = new BinaryTreeNode(value);
    //if root does not exist, set newNode to root
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      //if the current root value is higher than input node, create left node if left node does not already exist
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        //else add to the right
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
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

// this still returns left and right as null. we looked this code up on stackoverflow, etc, and it makes sense there AFAIK but I'm not sure how it determines
// left value vs right
