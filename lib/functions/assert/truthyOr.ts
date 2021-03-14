import type { Truthy } from '../../../types'
import truthy from './truthy'

const truthyOr = <Value, DefaultValue>(
  defaultValue: DefaultValue,
  value: Value | Truthy
) => (truthy(value) ? value : defaultValue)

export default truthyOr
