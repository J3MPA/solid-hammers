const notStrictEqual = <T>(valueA: T, valueB: unknown): valueA is T =>
  valueA !== valueB

export default notStrictEqual
