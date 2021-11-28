import { isFalse } from '../functions'
import { isEven } from './isEven'

export const isOdd = (number: number) => isFalse(isEven(number))
