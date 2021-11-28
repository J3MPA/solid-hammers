import type { Truthy } from '../../types'

export const falsy = <Value>(
  value: Value | Truthy
): value is Value extends Truthy ? never : Value => !value
