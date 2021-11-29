import type { Nullable } from '../../types'

const NEXT = 'next' as const
const PREV = 'prev' as const
const ATTRS = [NEXT, PREV]
type LinkedNodeAttrs = typeof NEXT | typeof PREV
const DEFAULT_ATTR: LinkedNodeAttrs = NEXT
const SUPPORTED_ATTRS = new Set(ATTRS)
const SUPPORTED_ATTRS_UNION_STRING = ATTRS.join(' | ')

/**
 * Singly linked node (maximum of one parent and child).
 * Safety comes from having parent and child node not being movable by default. If parent or child node is occupied (set) they need to be unsafely set (replace) or unset (unset)
 */
export class LinkedNode<T = unknown> {
  #value: T
  #prev: Nullable<LinkedNode<T>> = null
  #next: Nullable<LinkedNode<T>> = null
  constructor(
    value: T,
    prev: Nullable<LinkedNode<T>> = null,
    next: Nullable<LinkedNode<T>> = null
  ) {
    this.#value = value
    if (LinkedNode.isLinkedNode(next)) {
      this.set(NEXT, next)
    } else if (next !== null) {
      throw new TypeError('next node must be of type LinkedNode')
    }
    if (LinkedNode.isLinkedNode(prev)) {
      this.set(PREV, prev)
    } else if (prev !== null) {
      throw new TypeError('prev node must be of type LinkedNode')
    }
  }
  static new<T>(
    value: T,
    prev?: Nullable<LinkedNode<T>>,
    next?: Nullable<LinkedNode<T>>
  ): LinkedNode<T> {
    return new LinkedNode(value, prev, next)
  }
  public get prev() {
    return this.#prev
  }
  public get next() {
    return this.#next
  }
  public get value() {
    return this.#value
  }
  /**
   * Safely sets `next` or `prev` node. If nodes are currently occupied an exception is raised.
   * @param node the LinkNode to set
   * @param attr attribute to set `next` or `prev`
   * @returns `LinkedNode`
   */
  public set(attr: LinkedNodeAttrs, node: LinkedNode<T>): LinkedNode<T> {
    if (LinkedNode.isLinkedNode(node) === false) {
      throw new TypeError(`${attr} node must be of type LinkedNode`)
    }
    if (SUPPORTED_ATTRS.has(attr) === false) {
      throw TypeError(
        `Can't set attribute ${attr}, supported attributes: ${SUPPORTED_ATTRS_UNION_STRING}`
      )
    }

    switch (attr) {
      case NEXT: {
        if (this.#next !== null) {
          throw new Error(
            "Can't set next node, it's occupied by another node, use replace(attr, node) to unsafely set next node or unset(attr) before set(attr, node)"
          )
        }
        this.#next = node
        switch (node.prev) {
          case null:
            node.set(PREV, this)
            break
          case this:
            break
          default:
            node.replace(PREV, this)
            break
        }
        break
      }
      case PREV:
        if (this.#prev !== null) {
          throw new Error(
            "Can't set prev node, it's occupied by another node, use replace(attr, node) to unsafely set prev node or unset(attr) before set(attr, node)"
          )
        }
        this.#prev = node
        switch (node.next) {
          case null:
            node.set(NEXT, this)
            break
          case this:
            break
          default:
            node.replace(NEXT, this)
            break
        }
        break
    }
    return this
  }
  /**
   * Unsafely sets (replaces) `next` or `prev` node. If nodes are currently occupied they will be replaced by new node. Same as `node.unset(attr).set(newNode, attr)`
   * @param node the LinkNode to set
   * @param attr attribute to set `next` or `prev`
   * @returns `LinkedNode`
   */
  public replace(attr: LinkedNodeAttrs, node: LinkedNode<T>): LinkedNode<T> {
    if (LinkedNode.isLinkedNode(node) === false) {
      throw new TypeError(`${attr} node must be of type LinkedNode`)
    }
    if (SUPPORTED_ATTRS.has(attr) === false) {
      throw TypeError(
        `Can't shift attribute ${attr}, supported attributes: ${SUPPORTED_ATTRS_UNION_STRING}`
      )
    }
    return this.unset(attr).set(attr, node)
  }
  /**
   * Unset `next` or `prev` node.
   * @param attr `next` or `prev`, default `next`
   * @returns `LinkedNode`
   */
  public unset(attr: LinkedNodeAttrs = DEFAULT_ATTR): LinkedNode<T> {
    if (SUPPORTED_ATTRS.has(attr) === false) {
      throw TypeError(
        `Can't unset attribute ${attr}, supported attributes: ${SUPPORTED_ATTRS_UNION_STRING}`
      )
    }

    switch (attr) {
      case NEXT: {
        const next = this.#next
        this.#next = null
        if (next?.prev === this) {
          next.unset(PREV)
        }
        break
      }
      case PREV: {
        const prev = this.#prev
        this.#prev = null
        if (prev?.next === this) {
          prev.unset(NEXT)
        }
        break
      }
    }
    return this
  }
  /**
   * Maps current node value to new value of same type
   * @param fn map function, in: value, out: new value of same type
   * @returns `LinkedNode`
   */
  public map(fn: (value: T) => T): LinkedNode<T> {
    const newLink = LinkedNode.new(fn(this.#value), this.#prev, this.#next)
    this.#next = null
    this.#prev = null
    return newLink
  }
  /**
   * Check if unknown node is same instance
   * @param node the unknown node
   * @returns `true` if `node` is same instance (this) else `false`
   */
  public equals(node: unknown): node is LinkedNode<T> {
    return this === node
  }
  /**
   * Check if unknown node is an instance of LinkedNode
   * @param node the unknown node
   * @returns `true` if `node` is an instance of LinkedNode else `false`
   */
  public static isLinkedNode(node: unknown): node is LinkedNode {
    return node instanceof LinkedNode
  }
}
