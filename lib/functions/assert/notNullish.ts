import type { Nullish } from '../../../types'
import nullish from './nullish'

const notNullish = <Value>(
  value: Value | Nullish
): value is Value extends Nullish ? never : Value => !nullish(value)

export default notNullish
