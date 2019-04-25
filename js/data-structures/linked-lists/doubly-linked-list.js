// (DOUBLY) LINKED LIST

// Impl
class LinkedList {
  constructor() {
    this.head = this.tail = null
  }

  // Add to end of list / tail
  append(value) {
    // Empty list case
    if (!this.tail) {
      this.head = this.tail = new Node(value)
    } else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.prev = oldTail
    }
  }

  // Add to beginning of list / head
  prepend(value) {
    // Empty list case
    if (!this.tail) {
      this.head = this.tail = new Node(value)
    } else {
      let oldHead = this.head
      this.head = new Node(value)
      oldHead.prev = this.head
      this.tail.prev = oldHead
    }
  }

  deleteHead() {
    // Empty list case
    if (!this.head) {
      return null
    } else {
      let removedHead = this.head

      // If one node is left in list
      if (this.head === this.tail) {
        this.head = this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }

      return removedHead.value
    }
  }

  deleteTail() {
    // Empty list case
    if (!this.tail) {
      return null
    } else {
      let removedTail = this.tail

      // If one node is left in list
      if (this.head === this.tail) {
        this.head = this.tail = null
      } else {
        this.tail = this.tail.prev
        this.tail.next = null
      }

      return removedTail.value
    }
  }

  search(value) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }

    return null
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev || null
    this.next = next || null
  }
}

// Test

let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)

list.prepend(0)
list.prepend(-1)
list.prepend(-2)

// Case A: Print Head and Tail
// console.log(list)

//Case B: Print a searched value
let result = list.search(1)
console.log(result)
