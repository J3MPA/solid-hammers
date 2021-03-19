const average = (nthNumbers: number[]) =>
  nthNumbers.reduce((acc, number, i, arr) => {
    const nth = arr.length
    const isLast = i === nth - 1
    if (isLast) return (acc + number) / nth
    return acc + number
  }, 0)

export default average
