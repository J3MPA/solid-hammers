import Vector2 from '../Vector2'

describe('Vector2', () => {
  describe('constructor', () => {
    describe('Happy path', () => {
      it('should construct a Vector2 instance given real point', () => {
        const v = new Vector2(13, 37)
        expect(v).toBeInstanceOf(Vector2)
        expect(v.x).toBe(13)
        expect(v.y).toBe(37)
      })
      it('should construct a Vector2 instance given no points', () => {
        const v = new Vector2()
        expect(v).toBeInstanceOf(Vector2)
        expect(v.x).toBe(0)
        expect(v.y).toBe(0)
      })
      it('should construct a Vector2 instance given undefined points', () => {
        const v = new Vector2(undefined, undefined)
        expect(v).toBeInstanceOf(Vector2)
        expect(v.x).toBe(0)
        expect(v.y).toBe(0)
      })
    })
    describe('Sad path', () => {
      describe('should throw TypeError if Vector2 is instantiated with x or y as a non real number', () => {
        it('string', () => {
          expect(() => new Vector2('some' as any, 2)).toThrow(
            new TypeError('Point must be a real number')
          )
          expect(() => new Vector2(2, 'some' as any)).toThrow(
            new TypeError('Point must be a real number')
          )
          expect(() => new Vector2('' as any, 2)).toThrow(
            new TypeError('Point must be a real number')
          )
          expect(() => new Vector2(2, '' as any)).toThrow(
            new TypeError('Point must be a real number')
          )
        })
        it('Infinity', () => {
          expect(() => new Vector2(Infinity, 2)).toThrow(
            new TypeError('Point must be a real number')
          )
          expect(() => new Vector2(2, Infinity)).toThrow(
            new TypeError('Point must be a real number')
          )
          expect(() => new Vector2(-Infinity, 2)).toThrow(
            new TypeError('Point must be a real number')
          )
          expect(() => new Vector2(2, -Infinity)).toThrow(
            new TypeError('Point must be a real number')
          )
        })
        it('NaN', () => {
          expect(() => new Vector2(NaN, 2)).toThrow(
            new TypeError('Point must be a real number')
          )
          expect(() => new Vector2(2, NaN)).toThrow(
            new TypeError('Point must be a real number')
          )
          expect(() => new Vector2(-NaN, 2)).toThrow(
            new TypeError('Point must be a real number')
          )
          expect(() => new Vector2(2, -NaN)).toThrow(
            new TypeError('Point must be a real number')
          )
        })
        it('boolean', () => {
          expect(() => new Vector2(true as any, 2)).toThrow(
            new TypeError('Point must be a real number')
          )
          expect(() => new Vector2(2, true as any)).toThrow(
            new TypeError('Point must be a real number')
          )
          expect(() => new Vector2(false as any, 2)).toThrow(
            new TypeError('Point must be a real number')
          )
          expect(() => new Vector2(2, false as any)).toThrow(
            new TypeError('Point must be a real number')
          )
        })
        it('null', () => {
          expect(() => new Vector2(null as any, 2)).toThrow(
            new TypeError('Point must be a real number')
          )
          expect(() => new Vector2(2, null as any)).toThrow(
            new TypeError('Point must be a real number')
          )
        })
      })
    })
  })

  describe('static sum', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with the point being the sum of two vectors', () => {
        const v1 = new Vector2(100, 200)
        const v2 = new Vector2(500, 250)
        const v3 = Vector2.sum(v1, v2)
        expect(v3.x).toBe(600)
        expect(v3.y).toBe(450)
        expect(v3).toBeInstanceOf(Vector2)
      })
    })
  })

  describe('static subtract', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with the point being the difference of two vectors', () => {
        const v1 = new Vector2(100, 200)
        const v2 = new Vector2(500, 250)
        const v3 = Vector2.subtract(v1, v2)
        expect(v3.x).toBe(-400)
        expect(v3.y).toBe(-50)
        expect(v3).toBeInstanceOf(Vector2)
      })
    })
  })

  describe('static scale', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with the point being the product of the scalar', () => {
        const v1 = new Vector2(100, 200)
        const v2 = Vector2.scale(v1, 5)
        expect(v2.x).toBe(500)
        expect(v2.y).toBe(1000)
        expect(v2).toBeInstanceOf(Vector2)
      })
    })
    describe('Sad path', () => {
      it('should throw TypeError if scalar is not a real number', () => {
        const v1 = new Vector2(100, 200)
        expect(() => Vector2.scale(v1, NaN)).toThrow(TypeError)
        expect(() => Vector2.scale(v1, Infinity)).toThrow(TypeError)
        expect(() => Vector2.scale(v1, 'something' as any)).toThrow(TypeError)
        expect(() => Vector2.scale(v1, true as any)).toThrow(TypeError)
        expect(() => Vector2.scale(v1, false as any)).toThrow(TypeError)
        expect(() => Vector2.scale(v1, null as any)).toThrow(TypeError)
        expect(() => Vector2.scale(v1, undefined as any)).toThrow(TypeError)
      })
    })
  })

  describe('static normalize', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with the point being normalized (x === y)', () => {
        const v1 = new Vector2(123, 23423)
        const v2 = Vector2.normalize(v1)
        expect(v2).toBeInstanceOf(Vector2)
        expect(v2.x).toBe(v2.y)
      })
    })
  })

  describe('static zero', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with the point 0,0', () => {
        const v1 = Vector2.zero()
        expect(v1).toBeInstanceOf(Vector2)
        expect(v1.x).toBe(0)
        expect(v1.y).toBe(0)
      })
    })
  })

  describe('static down', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with point 0,-1', () => {
        const v1 = Vector2.down()
        expect(v1).toBeInstanceOf(Vector2)
        expect(v1.x).toBe(0)
        expect(v1.y).toBe(-1)
      })
    })
  })

  describe('static up', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with point 0,1', () => {
        const v1 = Vector2.up()
        expect(v1).toBeInstanceOf(Vector2)
        expect(v1.x).toBe(0)
        expect(v1.y).toBe(1)
      })
    })
  })

  describe('static right', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with point 1,0', () => {
        const v1 = Vector2.right()
        expect(v1).toBeInstanceOf(Vector2)
        expect(v1.x).toBe(1)
        expect(v1.y).toBe(0)
      })
    })
  })

  describe('static left', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with point -1,0', () => {
        const v1 = Vector2.left()
        expect(v1).toBeInstanceOf(Vector2)
        expect(v1.x).toBe(-1)
        expect(v1.y).toBe(0)
      })
    })
  })

  describe('static fromMagnitude', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with a normalized point from given magnitude (x === y)', () => {
        const magnitude = 50
        const v1 = Vector2.fromMagnitude(50)
        expect(v1).toBeInstanceOf(Vector2)
        expect(v1.x).toBe(v1.y)
        expect(v1.x).toBe(Math.sqrt(magnitude ** 2 / 2))
        expect(v1.y).toBe(Math.sqrt(magnitude ** 2 / 2))
      })
    })

    describe('Sad path', () => {
      it('should throw TypeError if magnitude is not a real number', () => {
        expect(() => Vector2.fromMagnitude(NaN)).toThrow(TypeError)
        expect(() => Vector2.fromMagnitude(Infinity)).toThrow(TypeError)
        expect(() => Vector2.fromMagnitude('something' as any)).toThrow(
          TypeError
        )
        expect(() => Vector2.fromMagnitude(false as any)).toThrow(TypeError)
        expect(() => Vector2.fromMagnitude(true as any)).toThrow(TypeError)
        expect(() => Vector2.fromMagnitude(undefined as any)).toThrow(TypeError)
        expect(() => Vector2.fromMagnitude(null as any)).toThrow(TypeError)
      })
    })
  })

  describe('static isVector2', () => {
    describe('Happy path', () => {
      it('should return true if the the given object is an instance of Vector2', () => {
        expect(Vector2.isVector2(new Vector2(1, 2))).toBe(true)
      })

      it('should return false if the the given object or value is not an instance of Vector2', () => {
        expect(Vector2.isVector2({})).toBe(false)
        expect(Vector2.isVector2({ x: 1, y: 2 })).toBe(false)
      })
    })
  })

  describe('static distanceBetween', () => {
    describe('Happy path', () => {
      it('should return the distance between two vectors', () => {
        const v1 = new Vector2(10, 20)
        const v2 = new Vector2(30, 40)
        const d1 = Vector2.distanceBetween(v1, v2)
        const d2 = Vector2.distanceBetween(v2, v1)

        expect(d1).toBe(d2)
        expect(d1).toBe(28.284271247461902)
        expect(d2).toBe(28.284271247461902)

        const v21 = new Vector2(-10, 20)
        const v22 = new Vector2(30, -40)
        const d21 = Vector2.distanceBetween(v21, v22)
        const d22 = Vector2.distanceBetween(v22, v21)

        expect(d21).toBe(d22)
        expect(d21).toBe(72.11102550927978)
        expect(d22).toBe(72.11102550927978)
      })
    })
  })

  describe('prototype.add', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with the sum of the given vector', () => {
        const v1 = new Vector2(10, 20)
        const v2 = new Vector2(30, 40)
        const v3 = v1.add(v2)

        expect(v3).toBeInstanceOf(Vector2)
        expect(v3.x).toBe(40)
        expect(v3.y).toBe(60)
      })
    })
  })

  describe('prototype.subtract', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with the diff of the given vector', () => {
        const v1 = new Vector2(10, 20)
        const v2 = new Vector2(30, 40)
        const v3 = v1.subtract(v2)

        expect(v3).toBeInstanceOf(Vector2)
        expect(v3.x).toBe(-20)
        expect(v3.y).toBe(-20)
      })
    })
  })

  describe('prototype.normalize', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with the point being normalized (x === y)', () => {
        const v1 = new Vector2(123, 23423)
        const v2 = v1.normalize()
        expect(v2).toBeInstanceOf(Vector2)
        expect(v2.x).toBe(v2.y)
      })
    })
  })

  describe('prototype.distanceTo', () => {
    describe('Happy path', () => {
      it('should return the distance between two vectors', () => {
        const v1 = new Vector2(10, 20)
        const v2 = new Vector2(30, 40)
        const d1 = v1.distanceTo(v2)
        const d2 = v2.distanceTo(v1)

        expect(d1).toBe(d2)
        expect(d1).toBe(28.284271247461902)
        expect(d2).toBe(28.284271247461902)

        const v21 = new Vector2(-10, 20)
        const v22 = new Vector2(30, -40)
        const d21 = v21.distanceTo(v22)
        const d22 = v22.distanceTo(v21)

        expect(d21).toBe(d22)
        expect(d21).toBe(72.11102550927978)
        expect(d22).toBe(72.11102550927978)
      })
    })
  })

  describe('prototype.switchDirection', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with the x and y value having switched direction', () => {
        const v1 = new Vector2(10, -20)
        const v2 = v1.switchDirection()

        expect(v2).toBeInstanceOf(Vector2)
        expect(v2.x).toBe(-10)
        expect(v2.y).toBe(20)
      })
    })
  })

  describe('prototype.switchY', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with the y value having switched direction', () => {
        const v1 = new Vector2(10, -20)
        const v2 = v1.switchY()

        expect(v2).toBeInstanceOf(Vector2)
        expect(v2.x).toBe(10)
        expect(v2.y).toBe(20)
      })
    })
  })

  describe('prototype.switchX', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with the x value having switched direction', () => {
        const v1 = new Vector2(10, -20)
        const v2 = v1.switchX()

        expect(v2).toBeInstanceOf(Vector2)
        expect(v2.x).toBe(-10)
        expect(v2.y).toBe(-20)
      })
    })
  })

  describe('prototype.scale', () => {
    describe('Happy path', () => {
      it('should return a new Vector2 instance with the point being the product of the scalar', () => {
        const v1 = new Vector2(100, 200)
        const v2 = v1.scale(5)
        expect(v2.x).toBe(500)
        expect(v2.y).toBe(1000)
        expect(v2).toBeInstanceOf(Vector2)
      })
    })
    describe('Sad path', () => {
      it('should throw TypeError if scalar is not a real number', () => {
        const v1 = new Vector2(100, 200)
        expect(() => v1.scale(NaN)).toThrow(TypeError)
        expect(() => v1.scale(Infinity)).toThrow(TypeError)
        expect(() => v1.scale('some' as any)).toThrow(TypeError)
        expect(() => v1.scale(true as any)).toThrow(TypeError)
        expect(() => v1.scale(false as any)).toThrow(TypeError)
        expect(() => v1.scale(null as any)).toThrow(TypeError)
        expect(() => v1.scale(undefined as any)).toThrow(TypeError)
      })
    })
  })
})
