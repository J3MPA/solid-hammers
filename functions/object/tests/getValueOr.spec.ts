import { getValueOr } from '../getValueOr'

describe('getValueOr', () => {
  describe('Happy path', () => {
    it('should return value at end of path', () => {
      expect(getValueOr('defaultValue', ['some'], { some: 'string' })).toBe(
        'string'
      )
      expect(getValueOr('defaultValue', ['some'], { some: null })).toBe(null)
      expect(
        getValueOr('defaultValue', ['some', 0], { some: ['something'] })
      ).toBe('something')
    })
  })

  describe('Sad path', () => {
    it('should return default value if failing to access property', () => {
      expect(
        getValueOr('defaultValue', ['some', 'thing', 'that', 'is', 'cool'], {
          some: 123,
        })
      ).toBe('defaultValue')

      expect(
        getValueOr('defaultValue', ['some', 'thing'], {
          some: { what: 123 },
        })
      ).toBe('defaultValue')
    })
  })
})
