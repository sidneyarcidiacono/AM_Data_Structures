import {LinkedList} from './linkedList.js'

class Stack {
  constructor() {
    this.items = new LinkedList()
  }

  push(value) {
    this.items.prepend(value)
  }

  pop() {
    return this.items.deleteHead()
  }

  isEmpty() {
    return !this.items.head
  }

  toArray() {
    return this.items.toArray()
  }
}

const stack = new Stack()

stack.push('Cooking')
stack.push('Wash the dishes!')
stack.push('Buy ingredients!')

console.log(stack.toArray())

stack.pop()

console.log(stack.toArray())

stack.pop()
stack.pop()

console.log(stack.toArray())
