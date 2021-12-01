import { Node } from '.'

describe('Node', () => {
  describe('Happy path', () => {
    it('should create a Node instance given a value', () => {
      const ref = {}
      const node = new Node(ref)
      expect(node.parents.length).toBe(0)
      expect(node.children.length).toBe(0)
      expect(node.value).toBe(ref)
    })
  })
})
