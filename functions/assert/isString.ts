import { strictEqual } from './strictEqual'

export const isString = (value: unknown): value is string =>
  strictEqual(typeof value, 'string') || value instanceof String
