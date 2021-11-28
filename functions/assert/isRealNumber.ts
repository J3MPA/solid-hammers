import { isNumber } from './isNumber'

export const isRealNumber = (value: unknown): value is number =>
  isNumber(value) && Number.isFinite(value)
