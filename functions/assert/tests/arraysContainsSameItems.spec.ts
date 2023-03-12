import { arraysContainsSameItems } from '../arraysContainsSameItems'

describe(arraysContainsSameItems.name, () => {
  describe('Happy path', () => {
    describe('should return true', () => {
      it('when same array is passed as both arguments', () => {
        const arr: any[] = []
        expect(arraysContainsSameItems(arr, arr)).toBe(true)
      })
      it('when same arrays contains same items sorted', () => {
        const ref = {}
        const ref2 = {}
        const arr: any[] = [ref, ref2]
        const arr2: any[] = [ref, ref2]
        expect(arraysContainsSameItems(arr, arr2)).toBe(true)
      })
      it('when same arrays contains same items unsorted', () => {
        const ref = {}
        const ref2 = {}
        const arr: any[] = [ref, ref2]
        const arr2: any[] = [ref2, ref]
        expect(arraysContainsSameItems(arr, arr2)).toBe(true)
      })
    })
    describe('should return false', () => {
      it('when arrays do not have the same length', () => {
        const ref = {}
        const arr: any[] = [ref]
        const arr2: any[] = [ref, ref]
        expect(arraysContainsSameItems(arr, arr2)).toBe(false)
      })
      it('when arrays do not contain same items', () => {
        const ref = {}
        const ref2 = {}
        const arr: any[] = [ref, ref]
        const arr2: any[] = [ref2, ref2]
        expect(arraysContainsSameItems(arr, arr2)).toBe(false)
      })
      it('when arrays contains the same items but do not share the same amount of the same items', () => {
        const ref = {}
        const ref2 = {}
        const arr: any[] = [ref, ref, ref2]
        const arr2: any[] = [ref2, ref2, ref]
        expect(arraysContainsSameItems(arr, arr2)).toBe(false)
      })
    })
  })
})
