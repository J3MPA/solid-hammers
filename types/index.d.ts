export type Nullable<T> = T | null
export type Nullish = Nullable<undefined>
export type AnyArguments = readonly unknown[]
export type Fn<R, A extends AnyArguments = []> = (...args: A) => R
export type Fn0<R> = Fn<R, []>
export type Fn1<R, A> = Fn<R, [A]>
export type AnyFn = Fn<any, any[]>
export type Falsy = Nullish | false | '' | 0 | -0 | 0n | -0n
export type Truthy =
  | string
  | unknown[]
  | Record<any, any>
  | true
  | number
  | AnyFn
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
