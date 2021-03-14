import { Fn } from '../types'
import invokeOn from './invokeOn'

const invokeOnce = <Func extends Fn>(fn: Func) => invokeOn(1, fn)

export default invokeOnce
