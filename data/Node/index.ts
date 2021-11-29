import { arrayStrict } from '../proxy-handlers'

const CHILD = 'child' as const
const PARENT = 'parent' as const
const ATTRS = [CHILD, PARENT]
type NodeAttrs = typeof ATTRS extends readonly (infer T)[] ? T : never
// const SUPPORTED_ATTRS = new Set(ATTRS)
// const SUPPORTED_ATTRS_UNION_STRING = ATTRS.join(' | ')

export class Node<T = unknown> {
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
  public add(attr: NodeAttrs, node: Node<T>): Node<T> {
    switch (attr) {
      case PARENT: {
        if (this.hasParent(node) === false) {
          this.#parents.push(node)
        }
        break
      }
      case CHILD: {
        if (this.hasChild(node) === false) {
          this.#children.push(node)
        }
        break
      }
    }
    return this
  }
  public remove(attr: NodeAttrs, node: Node<T>) {
    switch (attr) {
      case PARENT: {
        if (this.hasParent(node)) {
          this.#parents.splice(this.#parents.indexOf(node), 1)
        }
        break
      }
      case CHILD: {
        if (this.hasChild(node)) {
          this.#children.splice(this.#children.indexOf(node), 1)
        }
        break
      }
    }
    return this
  }

  public removeAll(attr: 'parents' | 'children') {
    switch (attr) {
      case 'parents':
        for (const parent of this.#parents) {
          parent.remove('child', this)
        }
        break
      case 'children':
        for (const child of this.#children) {
          child.remove('parent', this)
        }
        break
    }
    return this
  }
}
