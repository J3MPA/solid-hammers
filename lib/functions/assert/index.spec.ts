import {
  falsy,
  falsyOr,
  truthy,
  truthyOr,
  nullish,
  nullishOr,
  notNullish,
  notNullishOr,
} from '.'

describe('assert', () => {
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

  describe('falsy', () => {
    it('should return false for non empty strings', () => {
      expect(falsy('string')).toBe(false)
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

  describe('nullishOr', () => {
    it('should return value if value is null', () => {
      expect(nullishOr('defaultValue', null)).toBe(null)
    })
    it('should return undefined if value is undefined', () => {
      expect(nullishOr('defaultValue', undefined)).toBe(undefined)
    })
  })

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
})
