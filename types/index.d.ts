export type Nullish = undefined | null
export type Falsy = Nullish | false | '' | 0 | -0 | 0n | -0n
export type Truthy =
  | string
  | unknown[]
  | Record<any, any>
  | true
  | number
  | ((...args: any[]) => any)

export type AnyFn = (...args: any[]) => any
export type Fn<A, R> = (...args: A[]) => R
export type F0<R> = () => R
export type F1<A, R> = (arg: A) => R
export type Guard<P> = (x: unknown) => x is P
export type WeakObj = Record<any, any>
export type ExtractObjectProperty<O extends WeakObj, P> = P extends keyof O
  ? O[P]
  : never

export type Path<P extends readonly any[], O extends WeakObj> = P extends [
  infer P0,
  ...infer PR
]
  ? ExtractObjectProperty<O, P0> extends WeakObj
    ? Path<PR, ExtractObjectProperty<O, P0>>
    : O[P0]
  : O
