import { ExtractObjectProperty, WeakObj } from '../../types'
import { notStrictEqual } from '../assert'

type Path<P extends readonly any[], O extends WeakObj> = P extends [
  infer P0,
  ...infer PR
]
  ? ExtractObjectProperty<O, P0> extends WeakObj
    ? Path<PR, ExtractObjectProperty<O, P0>>
    : O[P0]
  : O

const getValue = <P extends readonly (string | number)[], O extends WeakObj>(
  path: P,
  object: O
): Path<P extends [...infer U] ? [...U] : [...P], O> | undefined => {
  let value = object

  for (const key of path) {
    if (notStrictEqual(value, undefined)) {
      value = value?.[key]
      continue
    }
    break
  }

  return value as Path<P extends [...infer U] ? [...U] : [...P], O> | undefined
}

export default getValue
