import average from '../average'

describe('average', () => {
  describe('Happy path', () => {
    it('should return avg values given an array of number', () => {
      expect(average([10, 10, 10])).toBe(10)
      expect(average([20, 5, 5])).toBe(10)
      expect(average([5, 15, 10])).toBe(10)
      expect(average([65, 78, 63, 352])).toBe(10)
    })
  })
})
