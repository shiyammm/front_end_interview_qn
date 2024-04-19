// Implement a stack data structure in JavaScript that contains the following operations:

// new Stack(): Creates an instance of a Stack class that doesn't contain any items. The constructor does not accept any arguments.
// push(): Pushes an item onto the top of the stack. Required time complexity: O(1).
// pop(): Removes an item at the top of the stack and returns that item. Required time complexity: O(1).
// isEmpty(): Determines if the stack is empty. Required time complexity: O(1).
// peek(): Returns the item at the top of the stack without removing it from the stack. Required time complexity: O(1).
// length(): Returns the number of items in the stack. Required time complexity: O(1).

class Stack {
  constructor() {
    this.Stack = [];
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    return this.Stack.push(item);
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    return this.Stack.pop(this.length() - 1);
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    return this.Stack[this.length() - 1];
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this.Stack.length;
  }
  printStack() {
    for (let stack of this.Stack) {
      console.log(stack);
    }
  }
}

const stack = new Stack();
console.log(stack.isEmpty()); // true
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.length()); // 2
console.log(stack.push(3));
console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.isEmpty()); // false
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.push(5));
console.log(stack.push(6));
console.log(stack.isEmpty()); // false
stack.printStack();
