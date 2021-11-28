import { notNullishOr } from '../notNullishOr'

describe('notNullishOr', () => {
  it('should return default value if value is null', () => {
    expect(notNullishOr('defaultValue', null)).toBe('defaultValue')
  })
  it('should return default value if value is undefined', () => {
    expect(notNullishOr('defaultValue', undefined)).toBe('defaultValue')
  })
  it('should return value if value is true', () => {
    expect(notNullishOr('defaultValue', true)).toBe(true)
  })
  it('should return value if value is zero', () => {
    expect(notNullishOr('defaultValue', 0)).toBe(0)
  })
  it('should return value if value is an empty string', () => {
    expect(notNullishOr('defaultValue', '')).toBe('')
  })
})
