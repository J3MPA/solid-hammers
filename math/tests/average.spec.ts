import { average } from '../average'

describe('average', () => {
  describe('Happy path', () => {
    it('should return avg values given an array of number', () => {
      expect(average([10, 10, 10])).toBe(10)
      expect(average([20, 5, 5])).toBe(10)
      expect(average([5, 15, 10])).toBe(10)
      expect(average([65, 78, 63, 352])).toBe(139.5)
    })
  })

  describe('Sad path', () => {
    it('should trow type error if one of given numbers is not a real number', () => {
      expect(() => average([10, '10', 10] as any)).toThrowError(TypeError)
      expect(() =>
        average([10, '10', 10] as any)
      ).toThrowErrorMatchingSnapshot()
      expect(() => average([20, 5, null] as any)).toThrowError(TypeError)
      expect(() => average([20, 5, null] as any)).toThrowErrorMatchingSnapshot()
      expect(() => average([5, 15, undefined] as any)).toThrowError(TypeError)
      expect(() =>
        average([5, 15, undefined] as any)
      ).toThrowErrorMatchingSnapshot()
      expect(() => average([65, 78, 63, NaN] as any)).toThrowError(TypeError)
      expect(() =>
        average([65, 78, 63, NaN] as any)
      ).toThrowErrorMatchingSnapshot()
      expect(() => average([65, 78, 63, Infinity] as any)).toThrowError(
        TypeError
      )
      expect(() =>
        average([65, 78, 63, Infinity] as any)
      ).toThrowErrorMatchingSnapshot()
      expect(() => average([65, 78, 63, []] as any)).toThrowError(TypeError)
      expect(() =>
        average([65, 78, 63, []] as any)
      ).toThrowErrorMatchingSnapshot()
      expect(() => average([65, 78, 63, {}] as any)).toThrowError(TypeError)
      expect(() =>
        average([65, 78, 63, {}] as any)
      ).toThrowErrorMatchingSnapshot()
      expect(() => average([65, 78, 63, ''] as any)).toThrowError(TypeError)
      expect(() =>
        average([65, 78, 63, ''] as any)
      ).toThrowErrorMatchingSnapshot()
    })
  })
})
