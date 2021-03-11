export const isRealNumber = (n: number) =>
  Number.isInteger(n) || Number.isFinite(n)

export const isRealPoint = (x: number, y: number) =>
  isRealNumber(x) && isRealNumber(y)
