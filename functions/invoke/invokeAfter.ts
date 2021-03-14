import { isRealNumber } from '../../math'
import { Fn } from '../../types'

const invokeAfter = <Func extends Fn>(nthTime: number, fn: Func) => {
  if (!isRealNumber(nthTime)) {
    throw TypeError('nthTime must be a real number')
  }
  let inc = 0
  const nth = nthTime | 0
  return (...args: Parameters<Func>): ReturnType<Func> | undefined => {
    if (++inc >= nth) return fn(...args)
  }
}

export default invokeAfter
