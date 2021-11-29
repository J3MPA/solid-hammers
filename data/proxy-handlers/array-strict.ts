export const arrayStrict: ProxyHandler<Array<any>> = {
  get: (target, property: any) => {
    const regexp = /[\d]+/
    if (regexp.exec(property)) {
      return target[property as number]
    }
    if (property === 'length') {
      return target.length
    }
    if (typeof target[property] === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {}
    }
  },
}
