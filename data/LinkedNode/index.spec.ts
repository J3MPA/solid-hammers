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
  it('should throw error if LinkedNode is instantiated with prev as non nullish LinkedNode', () => {
    expect(() => new LinkedNode('prev', new LinkedNode('1'))).not.toThrow(Error)
    expect(() => new LinkedNode('prev', null)).not.toThrow(Error)
    expect(() => new LinkedNode('prev', undefined)).not.toThrow(Error)
    expect(
      () => new LinkedNode('prev', '1' as any)
    ).toThrowErrorMatchingSnapshot()
  })
  it('should throw error if LinkedNode is instantiated with next as non nullish LinkedNode', () => {
    expect(
      () => new LinkedNode('prev', new LinkedNode('1'), new LinkedNode('1'))
    ).not.toThrow(Error)
    expect(() => new LinkedNode('prev', new LinkedNode('1'), null)).not.toThrow(
      Error
    )
    expect(
      () => new LinkedNode('prev', new LinkedNode('1'), undefined)
    ).not.toThrow(Error)
    expect(
      () => new LinkedNode('prev', new LinkedNode('1'), '1' as any)
    ).toThrowErrorMatchingSnapshot()
  })
  describe('link', () => {
    describe('Happy path', () => {
      it('should link next node given a LinkedNode instance and attr next. next node should have current node as prev', () => {
        const node = new LinkedNode('node')
        const next = new LinkedNode('next')

        const nodeLink = jest.spyOn(node, 'link')
        const nodeUnlink = jest.spyOn(node, 'unlink')
        const nodeChange = jest.spyOn(node, 'change')
        const nextLink = jest.spyOn(next, 'link')
        const nextUnlink = jest.spyOn(next, 'unlink')
        const nextChange = jest.spyOn(next, 'change')

        expect(node.next).toBe(null)
        expect(node.prev).toBe(null)

        node.link('next', next)
        expect(node.prev).toBe(null)
        expect(node.next).toBe(next)
        expect(next.prev).toBe(node)
        expect(next.next).toBe(null)
        expect(nodeLink).toHaveBeenCalledTimes(1)
        expect(nodeUnlink).toHaveBeenCalledTimes(0)
        expect(nodeChange).toHaveBeenCalledTimes(0)
        expect(nextLink).toHaveBeenCalledTimes(1)
        expect(nextLink).toHaveBeenCalledWith('prev', node)
        expect(nextUnlink).toHaveBeenCalledTimes(0)
        expect(nextChange).toHaveBeenCalledTimes(0)
      })
      it('should link prev node given a LinkedNode instance and attr prev. next node should have current node as next', () => {
        const node = new LinkedNode('node')
        const prev = new LinkedNode('prev')

        const nodeLink = jest.spyOn(node, 'link')
        const nodeUnlink = jest.spyOn(node, 'unlink')
        const nodeChange = jest.spyOn(node, 'change')
        const prevLink = jest.spyOn(prev, 'link')
        const prevUnlink = jest.spyOn(prev, 'unlink')
        const prevChange = jest.spyOn(prev, 'change')

        node.link('prev', prev)
        expect(prev.prev).toBe(null)
        expect(prev.next).toBe(node)
        expect(node.prev).toBe(prev)
        expect(node.next).toBe(null)
        expect(nodeLink).toHaveBeenCalledTimes(1)
        expect(nodeUnlink).toHaveBeenCalledTimes(0)
        expect(nodeChange).toHaveBeenCalledTimes(0)
        expect(prevLink).toHaveBeenCalledTimes(1)
        expect(prevLink).toHaveBeenCalledWith('next', node)
        expect(prevUnlink).toHaveBeenCalledTimes(0)
        expect(prevChange).toHaveBeenCalledTimes(0)
      })
    })
    describe('Sad path', () => {
      it('should throw if next node is not an instance of LinkedNode', () => {
        expect(() =>
          new LinkedNode('node').link('next' as any, 'next' as any)
        ).toThrowErrorMatchingSnapshot()
      })
      it('should throw if prev node is not an instance of LinkedNode', () => {
        expect(() =>
          new LinkedNode('node').link('prev' as any, 'prev' as any)
        ).toThrowErrorMatchingSnapshot()
      })
      it('should throw if attr is not supported', () => {
        expect(() =>
          new LinkedNode('node').link('random' as any, new LinkedNode('next'))
        ).toThrowErrorMatchingSnapshot()
      })
      it('should throw if next node is occupied', () => {
        expect(() =>
          new LinkedNode('node', undefined, new LinkedNode('next')).link(
            'next',
            new LinkedNode('new')
          )
        ).toThrowErrorMatchingSnapshot()
      })
      it('should throw if prev node is occupied', () => {
        expect(() =>
          new LinkedNode('node', new LinkedNode('prev'), undefined).link(
            'prev',
            new LinkedNode('new')
          )
        ).toThrowErrorMatchingSnapshot()
      })
    })
  })
  describe('unlink', () => {
    describe('Happy path', () => {
      it('should unlink next node given a LinkedNode instance and no attr', () => {
        const node = new LinkedNode('node')
        const next = new LinkedNode('next')

        node.link('next', next)

        const nodeLink = jest.spyOn(node, 'link')
        const nodeUnlink = jest.spyOn(node, 'unlink')
        const nextLink = jest.spyOn(next, 'link')
        const nextUnlink = jest.spyOn(next, 'unlink')

        node.unlink()

        expect(node.prev).toBe(null)
        expect(node.next).toBe(null)
        expect(next.prev).toBe(null)
        expect(next.next).toBe(null)

        expect(nodeLink).toHaveBeenCalledTimes(0)
        expect(nodeUnlink).toHaveBeenCalledTimes(1)
        expect(nextLink).toHaveBeenCalledTimes(0)
        expect(nextUnlink).toHaveBeenCalledTimes(1)
        expect(nextUnlink).toHaveBeenCalledWith('prev')
      })
      it('should unlink next node given a LinkedNode instance and next attr', () => {
        const node = new LinkedNode('node')
        const next = new LinkedNode('next')

        node.link('next', next)

        const nodeLink = jest.spyOn(node, 'link')
        const nodeUnlink = jest.spyOn(node, 'unlink')
        const nextLink = jest.spyOn(next, 'link')
        const nextUnlink = jest.spyOn(next, 'unlink')

        node.unlink('next')

        expect(node.prev).toBe(null)
        expect(node.next).toBe(null)
        expect(next.prev).toBe(null)
        expect(next.next).toBe(null)

        expect(nodeLink).toHaveBeenCalledTimes(0)
        expect(nodeUnlink).toHaveBeenCalledTimes(1)
        expect(nextLink).toHaveBeenCalledTimes(0)
        expect(nextUnlink).toHaveBeenCalledTimes(1)
        expect(nextUnlink).toHaveBeenCalledWith('prev')
      })
      it('should unlink prev node given a LinkedNode instance and next prev', () => {
        const node = new LinkedNode('node')
        const prev = new LinkedNode('prev')

        node.link('prev', prev)

        const nodeLink = jest.spyOn(node, 'link')
        const nodeUnlink = jest.spyOn(node, 'unlink')
        const prevLink = jest.spyOn(prev, 'link')
        const prevUnlink = jest.spyOn(prev, 'unlink')

        node.unlink('prev')

        expect(node.prev).toBe(null)
        expect(node.next).toBe(null)
        expect(prev.prev).toBe(null)
        expect(prev.next).toBe(null)

        expect(nodeLink).toHaveBeenCalledTimes(0)
        expect(nodeUnlink).toHaveBeenCalledTimes(1)
        expect(prevLink).toHaveBeenCalledTimes(0)
        expect(prevUnlink).toHaveBeenCalledTimes(1)
        expect(prevUnlink).toHaveBeenCalledWith('next')
      })
    })
    describe('Sad path', () => {
      it('should throw if attr is not supported', () => {
        expect(() =>
          new LinkedNode('node').unlink('random' as any)
        ).toThrowErrorMatchingSnapshot()
      })
    })
  })
})
