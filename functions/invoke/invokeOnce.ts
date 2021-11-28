import { AnyFn } from '../../types'
import { invokeOn } from './invokeOn'

export const invokeOnce = <Func extends AnyFn>(fn: Func) => invokeOn(1, fn)
