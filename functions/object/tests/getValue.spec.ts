import { getValue } from '../getValue'

describe('getValue', () => {
  describe('Happy path', () => {
    it('should return value at end of path', () => {
      expect(getValue(['some'], { some: 'string' })).toBe('string')
      expect(getValue(['some'], { some: null })).toBe(null)
      expect(getValue(['some', 0], { some: ['something'] })).toBe('something')
      expect(getValue(['a', 0, 'b'], { a: [{ b: 'something' }] })).toBe(
        'something'
      )
      expect(
        getValue(['some', 'thing', 'that', 'is', 'cool'], { some: 123 })
      ).toBe(undefined)
    })
  })

  describe('Sad path', () => {
    it('should return undefined if failing to access property', () => {
      expect(
        getValue(['some', 'thing', 'that', 'is', 'cool'], { some: 123 })
      ).toBe(undefined)

      expect(
        getValue(['some', 'thing'], {
          some: { what: 123 },
        })
      ).toBe(undefined)

      expect(getValue(['a', 1, 'b'], { a: [{ b: 'something' }] })).toBe(
        undefined
      )
    })
  })
})
