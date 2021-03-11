export const isRealNumber = (n: number) => Number.isFinite(n)

export const isRealPoint = (x: number, y: number) =>
  isRealNumber(x) && isRealNumber(y)
