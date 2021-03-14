import invokeOn from './invokeOn'
describe('invokeOn', () => {
  describe('Happy path', () => {
    it('should invoke fn on and only on nth call', () => {
      const mockFn = jest.fn((s: string, n: number) => ({ s, n }))
      const fn = invokeOn(3, mockFn)

      const res1 = fn('first', 1)
      const res2 = fn('second', 2)
      const res3 = fn('third', 3)
      const res4 = fn('forth', 4)

      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenNthCalledWith(1, 'third', 3)

      expect(mockFn).toHaveReturnedTimes(1)
      expect(mockFn).toHaveNthReturnedWith(1, { s: 'third', n: 3 })

      expect(res1).toBe(undefined)
      expect(res2).toBe(undefined)
      expect(res3).toEqual({ s: 'third', n: 3 })
      expect(res4).toBe(undefined)
    })
  })

  describe('Sad path', () => {
    it('should throw TypeError if nth time is not a real number', () => {
      const mockFn = jest.fn()
      expect(() => invokeOn(NaN, mockFn)).toThrowError(TypeError)
      expect(() => invokeOn(NaN, mockFn)).toThrowErrorMatchingSnapshot()
      expect(() => invokeOn(Infinity, mockFn)).toThrowError(TypeError)
      expect(() => invokeOn(Infinity, mockFn)).toThrowErrorMatchingSnapshot()
      expect(() => invokeOn(null as any, mockFn)).toThrowError(TypeError)
      expect(() => invokeOn(null as any, mockFn)).toThrowErrorMatchingSnapshot()
      expect(() => invokeOn(undefined as any, mockFn)).toThrowError(TypeError)
      expect(() =>
        invokeOn(undefined as any, mockFn)
      ).toThrowErrorMatchingSnapshot()
    })
  })
})
