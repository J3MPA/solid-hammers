import type { AnyFn, Milliseconds } from '../../types'

export const throttle = <T extends AnyFn>(fn: T, duration: Milliseconds) => {
  let block = false
  let res: ReturnType<T>
  return (...args: Parameters<T>): ReturnType<T> => {
    if (!block) {
      block = true
      setTimeout(() => {
        block = false
        res = undefined as any
      }, duration)
      res = fn(...args)
      return res
    } else {
      return res
    }
  }
}
