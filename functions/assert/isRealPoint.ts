import isRealNumber from './isRealNumber'

const isRealPoint = (x: number, y: number) => isRealNumber(x) && isRealNumber(y)

export default isRealPoint
