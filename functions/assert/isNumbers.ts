import isTruthy from './isTruthy'
import isNumber from './isNumber'

const isNumbers = (maybeNumbers: unknown): maybeNumbers is number[] =>
  Array.isArray(maybeNumbers) &&
  isTruthy(maybeNumbers.length) &&
  maybeNumbers.every(isNumber)

export default isNumbers
