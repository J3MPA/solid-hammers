import { isRealNumber } from './isRealNumber'

export const isRealPoint = (x: number, y: number) =>
  isRealNumber(x) && isRealNumber(y)
