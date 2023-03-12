export const arraysContainsSameItems = <T>(arrayA: T[], arrayB: T[]) => {
  if (arrayA === arrayB) {
    return true
  }
  if (arrayA.length !== arrayB.length) {
    return false
  }

  // shallow copy
  const arr2 = Array.from(arrayB)
  for (const value of arrayA) {
    const index = arr2.indexOf(value)
    if (index === -1) {
      return false
    }
    arr2.splice(index, 1)
  }
  return arr2.length === 0
}
