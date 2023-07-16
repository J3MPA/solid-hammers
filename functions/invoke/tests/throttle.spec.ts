import { throttle } from '../throttle'

beforeAll(() => {
  jest.useFakeTimers()
})

afterAll(() => {
  jest.useRealTimers()
})

describe(throttle.name, () => {
  describe('Happy path', () => {
    it('should not invoke function multiple times during throttle time', () => {
      const fn = jest.fn()
      const throttled = throttle(fn, 1000)
      throttled()
      expect(fn).toHaveBeenCalledTimes(1)
      throttled()
      expect(fn).toHaveBeenCalledTimes(1)
      jest.advanceTimersByTime(1000)
      throttled()
      expect(fn).toHaveBeenCalledTimes(2)
    })
    it('should return same response when throttle enabled', () => {
      const ref = {}
      const fn = jest.fn(() => ref)
      const throttled = throttle(fn, 1000)
      const r1 = throttled()
      const r2 = throttled()
      expect(fn).toHaveBeenCalledTimes(1)
      expect(r1).toBe(r2)
    })
    it('should gc cache', () => {
      const fn = jest.fn(() => ({}))
      const throttled = throttle(fn, 1000)
      const r1 = throttled()
      const r2 = throttled()
      expect(fn).toHaveBeenCalledTimes(1)
      expect(r1).toBe(r2)
      jest.advanceTimersByTime(1000)
      const r3 = throttled()
      expect(fn).toHaveBeenCalledTimes(2)
      expect(r3).not.toBe(r1)
    })
  })
})
