import type { Nullable } from '../../types'
import { LinkedNode } from '../LinkedNode'

export class LinkedList<T = unknown> {
  #head: Nullable<LinkedNode<T>> = null
  #tail: Nullable<LinkedNode<T>> = null
  #middle: Nullable<LinkedNode<T>> = null
  #size = 0
  public get size() {
    return this.#size
  }
  public get peak() {
    return this.#head
  }
  public get tail() {
    return this.#tail
  }
  public push(value: T): LinkedList<T> {
    const link = new LinkedNode(value)
    if (this.#tail === null || this.#head === null || this.#middle === null) {
      this.#head = link
      this.#middle = link
      this.#tail = link
    } else {
      const tail = this.#tail
      // set next
      tail.link('next', link)
      this.#tail = link
    }
    this.#size += 1
    // if size is uneven and not strict one then make #middle the tail of #middle
    if (this.#size !== 1 && this.#size % 2 !== 0) {
      this.#middle = this.#middle
    }
    return this
  }
  public pop(): LinkedList<T> {
    if (this.#tail) {
      const prev = this.#tail.prev
      if (prev) {
        prev.unlink('next')
        this.#tail.unlink('prev')
        this.#tail = prev
      } else {
        // no more entries
        this.#head = null
        this.#middle = null
        this.#tail = null
      }
      this.#size -= 1
    }
    return this
  }
  public isEmpty() {
    return this.#size === 0
  }
  public equal(list: unknown): list is LinkedList<T> {
    return this === list
  }
  static isLinkedList(list: unknown): list is LinkedList {
    return list instanceof LinkedList
  }
}
