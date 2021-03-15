# solid-hammers v1.0.13

A set of JavaScript (ES6) functions and classes for all occasions. Ships with TypeScript support.

`This package i still under development and will ship with more functions and classes with time`

## Table of content (TOC)

1. [Installation](#installation)
2. [Usage as a module](#usage)
    1. [TypeScript support](#typescript-support)
3. [Math](#math)
    1. [Vector2](#vector2)
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
import { /* functions */ } from 'solid-hammers'

// Pick method categories
import * as assert from 'solid-hammers/functions/assert'
import * as invoke from 'solid-hammers/functions/invoke'

// Pick methods.
import Vector2 from 'solid-hammers/math/Vector2'
import isTruthy from 'solid-hammers/functions/assert/isTruthy'
import invokeUntil from 'solid-hammers/functions/invoke/invokeUntil'
```

```js
// ES5

var hammers = require('solid-hammers');

// Pick method categories
var assert = require('solid-hammers/functions/assert');
var invoke = require('solid-hammers/functions/invoke');
var functions = require('solid-hammers/functions');

// Pick methods.
var Vector2 = require('solid-hammers/math/Vector2');
var isTruthy = require('solid-hammers/functions/assert/isTruthy');
```

### Typescript support

> solid-hammers works with TypeScript out of the box since it contains built-in TypeScript declarations.

## Math

### **`Vector2`**

> A 2D vector class

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

##### Available since: 1.0.5

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

>For documentation see [solid-hammers falsy](#falsy).

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

##### Available since: 1.0.5

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

##### Available since: 1.0.5

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

##### Available since: 1.0.5

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
const assertFalsyOrReturnEmptyArray = truthyOr.bind(null, [])

Promise.resolve(null).then(assertFalsyOrReturnEmptyArray) // []
Promise.resolve({ data: () => 'data' }).then(assertFalsyOrReturnEmptyArray) // { data: () => 'data' }

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

##### Available since: 1.0.5

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

##### Available since: 1.0.5

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

##### Available since: 1.0.5

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

##### Available since: 1.0.5

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

##### Available since: 1.0.5

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

##### Available since: 1.0.5

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

##### Available since: 1.0.5

#### Examples

```es6
const log = invokeOn(3, console.log)

for (let i = 1; i <=4; i++) {
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

##### Available since: 1.0.5

#### Examples

```es6
const log = invokeOnce(console.log)

for (let i = 1; i <=4; i++) {
    console.log(i)
    log('done on', i)
}

// 1
// 'done on 1'

// 2

// 3

// 4
```
