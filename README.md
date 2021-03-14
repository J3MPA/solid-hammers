# solid-hammers 1.0.4

A set of JavaScript (ES6) functions and classes for all occasions. Ships with TypeScript support.

`This package i still under development and will ship with more functions and classes with time`

## Installation

Using npm:

```bash
$ npm i solid-hammers
```

Using yarn:

```bash
$ yarn add solid-hammers
```

## Usage Node.JS

```javascript
// Load the full build.
const hammers = require('solid-hammers');

// Load specific method categories.
const math = require('solid-hammers/math');
const fns = require('solid-hammers/functions');

// Pick methods for smaller bundles.
const Vector2 = require('solid-hammers/math/Vector2');
const isTruthy = require('solid-hammers/functions/assert/isTruthy');
```

## Classes

### Vector2

A 2D vector class

## Functions

### Assert methods

### `falsy`

Evaluates if given value is a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value.

For TypeScript this function can be used as a type guard that strips any truthy types from the evaluated value

#### Syntax

```typescript
falsy(value)
```

#### Parameters

##### `value` the value to be checked

#### Return value

##### `true` if the value is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy); otherwise, `false`

#### Examples

```typescript
falsy(false) // true
falsy('') // true
falsy(0) // true
falsy(null) // true
falsy(undefined) // true

falsy(123) // false
falsy(true) // false
falsy('someString') // false
falsy([]) // false
falsy({}) // false
falsy(() => {}) // false

// As a type guard
interface SomeInterface {
    some: string
    other: number
}

type SomeType = number | string | boolean | null

const val1: SomeType | SomeInterface

if(falsy(val1)) {
    val1 // val1: false | null
}

const val2: SomeInterface

if(falsy(val2)) {
    val2 // val2: never
}

```

### `isFalsy`

Same functionality as [solid-hammers falsy](#falsy) function, only difference is that the name adapts TypeScript naming convention for type guards.

For documentation see [solid-hammers falsy](#falsy).

### `falsyOr`

Evaluates if given value is a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value or returns default value.

#### Syntax

```typescript
falsyOr(defaultValue, value)
```

#### Parameters

##### `defaultValue` the value to be returned if evaluation is false

##### `value` the value to be checked

#### Return value

##### `defaultValue` if evaluation is false; otherwise, `value`

#### Examples

```typescript
falsyOr('defaultValue', false) // false
falsyOr('defaultValue', '') // ''
falsyOr('defaultValue', 0) // 0
falsyOr('defaultValue', null) // null
falsyOr('defaultValue', undefined) // undefined


falsyOr('defaultValue', 123) // 'defaultValue'
falsyOr('defaultValue', true) // 'defaultValue'
falsyOr('defaultValue', 'someString') // 'defaultValue'
falsyOr('defaultValue', []) // 'defaultValue'
falsyOr('defaultValue', {}) // 'defaultValue'
falsyOr('defaultValue', () => {}) // 'defaultValue'
```

### `truthy`

Evaluates if given value is a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value.

For TypeScript this function can be used as a type guard that strips any falsy types from the evaluated value.

#### Syntax

```typescript
truthy(value)
```

#### Parameters

##### `value` the value to be checked

#### Return value

##### `true` if the value is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy); otherwise, `false`

#### Examples

```typescript
truthy(123) // true
truthy(true) // true
truthy('someString') // true
truthy([]) // true
truthy({}) // true
truthy(() => {}) // true

truthy(false) // false
truthy('') // false
truthy(0) // false
truthy(null) // false
truthy(undefined) // false

// As a type guard
interface SomeInterface {
    some: string
    other: number
}

type SomeType = number | boolean | null

const val1: SomeType | SomeInterface

if(truthy(val1)) {
    val1 // val1: SomeInterface | number | true 
}

const val2: null | undefined | false

if(truthy(val2)) {
    val2 // val2: never
}
```

### `isTruthy`

Same functionality as [solid-hammers truthy](#truthy) function, only difference is that the name adapts TypeScript naming convention for type guards.

For documentation see [solid-hammers truthy](#truthy).

### `truthyOr`

Evaluates if given value is a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value or returns default value.

#### Syntax

```typescript
truthyOr(defaultValue, value)
```

#### Parameters

##### `defaultValue` the value to be returned if evaluation is false

##### `value` the value to be checked

#### Return value

##### `defaultValue` if evaluation is false; otherwise, `value`

#### Examples

```typescript
truthyOr('defaultValue', 123) // 123
truthyOr('defaultValue', true) // true
truthyOr('defaultValue', 'someString') // 'someString'
truthyOr('defaultValue', []) // [] (reference)
truthyOr('defaultValue', {}) // {} (reference)
truthyOr('defaultValue', () => {}) // () => {} (reference)

truthyOr('defaultValue', false) // 'defaultValue'
truthyOr('defaultValue', '') // 'defaultValue'
truthyOr('defaultValue', 0) // 'defaultValue'
truthyOr('defaultValue', null) // 'defaultValue'
truthyOr('defaultValue', undefined) // 'defaultValue'

// Create a default method
const assertFalsyOrReturnEmptyArray = truthyOr.bind(null, [])

Promise.resolve(null).then(assertFalsyOrReturnEmptyArray) // []
Promise.resolve({ data: () => 'data' }).then(assertFalsyOrReturnEmptyArray) // { data: () => 'data' }

```

### `nullish`

Evaluates if given value is a [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish) value.

#### Syntax

```typescript
nullish(value)
```

#### Parameters

##### `value` the value to be checked

#### Return value

##### `true` if the value is [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish); otherwise, `false`

#### Examples

```typescript
nullish(null) // true
nullish(undefined) // true

nullish(123) // false
nullish(true) // false
nullish('someString') // false
nullish([]) // false
nullish({}) // false
nullish(() => {}) // false
nullish(false) // false
nullish('') // false
nullish(0) // false
```

### `isNullish`

Same functionality as [solid-hammers nullish](#nullish) function, only difference is that the name adapts TypeScript naming convention for type guards.

For documentation see [solid-hammers nullish](#nullish).

### `nullishOr`

Evaluates if given value is a [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish) value or returns default value.

#### Syntax

```typescript
nullishOr(defaultValue, value)
```

#### Parameters

##### `defaultValue` the value to be returned if evaluation is false

##### `value` the value to be checked

#### Return value

##### `defaultValue` if evaluation is false; otherwise, `value`

#### Examples

```typescript
nullishOr('defaultValue', null) // null
nullishOr('defaultValue', undefined) // undefined

nullishOr('defaultValue', 123) // 'defaultValue'
nullishOr('defaultValue', true) // 'defaultValue'
nullishOr('defaultValue', 'someString') // 'defaultValue'
nullishOr('defaultValue', []) // 'defaultValue'
nullishOr('defaultValue', {}) // 'defaultValue'
nullishOr('defaultValue', () => {}) // 'defaultValue'
nullishOr('defaultValue', false) // 'defaultValue'
nullishOr('defaultValue', '') // 'defaultValue'
nullishOr('defaultValue', 0) // 'defaultValue'
```

### `notNullish`

Evaluates if given value is not a [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish) value.

#### Syntax

```typescript
notNullish(value)
```

#### Parameters

##### `value` the value to be checked

#### Return value

##### `true` if the value is not [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish); otherwise, `false`

#### Examples

```typescript
notNullish(123) // true
notNullish(true) // true
notNullish('someString') // true
notNullish([]) // true
notNullish({}) // true
notNullish(() => {}) // true
notNullish(false) // true
notNullish('') // true
notNullish(0) // true

notNullish(null) // false
notNullish(undefined) // false
```

### `isNotNullish`

Same functionality as [solid-hammers notNullish](#notNullish) function, only difference is that the name adapts TypeScript naming convention for type guards.

For documentation see [solid-hammers notNullish](#notNullish).

### `notNullishOr`

Evaluates if given value is not a [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish) value or returns default value.

#### Syntax

```typescript
notNullishOr(defaultValue, value)
```

#### Parameters

##### `defaultValue` the value to be returned if evaluation is false

##### `value` the value to be checked

#### Return value

##### `defaultValue` if evaluation is false; otherwise, `value`

#### Examples

```typescript
notNullishOr('defaultValue', 123) // 123'
notNullishOr('defaultValue', true) // true
notNullishOr('defaultValue', 'someString') // 'someString'
notNullishOr('defaultValue', []) // [] (reference)
notNullishOr('defaultValue', {}) // {} (reference)
notNullishOr('defaultValue', () => {}) // () => {} (reference)
notNullishOr('defaultValue', false) // false
notNullishOr('defaultValue', '') // ''
notNullishOr('defaultValue', 0) // 0

notNullishOr('defaultValue', null) // 'defaultValue'
notNullishOr('defaultValue', undefined) // 'defaultValue'
```
