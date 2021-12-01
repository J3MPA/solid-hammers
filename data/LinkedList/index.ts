import type { Nullable } from '../../types'
import { LinkedNode } from '../LinkedNode'

export class LinkedList<T = never> {
  #head: Nullable<LinkedNode<T>> = null
  #tail: Nullable<LinkedNode<T>> = null
  #middle: Nullable<LinkedNode<T>> = null
  #size = 0
  public get size() {
    return this.#size
  }
  public get head() {
    return this.#head
  }
  public get middle() {
    return this.#middle
  }
  public get tail() {
    return this.#tail
  }
  constructor(value?: T) {
    if (value) {
      const link = new LinkedNode(value)
      this.#head = link
      this.#middle = link
      this.#tail = link
      this.#size++
    }
  }
  public push(value: T): LinkedList<T> {
    const node = new LinkedNode(value)
    if (!this.#tail) {
      // no #tails indicates the LinkedList is empty, also true for #head and #middle
      this.#head = node
      this.#middle = node
      this.#tail = node
    } else {
      this.#tail = node.link('prev', this.#tail)
    }
    this.#size++
    // if size is bigger than two and rest is one when divided by two, shift middle
    if (this.#size > 2 && this.#size % 2 === 1 && this.#middle !== null) {
      this.#middle = this.#middle.next
    }
    return this
  }
  public pop(): LinkedList<T> {
    if (this.#tail && this.#size) {
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
      if (this.#size > 1 && this.#size % 2 === 0 && this.#middle !== null) {
        this.#middle = this.#middle.prev
      }
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
