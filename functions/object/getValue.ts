const getValue = <T = any>(
  path: (string | number)[],
  object: Record<string | number, any> | undefined
): T | undefined => {
  let value = object
  for (const key of path) {
    if (value !== undefined) {
      value = value?.[key]
      continue
    }
    break
  }
  return value as T | undefined
}

export default getValue
