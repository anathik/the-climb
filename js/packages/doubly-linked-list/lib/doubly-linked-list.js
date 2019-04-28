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

    print() {
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
  
  let list = new DoublyLinkedList()

  module.exports = DoublyLinkedList;