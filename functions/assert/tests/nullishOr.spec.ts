import { nullishOr } from '../nullishOr'

describe('nullishOr', () => {
  it('should return value if value is null', () => {
    expect(nullishOr('defaultValue', null)).toBe(null)
  })
  it('should return undefined if value is undefined', () => {
    expect(nullishOr('defaultValue', undefined)).toBe(undefined)
  })
})
