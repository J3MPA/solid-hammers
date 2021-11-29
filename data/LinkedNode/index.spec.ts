import { LinkedNode } from '.'

describe('LinkedNode', () => {
  it('should create a new LinkedNode instance given correct arguments', () => {
    // prev node
    const prev = new LinkedNode('prev')
    expect(prev.prev).toBe(null)
    expect(prev.next).toBe(null)
    // next node
    const next = new LinkedNode('next')
    expect(next.prev).toBe(null)
    expect(next.next).toBe(null)
    // mid node
    const mid = new LinkedNode('mid', prev, next)
    expect(mid.prev).toBe(prev)
    expect(mid.next).toBe(next)
    // prev node have mid as next
    expect(prev.prev).toBe(null)
    expect(prev.next).toBe(mid)
    // next node have mid as prev
    expect(next.prev).toBe(mid)
    expect(next.next).toBe(null)
  })
  describe('set', () => {
    describe('Happy path', () => {
      it('should set next node given a LinkedNode instance and attr next. next node should have current node as prev', () => {
        const node = new LinkedNode('node')
        const next = new LinkedNode('next')

        const nodeSet = jest.spyOn(node, 'set')
        const nodeUnset = jest.spyOn(node, 'unset')
        const nodeReplace = jest.spyOn(node, 'replace')
        const nextSet = jest.spyOn(next, 'set')
        const nextUnset = jest.spyOn(next, 'unset')
        const nextReplace = jest.spyOn(next, 'replace')

        expect(node.next).toBe(null)
        expect(node.prev).toBe(null)

        node.set('next', next)
        expect(node.prev).toBe(null)
        expect(node.next).toBe(next)
        expect(next.prev).toBe(node)
        expect(next.next).toBe(null)
        expect(nodeSet).toHaveBeenCalledTimes(1)
        expect(nodeUnset).toHaveBeenCalledTimes(0)
        expect(nodeReplace).toHaveBeenCalledTimes(0)
        expect(nextSet).toHaveBeenCalledTimes(1)
        expect(nextSet).toHaveBeenCalledWith('prev', node)
        expect(nextUnset).toHaveBeenCalledTimes(0)
        expect(nextReplace).toHaveBeenCalledTimes(0)
      })
      it('should set prev node given a LinkedNode instance and attr prev. next node should have current node as next', () => {
        const node = new LinkedNode('node')
        const prev = new LinkedNode('prev')

        const nodeSet = jest.spyOn(node, 'set')
        const nodeUnset = jest.spyOn(node, 'unset')
        const nodeReplace = jest.spyOn(node, 'replace')
        const prevSet = jest.spyOn(prev, 'set')
        const prevUnset = jest.spyOn(prev, 'unset')
        const prevReplace = jest.spyOn(prev, 'replace')

        node.set('prev', prev)
        expect(prev.prev).toBe(null)
        expect(prev.next).toBe(node)
        expect(node.prev).toBe(prev)
        expect(node.next).toBe(null)
        expect(nodeSet).toHaveBeenCalledTimes(1)
        expect(nodeUnset).toHaveBeenCalledTimes(0)
        expect(nodeReplace).toHaveBeenCalledTimes(0)
        expect(prevSet).toHaveBeenCalledTimes(1)
        expect(prevSet).toHaveBeenCalledWith('next', node)
        expect(prevUnset).toHaveBeenCalledTimes(0)
        expect(prevReplace).toHaveBeenCalledTimes(0)
      })
    })
    describe('Sad path', () => {
      it('should throw if node is not an instance of LinkedNode', () => {
        const node = new LinkedNode('node')

        expect(() =>
          node.set('next' as any, 'next' as any)
        ).toThrowErrorMatchingSnapshot()
      })
      it('should throw if attr is not supported', () => {
        const node = new LinkedNode('node')
        const next = new LinkedNode('next')

        expect(() =>
          node.set('random' as any, next)
        ).toThrowErrorMatchingSnapshot()
      })
      it('should throw if next node is occupied', () => {
        const next = new LinkedNode('next')
        const node = new LinkedNode('node', undefined, next)
        expect(() => node.set('next', next)).toThrowErrorMatchingSnapshot()
      })
      it('should throw if prev node is occupied', () => {
        const prev = new LinkedNode('prev')
        const node = new LinkedNode('node', prev, undefined)
        expect(() => node.set('prev', prev)).toThrowErrorMatchingSnapshot()
      })
    })
  })
  describe('unset', () => {
    describe('Happy path', () => {
      it('should unset next node given a LinkedNode instance and no attr', () => {
        const node = new LinkedNode('node')
        const next = new LinkedNode('next')

        node.set('next', next)

        const nodeSet = jest.spyOn(node, 'set')
        const nodeUnset = jest.spyOn(node, 'unset')
        const nextSet = jest.spyOn(next, 'set')
        const nextUnset = jest.spyOn(next, 'unset')

        node.unset()

        expect(node.prev).toBe(null)
        expect(node.next).toBe(null)
        expect(next.prev).toBe(null)
        expect(next.next).toBe(null)

        expect(nodeSet).toHaveBeenCalledTimes(0)
        expect(nodeUnset).toHaveBeenCalledTimes(1)
        expect(nextSet).toHaveBeenCalledTimes(0)
        expect(nextUnset).toHaveBeenCalledTimes(1)
        expect(nextUnset).toHaveBeenCalledWith('prev')
      })
      it('should unset next node given a LinkedNode instance and next attr', () => {
        const node = new LinkedNode('node')
        const next = new LinkedNode('next')

        node.set('next', next)

        const nodeSet = jest.spyOn(node, 'set')
        const nodeUnset = jest.spyOn(node, 'unset')
        const nextSet = jest.spyOn(next, 'set')
        const nextUnset = jest.spyOn(next, 'unset')

        node.unset('next')

        expect(node.prev).toBe(null)
        expect(node.next).toBe(null)
        expect(next.prev).toBe(null)
        expect(next.next).toBe(null)

        expect(nodeSet).toHaveBeenCalledTimes(0)
        expect(nodeUnset).toHaveBeenCalledTimes(1)
        expect(nextSet).toHaveBeenCalledTimes(0)
        expect(nextUnset).toHaveBeenCalledTimes(1)
        expect(nextUnset).toHaveBeenCalledWith('prev')
      })
      it('should unset prev node given a LinkedNode instance and next prev', () => {
        const node = new LinkedNode('node')
        const prev = new LinkedNode('prev')

        node.set('prev', prev)

        const nodeSet = jest.spyOn(node, 'set')
        const nodeUnset = jest.spyOn(node, 'unset')
        const prevSet = jest.spyOn(prev, 'set')
        const prevUnset = jest.spyOn(prev, 'unset')

        node.unset('prev')

        expect(node.prev).toBe(null)
        expect(node.next).toBe(null)
        expect(prev.prev).toBe(null)
        expect(prev.next).toBe(null)

        expect(nodeSet).toHaveBeenCalledTimes(0)
        expect(nodeUnset).toHaveBeenCalledTimes(1)
        expect(prevSet).toHaveBeenCalledTimes(0)
        expect(prevUnset).toHaveBeenCalledTimes(1)
        expect(prevUnset).toHaveBeenCalledWith('next')
      })
    })
    describe('Sad path', () => {
      it('should throw if attr is not supported', () => {
        const node = new LinkedNode('node')
        expect(() => node.unset('random' as any)).toThrowErrorMatchingSnapshot()
      })
    })
  })
})
