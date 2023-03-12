interface Range {
  [Symbol.iterator]: { (): IterableIterator<number> }
  toArray: () => number[]
}

interface RangeOptions {
  /**
   * @description whether or not to include the to value in the range, e.g. `range(5, { include: true }) // [0,1,2,3,4,5]`
   */
  include?: boolean
}

interface RangeFn {
  (to: number, options?: RangeOptions): Range
  (params: { from?: number; to: number }, options?: RangeOptions): Range
}

export const range: RangeFn = (params, options) => {
  const to =
    (typeof params === 'number' ? params : params.to) +
    (options?.include ? 1 : 0)
  const from = typeof params === 'number' ? 0 : params.from ?? 0
  function* iter(): IterableIterator<number> {
    for (let i = from; i < to; i++) {
      yield i
    }
  }
  return {
    [Symbol.iterator]: iter,
    toArray: () => Array.from(iter()),
  }
}
