class Queue {
  constructor() {
    // Initialize an empty array to represent the queue
    this.queue = [];
  }

  // Adds a value to the end of the queue
  enqueue(value) {
    this.queue.push(value);
  }

  // Removes and returns the value from the front of the queue
  dequeue() {
    // Check if the queue is empty
    if (this.isEmpty()) {
      return 'Queue is Empty, Cannot perform dequeue';
    }
    // Remove and return the value from the front of the queue
    return this.queue.shift();
  }

  // Checks whether the queue is empty
  isEmpty() {
    // Return true if the queue is empty, otherwise false
    return this.size() === 0;
  }

  // Returns the number of items in the queue
  size() {
    // Return the length of the queue
    return this.queue.length;
  }

  // Returns the value at the front of the queue without removing it
  front() {
    // Check if the queue is empty
    if (this.isEmpty()) {
      return 'Queue is Empty, Cannot perform front';
    }
    // Return the value at the front of the queue
    return this.queue[0];
  }

  // Prints the entire queue as a comma-separated string
  printQueue() {
    // Iterate through the queue and build a string of the values
    let queueString = '';
    for (let i = 0; i < this.queue.length; i++) {
      queueString += this.queue[i];
      if (i < this.queue.length - 1) {
        queueString += ',';
      }
    }
    // Print the comma-separated string of values
    console.log(queueString);
  }
}

const test = new Queue();

test.enqueue(11);
test.enqueue(3);
test.enqueue(1);
test.enqueue(9);
console.log(test.size());
console.log(test.dequeue());
console.log(test.size());
test.enqueue(3);
test.enqueue(1);
test.enqueue(9);
console.log(test.front());
test.printQueue();
