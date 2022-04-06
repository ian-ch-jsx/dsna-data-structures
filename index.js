class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (!node || node.value === this.value) {
      return;
    }
    if (node.value > this.value) {
      node.right = add(node.right, value);
    }
  }
}
