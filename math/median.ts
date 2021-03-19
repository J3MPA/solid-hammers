import isOdd from './isOdd'

const evenNMedian = (nNumbers: number[]) => {
  const length = nNumbers.length
  const indexA = length / 2 - 1
  const indexB = length / 2
  return (nNumbers[indexA] + nNumbers[indexB]) / 2
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
