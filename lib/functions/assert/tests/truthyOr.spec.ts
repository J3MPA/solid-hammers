import truthyOr from '../truthyOr'

describe('truthyOr', () => {
  it('should return default value if value is falsy', () => {
    expect(truthyOr('defaultValue', false)).toBe('defaultValue')
    expect(truthyOr('defaultValue', 0)).toBe('defaultValue')
    expect(truthyOr('defaultValue', null)).toBe('defaultValue')
    expect(truthyOr('defaultValue', undefined)).toBe('defaultValue')
    expect(truthyOr('defaultValue', '')).toBe('defaultValue')
  })

  it('should return value if value is truthy', () => {
    expect(truthyOr('defaultValue', 'value')).toBe('value')
    const arr = [1]
    expect(truthyOr('defaultValue', arr)).toBe(arr)
    const obj = {}
    expect(truthyOr('defaultValue', obj)).toBe(obj)
    expect(truthyOr('defaultValue', 123)).toBe(123)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const some = () => {}
    expect(truthyOr('defaultValue', some)).toBe(some)
    expect(truthyOr('defaultValue', true)).toBe(true)
  })
})
