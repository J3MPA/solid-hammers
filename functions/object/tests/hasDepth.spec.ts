import { hasDepth } from '../hasDepth'

describe('hasDepth', () => {
  describe('Happy path', () => {
    it('should return true if object has any properties', () => {
      expect(hasDepth({ some: 'string' })).toBe(true)
    })
    it('should return false if object is null', () => {
      expect(hasDepth(null)).toBe(false)
    })
    it('should return false if object is undefined', () => {
      expect(hasDepth(undefined)).toBe(false)
    })
    it('should return false if object is an array', () => {
      expect(hasDepth([1, 2, 3, 4])).toBe(false)
    })
    it('should return false if object has no properties', () => {
      expect(hasDepth({})).toBe(false)
    })
  })
})
