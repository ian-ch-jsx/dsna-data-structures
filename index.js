// ***** STACK *****
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
//
//
//
// ***** QUEUE *****
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.start = null;
    this.end = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.start = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }

    this.length += 1;
    return newNode;
  }
  dequeue() {
    if (!this.length) {
      return null;
    } else {
      const nodeToRemove = this.start;

      this.start = this.start.next;

      nodeToRemove.next = null;

      if (this.length === 1) {
        this.end = null;
      }

      this.length -= 1;

      return nodeToRemove;
    }
  }
  hasNext() {
    return !this.nextVal;
  }
}
// const queue = new Queue();
// queue.enqueue("fox");
// queue.enqueue("goose");
// queue.enqueue("lizard");
// console.log(queue.dequeue());
// console.log(queue.hasNext());
//
//
//
// ***** CHECK SYNTAX *****
