import type { Falsy } from '../../types'

export const truthy = <Value>(
  value: Value | Falsy
): value is Value extends Falsy ? never : Value => !!value
