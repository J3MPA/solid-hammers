import type { Nullish } from '../../types'

const nullish = <Value>(value: Value | Nullish): value is Nullish =>
  value === null || value === undefined

export default nullish
