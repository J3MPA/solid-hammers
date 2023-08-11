export const serializes = <T>(a: unknown, b: T): a is T =>
  JSON.stringify(a) === JSON.stringify(b)
