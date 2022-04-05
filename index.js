class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) return -1;
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

// const stack = new Stack();
// stack.push("fox");
// stack.push("goose");
// stack.push("lizard");
// console.log(stack.pop());
// console.log(stack.peek());
