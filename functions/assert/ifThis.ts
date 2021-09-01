import isFn from './isFn'
import type { Fn } from '../../types'

const ifThis = <T, R>(
  value: T,
  asserts: Fn<T, boolean> | boolean,
  then: Fn<T, R>
) => {
  const thisDidHappen = isFn(asserts) ? asserts(value) : asserts
  if (thisDidHappen) return then(value)
}

export default ifThis
