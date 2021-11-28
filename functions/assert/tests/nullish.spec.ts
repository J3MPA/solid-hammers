import { nullish } from '../nullish'

describe('nullish', () => {
  it('should return true for null', () => {
    expect(nullish(null)).toBe(true)
  })
  it('should return true for undefined', () => {
    expect(nullish(undefined)).toBe(true)
  })
  it('should return false for false', () => {
    expect(nullish(false)).toBe(false)
  })
  it('should return false for zero', () => {
    expect(nullish(0)).toBe(false)
  })
  it('should return false for empty strings', () => {
    expect(nullish('')).toBe(false)
  })
})
