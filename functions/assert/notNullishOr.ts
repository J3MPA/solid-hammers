import type { Nullish } from '../../types'
import { notNullish } from './notNullish'

export const notNullishOr = <Value, DefaultValue>(
  defaultValue: DefaultValue,
  value: Value | Nullish
) => (notNullish(value) ? value : defaultValue)
