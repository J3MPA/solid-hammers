import type { Nullish } from '../../types'
import { nullish } from './nullish'

export const nullishOr = <Value, DefaultValue>(
  defaultValue: DefaultValue,
  value: Value | Nullish
) => (nullish(value) ? value : defaultValue)
