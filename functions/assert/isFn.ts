import { AnyFn } from '../../types'
import { strictEqual } from './strictEqual'

export const isFn = <T>(maybeFn: T): maybeFn is T extends AnyFn ? T : never =>
  strictEqual(typeof maybeFn, 'function') || maybeFn instanceof Function
