import { dedup } from '../dedup'

describe(dedup.name, () => {
  describe('Happy path', () => {
    it('should de-duplicate primitive values', () => {
      expect(dedup([1, 1, 2])).toEqual([1, 2])
      expect(dedup(['a', 'a', 'b'])).toEqual(['a', 'b'])
      expect(dedup([true, true, false])).toEqual([true, false])
    })
    it('should de-duplicate by object reference', () => {
      const ref = {}
      const res = dedup([ref, ref])
      expect(res).toHaveLength(1)
      expect(res[0]).toBe(ref)
    })
    it('should de-duplicate by array reference', () => {
      const ref = [1]
      const res = dedup([ref, ref])
      expect(res).toHaveLength(1)
      expect(res[0]).toBe(ref)
    })
    it('should de-duplicate with getter', () => {
      const ref = { some: 'value', a: 1, b: 2 }
      const res = dedup([ref, { some: 'value' }], (item) => item.some)
      expect(res).toHaveLength(1)
      expect(res[0]).toBe(ref)
    })
  })
})
