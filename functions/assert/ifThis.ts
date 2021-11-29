import { isFn } from './isFn'
import type { Fn } from '../../types'

export const ifThis = <T, R, A extends T>(
  value: T,
  asserts: Fn<boolean, [T]> | A,
  then: Fn<R, [T]>
) => {
  const thisDidHappen = isFn(asserts) ? asserts(value) : asserts === value
  if (thisDidHappen) return then(value)
}
