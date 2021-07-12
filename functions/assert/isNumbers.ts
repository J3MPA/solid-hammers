import isTruthy from './isTruthy'
import isNumber from './isNumber'

const isNumbers = (maybeNumber: any[]): maybeNumber is number[] =>
  Array.isArray(maybeNumber) &&
  isTruthy(maybeNumber.length) &&
  maybeNumber.every(isNumber)

export default isNumbers
