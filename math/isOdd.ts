import { isFalse } from '../functions'
import isEven from './isEven'

const isOdd = (number: number) => isFalse(isEven(number))
export default isOdd
