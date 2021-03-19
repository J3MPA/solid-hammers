import getValue from './getValue'
import { WeakObj } from '../../types'

const getValueOr = <
  P extends readonly (string | number)[],
  O extends WeakObj,
  DefVal
>(
  defaultValue: DefVal,
  path: P,
  object: O
) => {
  const maybeValue = getValue<P, O>(path, object)
  if (maybeValue === undefined) return defaultValue
  return maybeValue
}

export default getValueOr
