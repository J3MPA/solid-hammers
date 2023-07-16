# solid-hammers v0.0.2

A set of JavaScript (ES6) functions and classes for all occasions. Ships with TypeScript support.

`This package i still under development and will ship with more functions and classes with time`

## Table of content (TOC)

1. [Installation](#installation)
2. [Usage as a module](#usage)
   1. [TypeScript support](#typescript-support)
3. [Math](#math)
   1. [Vector2](#vector2)
   2. [average](#average)
   3. [avg](#avg)
   4. [median](#median)
4. [Functions](#functions)
   1. [Assert](#assert)
      1. [falsy](#falsy)
      2. [isFalsy](#isFalsy)
      3. [falsyOr](#falsyOr)
      4. [truthy](#truthy)
      5. [isTruthy](#isTruthy)
      6. [truthyOr](#truthyOr)
      7. [nullish](#nullish)
      8. [isNullish](#isNullish)
      9. [nullishOr](#nullishOr)
      10. [notNullish](#notNullish)
      11. [isNotNullish](#isNotNullish)
      12. [notNullishOr](#notNullishOr)
   2. [Invoke](#invoke)
      1. [invokeAfter](#invokeAfter)
      2. [invokeBefore](#invokeBefore)
      3. [invokeUntil](#invokeUntil)
      4. [invokeOn](#invokeOn)
      5. [invokeOnce](#invokeOnce)
      6. [debounce](#debounce)
   3. [Object](#object)
      1. [getValue](#getValue)
      2. [getValueOr](#getValueOr)
      3. [hasDepth](#hasDepth)
   4. [Array](#array)
      1. [enumerate](#enumerate)

## Installation

Using npm:

```bash
$ npm i solid-hammers
```

Using yarn:

```bash
$ yarn add solid-hammers
```

## Usage

```es6
// ES6

import * as hammers from 'solid-hammers'
// or
import /* functions */ 'solid-hammers'

// Pick method categories
import * as assert from 'solid-hammers/functions/assert'
import * as invoke from 'solid-hammers/functions/invoke'

// Pick methods.
import { Vector2 } from 'solid-hammers/math/Vector2'
import { isTruthy } from 'solid-hammers/functions/assert/isTruthy'
import { invokeUntil } from 'solid-hammers/functions/invoke/invokeUntil'
```

```js
// ES5

var hammers = require('solid-hammers')

// Pick method categories
var assert = require('solid-hammers/functions/assert')
var invoke = require('solid-hammers/functions/invoke')
var functions = require('solid-hammers/functions')

// Pick methods.
var { Vector2 } = require('solid-hammers/math/Vector2')
var { isTruthy } = require('solid-hammers/functions/assert/isTruthy')
var { invokeUntil } = require('solid-hammers/functions/invoke/invokeUntil')
```

### Typescript support

> solid-hammers works with TypeScript out of the box since it contains built-in TypeScript declarations.

## Math

### **`Vector2`**

> A 2D vector class

### **`average`**

> Returns the average number of a given array of numbers

#### Syntax

```es6
average(numbers)
```

#### Parameters

> ##### `numbers` array of real numbers

#### Return value

> ##### returns the average of `numbers` (`number`)

##### Available since: v0.0.1

#### Examples

```es6
average([20, 5, 5]) // 10

average([20, 5, NaN]) // TypeError
average([20, 5, Infinity]) // TypeError
average([20, 5, undefined]) // TypeError
average([20, 5, null]) // TypeError
```

### **`avg`**

> see [average](#average)

##### Available since: v0.0.1

### **`median`**

> Sorts an array of given real number and return the median

#### Syntax

```es6
median(numbers)
```

#### Parameters

> ##### `numbers` array of real numbers

#### Return value

> ##### returns the median of `numbers` (`number`)

##### Available since: v0.0.1

#### Examples

```es6
median([20, 5, 5]) // 5
median([20, 10, 20]) // 20
median([20, 10, 10, 20]) // 15

median([20, 5, NaN]) // TypeError
median([20, 5, Infinity]) // TypeError
median([20, 5, undefined]) // TypeError
median([20, 5, null]) // TypeError
```

## Functions

### Assert

### **`falsy`**

> Evaluates if given value is a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value.

For TypeScript this function can be used as a type guard that strips any truthy types from the evaluated value

#### Syntax

```es6
falsy(value)
```

#### Parameters

> ##### `value` the value to be checked

#### Return value

> ##### `true` if `value` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy); otherwise, `false`

##### Available since: v0.0.1

#### Examples

```es6
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

### **`isFalsy`**

> For documentation see [solid-hammers falsy](#falsy).

Adapts TypeScript naming convention for type guards.

### **`falsyOr`**

> Evaluates if given value is a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value or returns default value.

#### Syntax

```es6
falsyOr(defaultValue, value)
```

#### Parameters

> ##### `defaultValue` the value to be returned if evaluation is false
>
> ##### `value` the value to be checked

#### Return value

> ##### `defaultValue` if evaluation is false; otherwise, `value`

##### Available since: v0.0.1

#### Examples

```es6
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

### **`truthy`**

> Evaluates if given value is a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value.

For TypeScript this function can be used as a type guard that strips any falsy types from the evaluated value.

#### Syntax

```es6
truthy(value)
```

#### Parameters

> ##### `value` the value to be checked

#### Return value

> ##### `true` if `value` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy); otherwise, `false`

##### Available since: v0.0.1

#### Examples

```es6
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

### **`isTruthy`**

> For documentation see [solid-hammers truthy](#truthy).

Adapts TypeScript naming convention for type guards.

### **`truthyOr`**

> Evaluates if given value is a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value or returns default value.

#### Syntax

```es6
truthyOr(defaultValue, value)
```

#### Parameters

> ##### `defaultValue` the value to be returned if evaluation is false
>
> ##### `value` the value to be checked

#### Return value

> ##### `defaultValue` if evaluation is false; otherwise, `value`

##### Available since: v0.0.1

#### Examples

```es6
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
const assertTruthyOrReturnEmptyArray = truthyOr.bind(null, [])

Promise.resolve(null).then(assertTruthyOrReturnEmptyArray) // []
Promise.resolve({ data: () => 'data' }).then(assertTruthyOrReturnEmptyArray) // { data: () => 'data' }
```

### **`nullish`**

> Evaluates if given value is a [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish) value.

#### Syntax

```es6
nullish(value)
```

#### Parameters

> ##### `value` the value to be checked

#### Return value

> ##### `true` if `value` is [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish); otherwise, `false`

##### Available since: v0.0.1

#### Examples

```es6
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

### **`isNullish`**

> For documentation see [solid-hammers nullish](#nullish).

Adapts TypeScript naming convention for type guards.

### **`nullishOr`**

Evaluates if given value is a [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish) value or returns default value.

#### Syntax

```es6
nullishOr(defaultValue, value)
```

#### Parameters

> ##### `defaultValue` the value to be returned if evaluation is false
>
> ##### `value` the value to be checked

#### Return value

> ##### `defaultValue` if evaluation is false; otherwise, `value`

##### Available since: v0.0.1

#### Examples

```es6
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

### **`notNullish`**

> Evaluates if given value is not a [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish) value.

#### Syntax

```es6
notNullish(value)
```

#### Parameters

> ##### `value` the value to be checked

#### Return value

> ##### `true` if `value` is not [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish); otherwise, `false`

##### Available since: v0.0.1

#### Examples

```es6
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

### **`isNotNullish`**

> For documentation see [solid-hammers notNullish](#notNullish).

Adapts TypeScript naming convention for type guards.

### **`notNullishOr`**

> Evaluates if given value is not a [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish) value or returns default value.

#### Syntax

```es6
notNullishOr(defaultValue, value)
```

#### Parameters

> ##### `defaultValue` the value to be returned if evaluation is false
>
> ##### `value` the value to be checked

#### Return value

> ##### `defaultValue` if evaluation is false; otherwise, `value`

##### Available since: v0.0.1

#### Examples

```es6
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

### Invoke

### **`invokeAfter`**

> Creates a function that invokes given fn **after** it have been called nth or more times.
> The opposite of [`invokeUntil`](#invokeUntil).

#### Syntax

```es6
invokeAfter(nthTime, fn)
```

#### Parameters

> ##### `nthTime` (real number) the nth number of calls before fn is invoked
>
> ##### `fn` the function to be invoked

#### Return value

> ##### new function with nth time call restriction

##### Available since: v0.0.1

#### Examples

```es6
const log = invokeAfter(3, console.log)

for (let i = 1; i <= 4; i++) {
  console.log(i)
  log('done on', i)
}

// 1

// 2

// 3
// 'done on 3'

// 4
// 'done on 4'
```

### **`invokeUntil`**

> Creates a function that invokes given fn **until** it have been called nth times.
> The opposite of [`invokeAfter`](#invokeAfter).

#### Syntax

```es6
invokeUntil(nthTime, fn)
```

#### Parameters

> ##### `nthTime` (real number) the nth number of calls until fn will no longer be invoked
>
> ##### `fn` the function to be invoked

#### Return value

> ##### new function with nth time call restriction

##### Available since: v0.0.1

#### Examples

```es6
const log = invokeUntil(3, console.log)

for (let i = 1; i <= 4; i++) {
  console.log(i)
  log('done on', i)
}

// 1
// 'done on 1'

// 2
// 'done on 2'

// 3
// 'done on 3'

// 4
```

### **`invokeOn`**

> Creates a function that invokes given fn on and only on the nth call.

#### Syntax

```es6
invokeOn(nthTime, fn)
```

#### Parameters

> ##### `nthTime` (real number) the nth number of calls before `fn` is invoked
>
> ##### `fn` the function to be invoked

#### Return value

> ##### new function with nth time call restriction

##### Available since: v0.0.1

#### Examples

```es6
const log = invokeOn(3, console.log)

for (let i = 1; i <= 4; i++) {
  console.log(i)
  log('done on', i)
}

// 1

// 2

// 3
// 'done on 3'

// 4
```

### **`invokeOnce`**

> Creates a function that invokes given fn only the first time when called.

#### Syntax

```es6
invokeOnce(fn)
```

#### Parameters

> ##### `fn` the function to be invoked

#### Return value

> ##### new function with one time call restriction

##### Available since: v0.0.1

#### Examples

```es6
const log = invokeOnce(console.log)

for (let i = 1; i <= 4; i++) {
  console.log(i)
  log('done on', i)
}

// 1
// 'done on 1'

// 2

// 3

// 4
```

### **`debounce`**

> Creates a debounced function that returns a promise. If the debounced function is invoked multiple times all promises that is created will resolve with the final value or reject

#### Syntax

```es6
debounce(fn, delay)
```

#### Parameters

> ##### `fn` the function to be invoked

> ##### `delay` the debounce delay in milliseconds

#### Return value

> ##### new debounced function

##### Available since: UPDATE ON NEXT RELEASE

#### Examples

```es6
const fetch = debounce(getData, 1000)

const promise = fetch() // Promise 1
const promise2 = fetch() // Promise 2

// delay elapsed

const response = await promise
const response2 = await promise2

const isSame = response === response2 // true, all promises will resolve with the same value
```

### Object

### **`getValue`**

> Safe property accessor. Functional style for optional chaining.

For TypeScript this method will infer correct return type as long as given path is a readonly array

#### Syntax

```es6
getValue(path, object)
```

#### Parameters

> ##### `path` ((string | number)[]) the path to the property that needs accessed
>
> ##### `object` the object

#### Return value

> ##### the value found at the end of the path; otherwise `undefined`

##### Available since: v0.0.1

#### Examples

```es6
getValue(['some', 'data'], { some: { data: true } }) // true
getValue(['some', 0, 'data'], { some: [{ data: true }] }) // true
getValue(['some', 1, 'data'], { some: [{ data: true }, { data: false }] }) // false
getValue(['some', 'data'], { some: true }) // undefined
getValue(['some'], { some: { data: true } }) // { data: true }

// TypeScript
getValue(['some', 'data'] as const, { some: { data: true } }) // type: true | undefined
getValue(['some'] as const, { some: { data: true } }) // type: { data: true }  | undefined
getValue(['a'] as const, { some: { data: true } }) // type: undefined
getValue(['a'] as const, {}) // type: undefined
```

### **`getValueOr`**

> Safe property accessor with default value. Functional style for optional chaining and with default value capabilities

Generic TypeScript method

#### Syntax

```es6
getValueOr(defaultValue, path, object)
```

#### Parameters

> ##### `defaultValue` the default return value
>
> ##### `path` ((string | number)[]) the path to the property that needs accessed
>
> ##### `object` the object

#### Return value

> ##### the value found at the end of the path; otherwise `defaultValue`

##### Available since: v0.0.1

#### Examples

```es6
getValueOr('defaultValue', ['some', 'data'], { some: { data: true } }) // true
getValueOr('defaultValue', ['some', 'data'], { some: { data: null } }) // null
getValueOr('defaultValue', ['some'], { some: { data: true } }) // { data: true }
getValueOr('defaultValue', ['some', 'data'], { some: { data: undefined } }) // 'defaultValue'
getValueOr('defaultValue', ['some', 'data'], { some: true }) // 'defaultValue'

// TypeScript
getValueOr('defaultValue', ['some', 'data'] as const, { some: { data: true } }) // type: true | 'defaultValue'
getValueOr('defaultValue', ['some'] as const, { some: { data: true } }) // type: { data: true }  | 'defaultValue'
getValueOr('defaultValue', ['a'] as const, { some: { data: true } }) // type: 'defaultValue'
getValueOr('defaultValue', ['a'] as const, {}) // type: 'defaultValue'
```

### **`hasDepth`**

> Checks if object has any properties

Generic TypeScript method

#### Syntax

```es6
hasDepth(object)
```

#### Parameters

> ##### `object` the object

#### Return value

> ##### true of `object` has any properties; otherwise false

##### Available since: v0.0.1

#### Examples

```es6
hasDepth({ some: { data: true } }) // true
hasDepth({}) // false
hasDepth(null) // false
hasDepth([]) // false
hasDepth([1, 2, 3, 4]) // false
hasDepth([[1], [2]]) // false
```

### Array

### **`enumerate`**

> Creates an enumeration iterator from an array much like `Object.entries`

Generic TypeScript method

#### Syntax

```es6
enumerate(array)
```

#### Parameters

> ##### `array` the array to enumerate

#### Return value

> ##### iterator and `toArray` method that converts the iterator to an array `[number,T][]`

##### Available since: UPDATE ON NEXT RELEASE

#### Examples

```es6
const iter = enumerate(['a', 'b', 'c'])

for (const [i, value] of iter) {
  if (i === 0 || value === 'b') {
    // do something
  }
}

const array = iter.toArray()
```

### **`range`**

> Creates a rage iterator

#### Syntax

```es6
range(to, options)
range(params, options)
```

#### Parameters

> ##### `to` the number to create a range to e.g. 10
>
> ##### `params` an object to specify `from` and `to` value (numbers)
>
> ##### `options` an optional object, `options.include: boolean` to include the to value in the range, default false

#### Return value

> ##### iterator and `toArray` method that converts the iterator to an array `number[]`

##### Available since: UPDATE ON NEXT RELEASE

#### Examples

```es6
range(5) // [0, 1, 2, 3, 4]
range(5, { include: true }) // [0, 1, 2, 3, 4, 5]
range({ to: 5 }) // [0, 1, 2, 3, 4]
range({ to: 5, from: 2 }) // [2, 3, 4]
range({ to: 5 }, { include: true }) // [0, 1, 2, 3, 4, 5]
range({ to: 5, from: 2 }, { include }) // [2, 3, 4, 5]

for (const [i, value] of iter) {
  if (i === 0 || value === 'b') {
    // do something
  }
}

const array = iter.toArray()
```
