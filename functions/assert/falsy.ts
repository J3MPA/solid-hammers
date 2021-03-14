import type { Truthy } from '../../types'

const falsy = <Value>(
  value: Value | Truthy
): value is Value extends Truthy ? never : Value => !value

export default falsy
