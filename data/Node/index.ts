import { arrayStrict } from '../proxy-handlers'

enum NodeAttribute {
  Parents,
  Children,
}

export class Node<T = unknown> {
  static Attribute = NodeAttribute
  #value: T
  #parents: Node<T>[] = []
  #children: Node<T>[] = []
  #p_parents = new Proxy<Node<T>[]>(this.#parents, arrayStrict)
  #p_children = new Proxy<Node<T>[]>(this.#children, arrayStrict)
  constructor(value: T) {
    this.#value = value
  }
  public static new<T>(value: T) {
    return new Node(value)
  }
  public static isNode(maybeNode: unknown): maybeNode is Node {
    return maybeNode instanceof Node
  }
  public get value() {
    return this.#value
  }
  public get parents() {
    return this.#p_parents
  }
  public get children() {
    return this.#p_children
  }
  public equal(maybeNode: unknown): maybeNode is Node<T> {
    return this === maybeNode
  }
  public update(value: T): Node<T> {
    this.#value = value
    return this
  }
  public addParent<N extends Node<T>>(node: N): Node<T> {
    this.#parents.push(node)
    return this
  }
  public addChild<N extends Node<T>>(node: N): Node<T> {
    this.#children.push(node)
    return this
  }
  /**
   * Checks if the instance has another node as a parent
   * @param node the node to assert as parent
   * @returns `true` if `node` is a parent of the instance else `false`
   */
  public hasParent(node: Node<T>): node is Node<T> {
    return this.#parents.indexOf(node) !== -1
  }
  /**
   * Checks if the instance has another node as a child
   * @param node the node to assert as child
   * @returns `true` if `node` is a child of the instance else `false`
   */
  public hasChild(node: Node<T>): node is Node<T> {
    return this.#children.indexOf(node) !== -1
  }
  /**
   * Checks if the instance is a parent of another node or if the instance is a parent
   * @param node the node to assert as child, can be undefined
   * @returns if `node` is defined, `true` if `node` has `current instance` as a parent else `false`.
   * @returns if `node` is undefined, `true` if `current instance` property `children` has a length bigger than `zero` else `false`
   */
  public isParent(node?: Node<T>) {
    if (node) {
      return node.hasParent(this)
    } else {
      return this.#children.length > 0
    }
  }
  /**
   * Checks if the instance is a child of another node or if the instance is a child
   * @param node the node to assert as parent, can be undefined
   * @returns if `node` is defined, `true` if `node` has `current instance` as a child else `false`.
   * @returns if `node` is undefined, `true` if `current instance` property `parents` has a length bigger than `zero` else `false`
   */
  public isChild(node?: Node<T>) {
    if (node) {
      return node.hasChild(this)
    } else {
      return this.#children.length > 0
    }
  }
  public clean(type: NodeAttribute) {
    switch (type) {
      case NodeAttribute.Parents:
        this.#parents = []
        return this
      case NodeAttribute.Children:
        this.#children = []
        return this
      default:
        return this
    }
  }
}
