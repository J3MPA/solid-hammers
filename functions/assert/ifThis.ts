import { isFn } from './isFn'
import type { Fn } from '../../types'

export const ifThis = <T, R, A extends T>(
  value: T,
  asserts: Fn<T, boolean> | A,
  then: Fn<T, R>
) => {
  const thisDidHappen = isFn(asserts) ? asserts(value) : asserts === value
  if (thisDidHappen) return then(value)
}
