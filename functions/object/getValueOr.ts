import { getValue } from './getValue'
import { WeakObj } from '../../types'

export const getValueOr = <
  DefVal,
  P extends readonly (string | number)[],
  O extends WeakObj
>(
  defaultValue: DefVal,
  path: P,
  object: O
) => {
  const maybeValue = getValue<P, O>(path, object)
  if (maybeValue === undefined) return defaultValue
  return maybeValue
}
