import { falsy } from '../falsy'

describe('falsy', () => {
  it('should return false for non empty strings', () => {
    expect(falsy('string')).toBe(true)
  })
  it('should return true for empty strings', () => {
    expect(falsy('')).toBe(true)
  })
  it('should return false for arrays', () => {
    expect(falsy([])).toBe(false)
  })
  it('should return false for objects', () => {
    expect(falsy({})).toBe(false)
  })
  it('should return false for non zero number', () => {
    expect(falsy(1)).toBe(false)
    expect(falsy(1234)).toBe(false)
    expect(falsy(1234.42131)).toBe(false)
  })
  it('should return true for zero number', () => {
    expect(falsy(0)).toBe(true)
  })
  it('should return true for null', () => {
    expect(falsy(null)).toBe(true)
  })
  it('should return true for undefined', () => {
    expect(falsy(undefined)).toBe(true)
  })
  it('should return false for functions', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(falsy(() => {})).toBe(false)
  })
})
