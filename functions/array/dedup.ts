export const dedup = <T, R>(array: T[], on?: (item: T) => R): T[] =>
  on
    ? array.filter((item, index) => {
        const value = on(item)
        return index === array.findIndex((item) => value === on(item))
      })
    : Array.from(new Set(array))
