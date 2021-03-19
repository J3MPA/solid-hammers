import getProperty from '../getProperty'

describe('getProperty', () => {
  describe('Happy path', () => {
    it('should return true if object has any properties', () => {
      expect(getProperty(['some'], { some: 'string' })).toBe('string')
      expect(getProperty(['some'], { some: null })).toBe(null)
      expect(getProperty(['some', 0], { some: ['something'] })).toBe(
        'something'
      )
      expect(
        getProperty(['some', 'thing', 'that', 'is', 'cool'], { some: 123 })
      ).toBe(undefined)
    })
  })
})
