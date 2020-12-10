class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value)
  }

  pop() {
    return this.items.pop()
  }

  isEmpty() {
    return this.items.length === 0
  }

  toArray() {
    // return a copy so we can manipulate the stack without actually
    // permanently altering it
    return this.items.slice()
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
