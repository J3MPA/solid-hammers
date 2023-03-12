interface Enumerate<T> {
  [Symbol.iterator]: { (): IterableIterator<[number, T]> }
  toArray: () => [number, T][]
}

export const enumerate = <T>(array: T[] | readonly T[]): Enumerate<T> => {
  function* iter(): IterableIterator<[number, T]> {
    for (let i = 0; i < array.length; i++) {
      yield [i, array[i]!]
    }
  }
  return {
    [Symbol.iterator]: iter,
    toArray: () => Array.from(iter()),
  }
}
