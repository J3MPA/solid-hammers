import isStrictEqual from './isStrictEqual'
import isNotStrictEqual from './isNotStrictEqual'

const isObject = (maybeObj: any): maybeObj is Record<any, any> =>
  isStrictEqual(typeof maybeObj, 'object') && isNotStrictEqual(maybeObj, null)

export default isObject
