import getValue from './getValue'

const getValueOr = <DefVal, T = any>(
  defaultValue: DefVal,
  path: (string | number)[],
  object: Record<string | number, any> | undefined
) => {
  const maybeValue = getValue<T>(path, object)
  if (maybeValue === undefined) return defaultValue
  return maybeValue
}

export default getValueOr
