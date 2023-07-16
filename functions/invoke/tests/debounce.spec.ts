import { debounce } from '../debounce'

describe(debounce.name, () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })
  afterAll(() => {
    jest.useRealTimers()
  })
  describe('Happy path', () => {
    it('should not invoke function if executed before delay', () => {
      const fn = jest.fn()
      const debounced = debounce(fn, 1000)
      debounced()
      jest.advanceTimersByTime(500)
      debounced()
      expect(fn).toHaveBeenCalledTimes(0)
    })
    it('should invoke function if executed after delay', () => {
      const fn = jest.fn()
      const debounced = debounce(fn, 1000)
      debounced()
      jest.advanceTimersByTime(1000)
      debounced()
      expect(fn).toHaveBeenCalledTimes(1)
    })
    it('should return functions return value', async () => {
      const ref = {}
      const fn = jest.fn()
      fn.mockReturnValue(ref)
      const debounced = debounce(fn, 1000)
      const promise = debounced()
      jest.advanceTimersByTime(1000)
      expect(fn).toHaveBeenCalledTimes(1)
      expect(await promise).toBe(ref)
    })
    it('should flatten promises', async () => {
      const ref = {}
      const fn = jest.fn()
      fn.mockResolvedValue(ref)
      const debounced = debounce(fn, 1000)
      const promise = debounced()
      jest.advanceTimersByTime(1000)
      expect(fn).toHaveBeenCalledTimes(1)
      expect(await promise).toBe(ref)
    })
    it('should resolve all promises', async () => {
      const fn = jest.fn(() => ({}))
      const debounced = debounce(fn, 1000)
      const promise = debounced()
      const promise2 = debounced()
      jest.advanceTimersByTime(1000)
      const r2 = await promise2
      const r1 = await promise
      expect(fn).toHaveBeenCalledTimes(1)
      expect(r1).toBe(r2)
    })
    it('should gc', async () => {
      const fn = jest.fn(() => ({}))
      const debounced = debounce(fn, 1000)
      const promise = debounced()
      const promise2 = debounced()
      jest.advanceTimersByTime(1000)
      const r2 = await promise2
      const r1 = await promise
      expect(fn).toHaveBeenCalledTimes(1)
      expect(r1).toBe(r2)
      const promise3 = debounced()
      jest.advanceTimersByTime(1000)
      const r3 = await promise3
      expect(fn).toHaveBeenCalledTimes(2)
      expect(r3).not.toBe(r1)
      expect(r3).not.toBe(r2)
    })
  })
})
