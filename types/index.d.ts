export type Nullish = undefined | null
export type Falsy = Nullish | false | '' | 0 | -0 | 0n | -0n
export type Truthy =
  | string
  | unknown[]
  | Record<any, any>
  | true
  | number
  | ((...args: any[]) => any)

export type Fn = (...args: any[]) => any
export type F0<T> = () => T
export type F1<P, T> = (param: P) => T
export type Guard<P> = (param: P) => param is P
