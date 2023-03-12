import { range } from '../range'

describe(range.name, () => {
  describe('Happy path', () => {
    it('should return range given a number', () => {
      let pass = 0
      const r = 10
      for (const v of range(r)) {
        expect(pass++).toBe(v)
      }
      expect(pass).toBe(r)
    })
    it('should return range given a number including to value', () => {
      let pass = 0
      const r = 10
      for (const v of range(r, { include: true })) {
        expect(pass++).toBe(v)
      }
      expect(pass).toBe(r + 1)
    })
    it('should return array of range', () => {
      const equals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      expect(range(10).toArray()).toEqual(equals)
    })
    it('should return array of range with from and to value', () => {
      const equals = [8, 9]
      expect(range({ from: 8, to: 10 }).toArray()).toEqual(equals)
    })
    it('should return array of range with from and to value including to value ', () => {
      const equals = [8, 9, 10]
      expect(range({ from: 8, to: 10 }, { include: true }).toArray()).toEqual(
        equals
      )
    })
    it('should return array of range including to value', () => {
      const equals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      expect(range(10, { include: true }).toArray()).toEqual(equals)
    })
  })
})
