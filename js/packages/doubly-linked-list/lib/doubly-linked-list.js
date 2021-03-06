'use strict';

// (DOUBLY) LINKED LIST

// Impl
class DoublyLinkedList {
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

  // TODO: Write a function that inserts a node at a specified index.
  insertAt({ value, index }) {
    throw new Error('Method not yet implemented')
  }

  // TODO: Write a function that removes a value if present.
  remove(value) {
    let previousNode
    let currentNode = this.head

    let index = 0

    while (currentNode) {
      if (index === value) {
        if (currentNode.next) {
          currentNode.next.prev = previousNode
        } else {
          this.tail = currentNode.prev
        }
        if (!previousNode) {
          this.head = currentNode.next
        } else {
          previousNode.next = currentNode.next
        }

        currentNode.prev = null
        currentNode.next = null

        return
      }

      previousNode = currentNode
      currentNode = currentNode.next
      index++
    }
    console.log(this)
    return this
    // throw new Error('Method not yet implemented')
  }

  // TODO: Write a function that returns the length of a list.
  length() {
    let i = 0

    for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
      i++
    }

    return i
  }

  // TODO: Write a function that returns true if the list is equal to another.
  isEqualTo(secondList) {
    const firstList = this
    let firstListCurrentNode = firstList ? firstList.head : null;
    let secondListCurrentNode = secondList ? secondList.head : null;

    while (firstListCurrentNode || secondListCurrentNode) {
      if (firstListCurrentNode && secondListCurrentNode) {
        if (firstListCurrentNode.value === secondListCurrentNode.value) {
          firstListCurrentNode = firstListCurrentNode.next
          secondListCurrentNode = secondListCurrentNode.next
        } else {
          return false
        }
      } else {
        return false
      }
    }

    return true
  }

  // TODO: Write a function that returns the value at the specified index..
  get(index) {
    let i = 0

    for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
      if (i === index) {
        return currentNode.value
      }
      i++
    }
  }


  indexOf(value) {
    let i = 0

    for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
      if (currentNode.value === value) {
        return i
      }
      i++
    }
    return -1
  }

  contains(value) {
    return this.indexOf(value) !== -1
  }



  toString() {
    let nodeValueArray = []
    for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
      nodeValueArray.push(currentNode.value)
    }

    return `[${nodeValueArray.join(', ')}]`
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev || null
    this.next = next || null
  }
}

module.exports = DoublyLinkedList;