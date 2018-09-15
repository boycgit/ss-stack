import { SinglyList } from 'ss-linked-list';

export default class stack<T> {
  stack: SinglyList<T>;
  constructor(...values: T[]) {
    // We're going to implement Stack based on LinkedList since these
    // structures are quite similar. Compare push/pop operations of the Stack
    // with append/deleteTail operations of LinkedList.
    this.stack = new SinglyList(...values);
  }

  get length(): number {
    return this.stack.length;
  }
  /**
   * Read the element at the front of the queue without removing it.
   *
   * @returns {(T | null)}
   * @memberof Queue
   */
  get peek(): T | null {
    return this.stack.tail;
  }

  /**
   * if is empty queue
   *
   * @returns {boolean}
   * @memberof Queue
   */
  isEmpty(): boolean {
    return this.stack.isEmpty();
  }

  /**
   * Add a new element to the end of the queue (the tail of the linked list).
   * This element will be processed after all elements ahead of it.
   *
   * @param {*} value
   * @returns {boolean}
   * @memberof Queue
   */
  push(value): boolean {
    return this.stack.append(value);
  }

  /**
   * Remove the element at the front of the queue (the head of the linked list).
   * If the queue is empty, return null.
   *
   * @returns {(T | null)}
   * @memberof Queue
   */
  pop(): T | null {
    const removedTail = this.stack.removeTail();
    return removedTail ? removedTail : null;
  }
}