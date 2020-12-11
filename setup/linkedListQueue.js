import { LinkedList } from './linkedList.js'

class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  enqueue(value) {
    this.items.append(value)
  }

  dequeue() {
    return this.items.deleteHead()
  }

  isEmpty() {
    return !this.items.head
  }

  toArray() {
    return this.items.toArray()
  }
}

const queue = new Queue()

queue.enqueue('Sid')
queue.enqueue('Max')
queue.enqueue('Julie')

console.log(queue.toArray())

console.log(queue.dequeue())
console.log(queue.toArray())

console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.toArray())
