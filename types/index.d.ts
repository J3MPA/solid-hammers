export type Nullish = undefined | null
export type Falsy = Nullish | false | '' | 0 | -0 | 0n | -0n
export type Truthy =
  | string
  | unknown[]
  | Record<any, any>
  | true
  | number
  | ((...args: any[]) => any)