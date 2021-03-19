import median from '../median'

describe('median', () => {
  describe('Happy path', () => {
    it('should return median if given an array of number', () => {
      expect(median([30, 10, 5])).toBe(10)
      expect(median([20, 5, 5])).toBe(5)
      expect(median([20, 10, 10, 20])).toBe(15)
      expect(median([20, 5, 10, 10])).toBe(10)
      expect(median([20, 5, 10, 20])).toBe(15)
    })
  })
})
