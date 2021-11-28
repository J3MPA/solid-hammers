import { isRealNumber } from '../functions/assert/isRealNumber'
import { ifThis } from '../functions/assert/ifThis'
import { isFalse } from '../functions/assert/isFalse'

const throwTypeError = (val: any) => {
  throw new TypeError(`"${val}" is not a real number`)
}

const isNotARealNumber = (num: any) => isFalse(isRealNumber(num))

export const average = (nNumbers: number[]) =>
  nNumbers.reduce((acc, number, i, arr) => {
    ifThis(number, isNotARealNumber, throwTypeError)

    const nth = arr.length
    const isLast = i === nth - 1
    if (isLast) return (acc + number) / nth
    return acc + number
  }, 0)
