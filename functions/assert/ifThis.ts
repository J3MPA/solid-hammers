import { F1 } from '../../types'
import isFn from './isFn'

const ifThis = <T, R>(
  ifThis: F1<T, boolean> | boolean,
  then: F1<T, R>,
  value: T
) => {
  const thisDidHappen = isFn(ifThis) ? ifThis(value) : ifThis
  if (thisDidHappen) return then(value)
}

export default ifThis
