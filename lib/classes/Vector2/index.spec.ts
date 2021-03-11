import { Vector2 } from '.'

describe('Vector2', () => {
  describe('Happy path', () => {
    describe('constructor', () => {
      it('should construct a Vector2 instance given x and y coordinates', () => {
        const v = new Vector2(13, 37)
        expect(v).toBeInstanceOf(Vector2)
        expect(v.x).toBe(13)
        expect(v.y).toBe(37)
      })
    })
    describe('static distanceBetween', () => {
      it('should return the distance between two vectors', () => {
        const v1 = new Vector2(100, 200)
        const v2 = new Vector2(500, 250)
        const d = Vector2.distanceBetween(v1, v2)
        expect(d).toBe(403.11288741492746)
      })
    })

    describe('static sum', () => {
      it('should return sum two vectors', () => {
        const v1 = new Vector2(100, 200)
        const v2 = new Vector2(500, 250)
        const v3 = Vector2.sum(v1, v2)
        expect(v3.x).toBe(600)
        expect(v3.y).toBe(450)
      })

      it('should return a new Vector2 instance', () => {
        const v1 = new Vector2(100, 200)
        const v2 = new Vector2(500, 250)
        const v3 = Vector2.sum(v1, v2)
        expect(v3).toBeInstanceOf(Vector2)
      })
    })

    describe('static subtract', () => {
      it('should return difference of two vectors', () => {
        const v1 = new Vector2(100, 200)
        const v2 = new Vector2(500, 250)
        const v3 = Vector2.subtract(v1, v2)
        expect(v3.x).toBe(-400)
        expect(v3.y).toBe(-50)
      })

      it('should return a new Vector2 instance', () => {
        const v1 = new Vector2(100, 200)
        const v2 = new Vector2(500, 250)
        const v3 = Vector2.subtract(v1, v2)
        expect(v3).toBeInstanceOf(Vector2)
      })
    })

    describe('static scale', () => {
      it('should return scale vector by scalar', () => {
        const v1 = new Vector2(100, 200)
        const v2 = Vector2.scale(v1, 5)
        expect(v2.x).toBe(500)
        expect(v2.y).toBe(1000)
      })

      it('should return a new Vector2 instance', () => {
        const v1 = new Vector2(100, 200)
        const v2 = Vector2.scale(v1, 5)
        expect(v2).toBeInstanceOf(Vector2)
      })
    })
  })

  describe('Sad path', () => {
    describe('constructor', () => {
      it('should trow TypeError if Vector2 is not instantiated with x as Number', () => {
        expect(() => new Vector2('some' as any, 2)).toThrow(TypeError)
        expect(
          () => new Vector2('some' as any, 2)
        ).toThrowErrorMatchingSnapshot()
      })

      it('should trow TypeError if Vector2 is not instantiated with y as Number', () => {
        expect(() => new Vector2(2, 'some' as any)).toThrow(TypeError)
        expect(
          () => new Vector2(2, 'some' as any)
        ).toThrowErrorMatchingSnapshot()
      })

      it('should trow TypeError if Vector2 is instantiated with x value as NaN', () => {
        expect(() => new Vector2(NaN, 2)).toThrow(TypeError)
        expect(() => new Vector2(NaN, 2)).toThrowErrorMatchingSnapshot()
      })

      it('should trow TypeError if Vector2 is instantiated with y value as NaN', () => {
        expect(() => new Vector2(2, NaN)).toThrow(TypeError)
        expect(() => new Vector2(2, NaN)).toThrowErrorMatchingSnapshot()
      })

      it('should trow TypeError if Vector2 is instantiated with x value as Infinity', () => {
        expect(() => new Vector2(Infinity, 2)).toThrow(TypeError)
        expect(() => new Vector2(Infinity, 2)).toThrowErrorMatchingSnapshot()
      })

      it('should trow TypeError if Vector2 is instantiated with y value as Infinity', () => {
        expect(() => new Vector2(2, Infinity)).toThrow(TypeError)
        expect(() => new Vector2(2, Infinity)).toThrowErrorMatchingSnapshot()
      })
    })
  })
})
