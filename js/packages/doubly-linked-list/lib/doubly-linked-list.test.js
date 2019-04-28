"use strict";

const DoublyLinkedList = require("./doubly-linked-list");

describe("DoublyLinkedList", () => {
  let doubleLinkedList = null;

  beforeEach(() => {
    doubleLinkedList = new DoublyLinkedList();
  });

  test("should be able to add stuff", () => {
    doubleLinkedList.append(1);
    doubleLinkedList.append(2);
    doubleLinkedList.append(3);

    expect(doubleLinkedList.print(doubleLinkedList)).toBe('[1, 2, 3]')
  });
});
