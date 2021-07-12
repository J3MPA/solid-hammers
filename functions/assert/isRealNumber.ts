import isNumber from './isNumber'

const isRealNumber = (value: unknown): value is number =>
  isNumber(value) && Number.isFinite(value)

export default isRealNumber
