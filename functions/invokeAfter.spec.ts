import invokeAfter from './invokeAfter'
describe('invokeAfter', () => {
  describe('Happy path', () => {
    it('should execute fn after nth time of execution', () => {
      const mockFn = jest.fn((s: string, n: number) => ({ s, n }))
      const fn = invokeAfter(3, mockFn)

      fn('first', 1)
      expect(mockFn).toHaveBeenCalledTimes(0)

      fn('second', 2)
      expect(mockFn).toHaveBeenCalledTimes(0)

      fn('third', 3)
      expect(mockFn).toHaveBeenCalledTimes(0)

      fn('forth', 4)
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith('forth', 4)
      expect(mockFn).toHaveReturnedTimes(1)
      expect(mockFn).toHaveReturnedWith({ s: 'forth', n: 4 })
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
