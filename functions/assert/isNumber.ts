import isStrictEqual from './isStrictEqual'

const isNumber = (value: unknown): value is number =>
  isStrictEqual(typeof value, 'number') || value instanceof Number

export default isNumber
