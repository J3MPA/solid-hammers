import invokeUntil from '../invokeUntil'
describe('invokeUntil', () => {
  describe('Happy path', () => {
    it('should invoke fn before nth calls', () => {
      const mockFn = jest.fn((s: string, n: number) => ({ s, n }))
      const fn = invokeUntil(3, mockFn)

      const res1 = fn('first', 1)
      const res2 = fn('second', 2)
      const res3 = fn('third', 3)
      const res4 = fn('forth', 4)

      expect(mockFn).toHaveBeenCalledTimes(3)
      expect(mockFn).toHaveBeenNthCalledWith(1, 'first', 1)
      expect(mockFn).toHaveBeenNthCalledWith(2, 'second', 2)
      expect(mockFn).toHaveBeenNthCalledWith(3, 'third', 3)

      expect(mockFn).toHaveReturnedTimes(3)
      expect(mockFn).toHaveNthReturnedWith(1, { s: 'first', n: 1 })
      expect(mockFn).toHaveNthReturnedWith(2, { s: 'second', n: 2 })
      expect(mockFn).toHaveNthReturnedWith(3, { s: 'third', n: 3 })

      expect(res1).toEqual({ s: 'first', n: 1 })
      expect(res2).toEqual({ s: 'second', n: 2 })
      expect(res3).toEqual({ s: 'third', n: 3 })
      expect(res4).toBe(undefined)
    })
  })

  describe('Sad path', () => {
    it('should throw TypeError if nth time is not a real number', () => {
      const mockFn = jest.fn()
      expect(() => invokeUntil(NaN, mockFn)).toThrowError(TypeError)
      expect(() => invokeUntil(NaN, mockFn)).toThrowErrorMatchingSnapshot()
      expect(() => invokeUntil(Infinity, mockFn)).toThrowError(TypeError)
      expect(() => invokeUntil(Infinity, mockFn)).toThrowErrorMatchingSnapshot()
      expect(() => invokeUntil(null as any, mockFn)).toThrowError(TypeError)
      expect(() =>
        invokeUntil(null as any, mockFn)
      ).toThrowErrorMatchingSnapshot()
      expect(() => invokeUntil(undefined as any, mockFn)).toThrowError(
        TypeError
      )
      expect(() =>
        invokeUntil(undefined as any, mockFn)
      ).toThrowErrorMatchingSnapshot()
    })
  })
})
