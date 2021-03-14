import invokeAfter from '../invokeAfter'
describe('invokeAfter', () => {
  describe('Happy path', () => {
    it('should invoke fn after nth calls', () => {
      const mockFn = jest.fn((s: string, n: number) => ({ s, n }))
      const fn = invokeAfter(3, mockFn)

      const res1 = fn('first', 1)
      const res2 = fn('second', 2)
      const res3 = fn('third', 3)
      const res4 = fn('forth', 4)

      expect(mockFn).toHaveBeenCalledTimes(2)
      expect(mockFn).toHaveBeenNthCalledWith(1, 'third', 3)
      expect(mockFn).toHaveBeenNthCalledWith(2, 'forth', 4)

      expect(mockFn).toHaveReturnedTimes(2)
      expect(mockFn).toHaveNthReturnedWith(1, { s: 'third', n: 3 })
      expect(mockFn).toHaveNthReturnedWith(2, { s: 'forth', n: 4 })

      expect(res1).toBe(undefined)
      expect(res2).toBe(undefined)
      expect(res3).toEqual({ s: 'third', n: 3 })
      expect(res4).toEqual({ s: 'forth', n: 4 })
    })
  })

  describe('Sad path', () => {
    it('should throw TypeError if nth time is not a real number', () => {
      const mockFn = jest.fn()
      expect(() => invokeAfter(NaN, mockFn)).toThrowError(TypeError)
      expect(() => invokeAfter(NaN, mockFn)).toThrowErrorMatchingSnapshot()
      expect(() => invokeAfter(Infinity, mockFn)).toThrowError(TypeError)
      expect(() => invokeAfter(Infinity, mockFn)).toThrowErrorMatchingSnapshot()
      expect(() => invokeAfter(null as any, mockFn)).toThrowError(TypeError)
      expect(() =>
        invokeAfter(null as any, mockFn)
      ).toThrowErrorMatchingSnapshot()
      expect(() => invokeAfter(undefined as any, mockFn)).toThrowError(
        TypeError
      )
      expect(() =>
        invokeAfter(undefined as any, mockFn)
      ).toThrowErrorMatchingSnapshot()
    })
  })
})
