import truthy from '../truthy'

describe('truthy', () => {
  it('should return true for non empty strings', () => {
    expect(truthy('string')).toBe(true)
  })
  it('should return false for empty strings', () => {
    expect(truthy('')).toBe(false)
  })
  it('should return true for arrays', () => {
    expect(truthy([])).toBe(true)
  })
  it('should return true for objects', () => {
    expect(truthy({})).toBe(true)
  })
  it('should return true for non zero number', () => {
    expect(truthy(1)).toBe(true)
    expect(truthy(1234)).toBe(true)
    expect(truthy(1234.42131)).toBe(true)
  })
  it('should return false for zero number', () => {
    expect(truthy(0)).toBe(false)
  })
  it('should return false for null', () => {
    expect(truthy(null)).toBe(false)
  })
  it('should return false for undefined', () => {
    expect(truthy(undefined)).toBe(false)
  })
  it('should return true for functions', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(truthy(() => {})).toBe(true)
  })
})
