import invokeOn from './invokeOn'
describe('invokeOn', () => {
  describe('Happy path', () => {
    it('should execute fn on nth time of execution', () => {
      const mockFn = jest.fn((s: string, n: number) => ({ s, n }))
      const fn = invokeOn(3, mockFn)

      fn('first', 1)
      expect(mockFn).toHaveBeenCalledTimes(0)

      fn('second', 2)
      expect(mockFn).toHaveBeenCalledTimes(0)

      fn('third', 3)
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith('third', 3)
      expect(mockFn).toHaveReturnedTimes(1)
      expect(mockFn).toHaveReturnedWith({ s: 'third', n: 3 })
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
