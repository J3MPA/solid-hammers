import isStrictEqual from './isStrictEqual'

const isString = (value: unknown): value is string =>
  isStrictEqual(typeof value, 'string') || value instanceof String
export default isString
