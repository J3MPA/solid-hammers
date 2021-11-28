import type { Nullish } from '../../types'

export const nullish = <Value>(value: Value | Nullish): value is Nullish =>
  value === null || value === undefined
