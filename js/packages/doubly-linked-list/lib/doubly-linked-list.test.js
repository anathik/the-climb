"use strict";

const DoublyLinkedList = require("./doubly-linked-list");

describe("DoublyLinkedList", () => {
  let doubleLinkedList = null;

  beforeEach(() => {
    doubleLinkedList = new DoublyLinkedList();
  });

  describe("append", () => {
    it("should add a node to the end of a list", () => {
      doubleLinkedList.append(1);
      doubleLinkedList.append(2);
      doubleLinkedList.append(3);

      expect(doubleLinkedList.toString()).toBe('[1, 2, 3]')
    });
  });

  describe("indexOf", () => {
    it("should return index of a value", () => {
      doubleLinkedList.append(1);
      doubleLinkedList.append(2);
      doubleLinkedList.append(3);

      expect(doubleLinkedList.indexOf(1)).toBe(0)
      expect(doubleLinkedList.indexOf(4)).toBe(-1)
    });
  });

  describe("contains", () => {
    it("should return true if a value is present", () => {
      doubleLinkedList.append(1);
      doubleLinkedList.append(2);
      doubleLinkedList.append(3);

      expect(doubleLinkedList.contains(1)).toBe(true)
      expect(doubleLinkedList.contains(4)).toBe(false)
    });
  });

  describe("length", () => {
    it("should return the length of a list", () => {
      expect(doubleLinkedList.length()).toBe(0)

      doubleLinkedList.append(1);
      doubleLinkedList.append(2);
      doubleLinkedList.append(3);

      expect(doubleLinkedList.length()).toBe(3)
    });
  })

  describe("indexOf", () => {
    it("should return the value at an index", () => {
      doubleLinkedList.append(1);
      doubleLinkedList.append(2);
      doubleLinkedList.append(3);

      expect(doubleLinkedList.get(2)).toBe(3)
    });
  })

  describe("remove", () => {
    it("should remove a node at the specified index and return resultant the list", () => {
      doubleLinkedList.append(1);

      expect(doubleLinkedList.toString()).toBe('[1]')

      doubleLinkedList.append(2);
      doubleLinkedList.append(3);

      expect(doubleLinkedList.toString()).toBe('[1, 2, 3]')

      doubleLinkedList.remove(1)

      expect(doubleLinkedList.toString()).toBe('[1, 3]')

      doubleLinkedList.remove(0)

      expect(doubleLinkedList.toString()).toBe('[3]')
    });
  })

  describe("isEqualTo", () => {
    it("should return false if two different linked lists are not equal", () => {
      let listA = new DoublyLinkedList();
      let listB = new DoublyLinkedList();

      listA.append(1);
      listA.append(2);
      listA.append(3);

      listB.append(1);
      listB.append(3);
      listB.append(5);

      expect(listA.isEqualTo(listB)).toBe(false)
    });

    it("should return true if two linked lists are equal", () => {
      let listC = new DoublyLinkedList();
      let listD = new DoublyLinkedList();

      listC.append(1);
      listD.append(1);

      expect(listC.isEqualTo(listD)).toBe(true)
    });
  })
});
