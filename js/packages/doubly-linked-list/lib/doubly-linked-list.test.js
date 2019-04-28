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

    expect(doubleLinkedList.toString()).toBe('[1, 2, 3]')
  });

  test("should return index of a value", () => {
    doubleLinkedList.append(1);
    doubleLinkedList.append(2);
    doubleLinkedList.append(3);

    expect(doubleLinkedList.indexOf(1)).toBe(0)
    expect(doubleLinkedList.indexOf(4)).toBe(-1)
  });

  test("should determine if a value is present", () => {
    doubleLinkedList.append(1);
    doubleLinkedList.append(2);
    doubleLinkedList.append(3);

    expect(doubleLinkedList.contains(1)).toBe(true)
    expect(doubleLinkedList.contains(4)).toBe(false)
  });

  test("should determine the length of a list", () => {
    expect(doubleLinkedList.length()).toBe(0)

    doubleLinkedList.append(1);
    doubleLinkedList.append(2);
    doubleLinkedList.append(3);

    expect(doubleLinkedList.length()).toBe(3)
  });

  test("should return the value at an index", () => {
    doubleLinkedList.append(1);
    doubleLinkedList.append(2);
    doubleLinkedList.append(3);

    expect(doubleLinkedList.get(2)).toBe(3)
  });

  test("should determine if two linked lists are equal", () => {
    let truthyCaseList = new DoublyLinkedList();
    let falsyCaseList = new DoublyLinkedList();

    truthyCaseList.append(1);
    truthyCaseList.append(2);
    truthyCaseList.append(3);

    falsyCaseList.append(1);
    falsyCaseList.append(3);
    falsyCaseList.append(5);

    doubleLinkedList.append(1);
    doubleLinkedList.append(2);
    doubleLinkedList.append(3);

    expect(doubleLinkedList.isEqualTo(truthyCaseList)).toBe(true)
    expect(doubleLinkedList.isEqualTo(falsyCaseList)).toBe(false)
  });
});
