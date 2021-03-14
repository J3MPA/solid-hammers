import invokeOnce from './invokeOnce'

describe('invokeOnce', () => {
  describe('Happy path', () => {
    it('should invoke fn on and only on first call', () => {
      const mockFn = jest.fn((s: string, n: number) => ({ s, n }))
      const fn = invokeOnce(mockFn)

      const res1 = fn('first', 1)
      const res2 = fn('second', 2)
      const res3 = fn('third', 3)
      const res4 = fn('forth', 4)

      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenNthCalledWith(1, 'first', 1)
      expect(mockFn).toHaveReturnedTimes(1)
      expect(mockFn).toHaveNthReturnedWith(1, { s: 'first', n: 1 })

      expect(res1).toEqual({ s: 'first', n: 1 })
      expect(res2).toBe(undefined)
      expect(res3).toBe(undefined)
      expect(res4).toBe(undefined)
    })
  })
})
