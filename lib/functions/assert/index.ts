type Nullish = undefined | null
type Falsy = Nullish | false | '' | unknown[] | Record<string, unknown> | 0
type Truthy =
  | string
  | unknown[]
  | Record<string, unknown>
  | true
  | number
  | ((...args: any[]) => any)

export const truthy = <Value>(value: Value | Truthy): value is Truthy => !!value
export const truthyOr = <Value, DefaultValue>(
  defaultValue: DefaultValue,
  value: Value | Truthy
) => (truthy(value) ? value : defaultValue)

export const falsy = <Value>(value: Value | Falsy): value is Falsy =>
  !truthy(value)
export const falsyOr = <Value, DefaultValue>(
  defaultValue: DefaultValue,
  value: Value | Falsy
) => (falsy(value) ? value : defaultValue)

export const nullish = <Value>(value: Value | Nullish): value is Nullish =>
  value === null || value === undefined

export const nullishOr = <Value, Defaultvalue>(
  defaultValue: Defaultvalue,
  value: Value | Nullish
) => (nullish(value) ? value : defaultValue)

export const notNullish = <Value>(value: Value | Nullish): value is Value =>
  !nullish(value)

export const notNullishOr = <Value, Defaultvalue>(
  defaultValue: Defaultvalue,
  value: Value | Nullish
) => (!nullish(value) ? value : defaultValue)
