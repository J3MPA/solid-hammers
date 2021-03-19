import ifThis from '../functions/assert/ifThis'
import isFalse from '../functions/assert/isFalse'
import { isRealNumber } from './utils'

const throwTypeError = (val: any) => {
  throw new TypeError(`"${val}" is not a real number`)
}

const isNotARealNumber = (num: any) => isFalse(isRealNumber(num))

const average = (nthNumbers: number[]) =>
  nthNumbers.reduce((acc, number, i, arr) => {
    ifThis(isNotARealNumber, throwTypeError, number)

    const nth = arr.length
    const isLast = i === nth - 1
    if (isLast) return (acc + number) / nth
    return acc + number
  }, 0)

export default average
