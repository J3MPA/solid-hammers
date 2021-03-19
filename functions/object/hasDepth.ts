const hasDepth = (object: unknown): object is Record<any, any> =>
  typeof object === 'object' &&
  object !== null &&
  Object.keys(object).length > 0 &&
  !Array.isArray(object)

export default hasDepth
