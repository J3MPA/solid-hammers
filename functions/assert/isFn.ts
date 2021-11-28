import { AnyFn } from '../../types'
import strictEqual from './strictEqual'

const isFn = <T>(maybeFn: T): maybeFn is T extends AnyFn ? T : never =>
  strictEqual(typeof maybeFn, 'function')

export default isFn
