const getProperty = <T = any>(
  pathToProp: (string | number)[],
  object: Record<string | number, any> | undefined
): T | undefined => {
  let value = object
  for (const path of pathToProp) {
    if (value !== undefined) {
      value = value?.[path]
      continue
    }
    break
  }
  return value as T | undefined
}

export default getProperty
