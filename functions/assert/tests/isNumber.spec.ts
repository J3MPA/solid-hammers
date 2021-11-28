import { isNumber } from '..'

describe('isNumber', () => {
  describe('Happy path', () => {
    describe('should return true if', () => {
      describe('int', () => {
        it('positive', () => {
          expect(isNumber(0)).toBe(true)
          expect(isNumber(1)).toBe(true)
          expect(isNumber(9999999)).toBe(true)
        })
        it('negative', () => {
          expect(isNumber(-0)).toBe(true)
          expect(isNumber(-1)).toBe(true)
          expect(isNumber(-9999999)).toBe(true)
        })
      })
      describe('float', () => {
        it('positive', () => {
          expect(isNumber(0.1)).toBe(true)
          expect(isNumber(1.1)).toBe(true)
          expect(isNumber(9999999.999)).toBe(true)
        })
        it('negative', () => {
          expect(isNumber(-0.1)).toBe(true)
          expect(isNumber(-1.1)).toBe(true)
          expect(isNumber(-9999999.999)).toBe(true)
        })
      })
      describe('Infinity', () => {
        it('positive', () => {
          expect(isNumber(Infinity)).toBe(true)
        })
        it('negative', () => {
          expect(isNumber(-Infinity)).toBe(true)
        })
      })
      describe('NaN', () => {
        it('positive', () => {
          expect(isNumber(NaN)).toBe(true)
        })
        it('negative', () => {
          expect(isNumber(-NaN)).toBe(true)
        })
      })
    })
    describe('should return false if', () => {
      describe('BigInt', () => {
        it('positive', () => {
          expect(isNumber(BigInt(1))).toBe(false)
          expect(isNumber(BigInt(123123))).toBe(false)
        })
        it('negative', () => {
          expect(isNumber(BigInt(-1))).toBe(false)
          expect(isNumber(BigInt(-123123))).toBe(false)
        })
      })
    })
  })
})
