export const strictEqual = <T>(valueA: unknown, valueB: T): valueA is T =>
  valueA === valueB
