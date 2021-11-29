import type { Nullable } from '../../types'
import { Node } from '../Node'

export class LinkedList<T = unknown> {
  #head: Nullable<Node<T>> = null
  #tail: Nullable<Node<T>> = null
  #middle: Nullable<Node<T>> = null
  #size = 0
  public get size() {
    return this.#size
  }
  public get peak() {
    return this.#head
  }
  public push(value: T): LinkedList<T> {
    const node = new Node(value)
    if (this.#tail === null || this.#head === null || this.#middle === null) {
      this.#head = node
      this.#middle = node
      this.#tail = node
    } else {
      const tail = this.#tail
      // set next
      tail.clean(Node.Attribute.Children).addChild(node)
      // set prev
      node.addParent(tail)
      this.#tail = node
    }
    this.#size += 1
    // if size is uneven and not strict one then make #middle the tail of #middle
    if (this.#size !== 1 && this.#size % 2 !== 0) {
      this.#middle = this.#middle.children[0] ?? null
    }
    return this
  }
  public pop(): LinkedList<T> {
    if (this.#tail) {
      const tail = this.#tail
      const prev = tail.parents[0]
      if (prev) {
        prev.clean(Node.Attribute.Children)
        tail.clean(Node.Attribute.Parents)
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
