import type { Falsy } from '../../types'
import { falsy } from './falsy'

export const falsyOr = <Value, DefaultValue>(
  defaultValue: DefaultValue,
  value: Value | Falsy
) => (falsy(value) ? value : defaultValue)
