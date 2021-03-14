import execAfter from './execAfter'
describe('execAfter', () => {
  describe('Happy path', () => {
    it('should execute fn after nth time of execution', () => {
      const mockFn = jest.fn((s: string, n: number) => ({ s, n }))
      const fn = execAfter(3, mockFn)

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
      expect(() => execAfter(NaN, mockFn)).toThrowError(TypeError)
      expect(() => execAfter(NaN, mockFn)).toThrowErrorMatchingSnapshot()
      expect(() => execAfter(Infinity, mockFn)).toThrowError(TypeError)
      expect(() => execAfter(Infinity, mockFn)).toThrowErrorMatchingSnapshot()
      expect(() => execAfter(null as any, mockFn)).toThrowError(TypeError)
      expect(() =>
        execAfter(null as any, mockFn)
      ).toThrowErrorMatchingSnapshot()
      expect(() => execAfter(undefined as any, mockFn)).toThrowError(TypeError)
      expect(() =>
        execAfter(undefined as any, mockFn)
      ).toThrowErrorMatchingSnapshot()
    })
  })
})
