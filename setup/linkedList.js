export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = {value: value, next: null}

    if (this.tail) {
      this.tail.next = newNode
    }
    this.tail = newNode
    if (!this.head) {
      this.head = newNode
    }
  }

  prepend(value) {
    const newNode = {value: value, next: this.head}

    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }
  }

  find(value) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }

    return null
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue)

    if (existingNode) {
      const newNode = { value: value, next: existingNode.next }
      existingNode.next = newNode
    }
  }

  delete(value) {
    if (!this.head) {
      return null
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next
    }

    let currentNode = this.head

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next
      } else {
        currentNode = currentNode.next
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode
    }
  }

  deleteHead() {
    if (!this.head) {
      return null
    }
    const deletedHead = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return deletedHead
  }

  toArray() {
    const elements = []

    let currentNode = this.head
    while (currentNode) {
      elements.push(currentNode)
      currentNode = currentNode.next
    }

    return elements
  }
}

const linkedList1 = new LinkedList()
linkedList1.append(1)
linkedList1.append(2)
linkedList1.append(3)
linkedList1.append('Max')
linkedList1.append('Max')
linkedList1.append(true)
linkedList1.prepend(0)


console.log(linkedList1.toArray())

linkedList1.delete(0)
linkedList1.delete('Max')
linkedList1.delete(true)

console.log(linkedList1.toArray())
console.log(linkedList1.find(1))

linkedList1.insertAfter('new value-1', 1)
linkedList1.insertAfter('new value-2', 2)

console.log(linkedList1.toArray())
