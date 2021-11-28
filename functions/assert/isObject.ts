import { strictEqual } from './strictEqual'
import { notStrictEqual } from './notStrictEqual'

export const isObject = (maybeObj: any): maybeObj is Record<any, any> =>
  strictEqual(typeof maybeObj, 'object') && notStrictEqual(maybeObj, null)
