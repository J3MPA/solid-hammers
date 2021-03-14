import notNullish from '../notNullish'

describe('notNullish', () => {
  it('should return false for null', () => {
    expect(notNullish(null)).toBe(false)
  })
  it('should return false for undefined', () => {
    expect(notNullish(undefined)).toBe(false)
  })
  it('should return true for true', () => {
    expect(notNullish(true)).toBe(true)
  })
  it('should return true for zero', () => {
    expect(notNullish(0)).toBe(true)
  })
  it('should return true for empty strings', () => {
    expect(notNullish('')).toBe(true)
  })
})
