import { isRealNumber } from '../isRealNumber'

describe('isRealNumber', () => {
  describe('Happy path', () => {
    describe('should return true if', () => {
      describe('int', () => {
        it('positive', () => {
          expect(isRealNumber(0)).toBe(true)
          expect(isRealNumber(1)).toBe(true)
          expect(isRealNumber(9999999)).toBe(true)
        })
        it('negative', () => {
          expect(isRealNumber(-0)).toBe(true)
          expect(isRealNumber(-1)).toBe(true)
          expect(isRealNumber(-9999999)).toBe(true)
        })
      })
      describe('float', () => {
        it('positive', () => {
          expect(isRealNumber(0.1)).toBe(true)
          expect(isRealNumber(1.1)).toBe(true)
          expect(isRealNumber(9999999.999)).toBe(true)
        })
        it('negative', () => {
          expect(isRealNumber(-0.1)).toBe(true)
          expect(isRealNumber(-1.1)).toBe(true)
          expect(isRealNumber(-9999999.999)).toBe(true)
        })
      })
    })
    describe('should return false if', () => {
      describe('Infinity', () => {
        it('positive', () => {
          expect(isRealNumber(Infinity)).toBe(false)
        })
        it('negative', () => {
          expect(isRealNumber(-Infinity)).toBe(false)
        })
      })
      describe('BigInt', () => {
        it('positive', () => {
          expect(isRealNumber(BigInt(1))).toBe(false)
          expect(isRealNumber(BigInt(123123))).toBe(false)
        })
        it('negative', () => {
          expect(isRealNumber(BigInt(-1))).toBe(false)
          expect(isRealNumber(BigInt(-123123))).toBe(false)
        })
      })
      describe('NaN', () => {
        it('positive', () => {
          expect(isRealNumber(NaN)).toBe(false)
        })
        it('negative', () => {
          expect(isRealNumber(-NaN)).toBe(false)
        })
      })
    })
  })
})
