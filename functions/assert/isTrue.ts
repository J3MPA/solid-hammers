import { strictEqual } from './strictEqual'

export const isTrue = (value: unknown): value is true =>
  strictEqual(value, true)
