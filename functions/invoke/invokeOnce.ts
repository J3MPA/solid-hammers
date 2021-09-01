import { AnyFn } from '../../types'
import invokeOn from './invokeOn'

const invokeOnce = <Func extends AnyFn>(fn: Func) => invokeOn(1, fn)

export default invokeOnce
