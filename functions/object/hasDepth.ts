import { WeakObj } from '../../types'

const hasDepth = (object: unknown): object is WeakObj =>
  typeof object === 'object' &&
  object !== null &&
  !Array.isArray(object) &&
  Object.keys(object).length > 0

export default hasDepth
