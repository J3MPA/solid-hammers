import { strictEqual } from './strictEqual'

export const isNumber = (value: unknown): value is number =>
  strictEqual(typeof value, 'number') || value instanceof Number
