import isOdd from './isOdd'

const evenNMedian = (nNumbers: number[]) => {
  const length = nNumbers.length
  if (length === 1) {
    return nNumbers[0]!
  }
  const indexA = length / 2 - 1
  const indexB = length / 2
  const a = nNumbers[indexA]
  const b = nNumbers[indexB]
  if (a && b) {
    return (a + b) / 2
  } else {
    throw new Error('')
  }
}

const oddNMedian = (nNumbers: number[]) => {
  const length = nNumbers.length
  const index = (length - 1) / 2
  return nNumbers[index]
}

const median = (unsortedNumbers: number[]) => {
  const sorted = unsortedNumbers.sort((nA, nB) => nB - nA)
  const odd = isOdd(sorted.length)
  if (odd) return oddNMedian(sorted)
  return evenNMedian(sorted)
}

export default median
