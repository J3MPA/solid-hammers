import { isRealNumber } from '../math'
import { Fn } from '../types'

const execAfter = <Func extends Fn>(nthTime: number, fn: Func) => {
  if (!isRealNumber(nthTime)) {
    throw TypeError('nthTime must be a real number')
  }
  let nth = nthTime | 0
  return (...args: Parameters<Func>): ReturnType<Func> | undefined => {
    if (nth-- < 1) return fn(...args)
    return undefined
  }
}

export default execAfter
