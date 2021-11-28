import { truthy } from './truthy'
import { isNumber } from './isNumber'

export const isNumbers = (maybeNumbers: unknown): maybeNumbers is number[] =>
  Array.isArray(maybeNumbers) &&
  truthy(maybeNumbers.length) &&
  maybeNumbers.every(isNumber)
