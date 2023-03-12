import { enumerate } from '../enumerate'

describe(enumerate.name, () => {
  describe('Happy path', () => {
    it('should return the enumeration of an array', () => {
      let pass = 0
      const arr = ['a', 'b', 'c'] as const
      const iter = enumerate(arr)
      for (const [i, value] of iter) {
        switch (value) {
          case 'a': {
            expect(i).toBe(0)
            pass++
            continue
          }
          case 'b': {
            expect(i).toBe(1)
            pass++
            continue
          }
          case 'c': {
            expect(i).toBe(2)
            pass++
            continue
          }
        }
      }
      expect(pass).toBe(arr.length)
    })
    it('should return array from enumeration', () => {
      const arr = ['a', 'b', 'c'] as const
      const equals = [
        [0, 'a'],
        [1, 'b'],
        [2, 'c'],
      ]
      expect(enumerate(arr).toArray()).toEqual(equals)
    })
  })
})
