import execOn from './execOn'
describe('execOn', () => {
  describe('Happy path', () => {
    it('should execute fn on nth time of execution', () => {
      const mockFn = jest.fn((s: string, n: number) => ({ s, n }))
      const fn = execOn(3, mockFn)

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
      expect(() => execOn(NaN, mockFn)).toThrowError(TypeError)
      expect(() => execOn(NaN, mockFn)).toThrowErrorMatchingSnapshot()
      expect(() => execOn(Infinity, mockFn)).toThrowError(TypeError)
      expect(() => execOn(Infinity, mockFn)).toThrowErrorMatchingSnapshot()
      expect(() => execOn(null as any, mockFn)).toThrowError(TypeError)
      expect(() => execOn(null as any, mockFn)).toThrowErrorMatchingSnapshot()
      expect(() => execOn(undefined as any, mockFn)).toThrowError(TypeError)
      expect(() =>
        execOn(undefined as any, mockFn)
      ).toThrowErrorMatchingSnapshot()
    })
  })
})
