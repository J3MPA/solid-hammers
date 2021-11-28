import { isRealNumber } from '../assert'
import type { AnyFn } from '../../types'

export const invokeAfter = <Func extends AnyFn>(nthTime: number, fn: Func) => {
  if (!isRealNumber(nthTime)) {
    throw TypeError('nthTime must be a real number')
  }
  let inc = 0
  const nth = nthTime | 0
  return (...args: Parameters<Func>): ReturnType<Func> | undefined => {
    if (++inc >= nth) return fn(...args)
  }
}
