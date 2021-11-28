import { falsyOr } from '../falsyOr'

describe('falsyOr', () => {
  it('should return value if value is falsy', () => {
    expect(falsyOr('defaultValue', false)).toBe(false)
    expect(falsyOr('defaultValue', 0)).toBe(0)
    expect(falsyOr('defaultValue', null)).toBe(null)
    expect(falsyOr('defaultValue', undefined)).toBe(undefined)
    expect(falsyOr('defaultValue', '')).toBe('')
  })

  it('should return default value if value is truthy', () => {
    expect(falsyOr('defaultValue', 'value')).toBe('defaultValue')
    expect(falsyOr('defaultValue', [])).toBe('defaultValue')
    expect(falsyOr('defaultValue', {})).toBe('defaultValue')
    expect(falsyOr('defaultValue', 123)).toBe('defaultValue')
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(falsyOr('defaultValue', () => {})).toBe('defaultValue')
    expect(falsyOr('defaultValue', true)).toBe('defaultValue')
  })
})
