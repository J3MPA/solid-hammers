import { Vector2 } from '.'

describe('Vector2', () => {
  describe('Sad path', () => {
    it('should trow TypeError if Vector2 is not instantiated with x as Number', () => {
      expect(() => new Vector2('some' as any, 2)).toThrow(TypeError)
      expect(() => new Vector2('some' as any, 2)).toThrowErrorMatchingSnapshot()
    })
    it('should trow TypeError if Vector2 is not instantiated with y as Number', () => {
      expect(() => new Vector2(2, 'some' as any)).toThrow(TypeError)
      expect(() => new Vector2(2, 'some' as any)).toThrowErrorMatchingSnapshot()
    })
  })
})
