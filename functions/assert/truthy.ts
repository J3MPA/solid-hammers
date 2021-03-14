import type { Falsy } from '../../types'

const truthy = <Value>(
  value: Value | Falsy
): value is Value extends Falsy ? never : Value => !!value

export default truthy
