const hasDepth = (object: unknown): object is Record<any, any> =>
  typeof object === 'object' &&
  object !== null &&
  !Array.isArray(object) &&
  Object.keys(object).length > 0

export default hasDepth
