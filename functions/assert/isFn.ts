import { Fn } from '../../types'
import strictEqual from './strictEqual'

const isFn = <T>(maybeFn: T): maybeFn is T extends Fn ? T : never =>
  strictEqual(typeof maybeFn, 'function')

export default isFn
