# solid-hammers 1.0.9

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

## Usage as a module

```ts
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

> solid-hammers works with TypeScript out of the box as it ships with local types that will be read when you import solid-hammers in your code.

## Math

### Vector2

> A 2D vector class

## Functions

### Assert

### **`falsy`**


> Evaluates if given value is a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value.

For TypeScript this function can be used as a type guard that strips any truthy types from the evaluated value

#### Syntax

```ts
falsy(value)
```

#### Parameters

> ##### `value` the value to be checked

#### Return value

> ##### `true` if `value` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy); otherwise, `false`

##### Available since: 1.0.5

#### Examples

```ts
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

```ts
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

```ts
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

```ts
truthy(value)
```

#### Parameters

> ##### `value` the value to be checked

#### Return value

> ##### `true` if `value` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy); otherwise, `false`

##### Available since: 1.0.5

#### Examples

```ts
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

```ts
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

```ts
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

```ts
nullish(value)
```

#### Parameters

> ##### `value` the value to be checked

#### Return value

> ##### `true` if `value` is [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish); otherwise, `false`

##### Available since: 1.0.5

#### Examples

```ts
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

```ts
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

```ts
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

```ts
notNullish(value)
```

#### Parameters

> ##### `value` the value to be checked

#### Return value

> ##### `true` if `value` is not [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish); otherwise, `false`

##### Available since: 1.0.5

#### Examples

```ts
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

```ts
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

```ts
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

## Invoke

### **`invokeAfter`**

> Creates a function that invokes given fn **after** it have been called nth or more times.
> The opposite of [`invokeUntil`](#invokeUntil).

#### Syntax

```ts
invokeAfter(nthTime, fn)
```

#### Parameters

> ##### `nthTime` (real number) the nth time of calls before fn is invoked
>
> ##### `fn` the function to be invoked

#### Return value

> ##### new function with nth time call restriction

##### Available since: 1.0.5

#### Examples

```ts
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

```ts
invokeUntil(nthTime, fn)
```

#### Parameters

> ##### `nthTime` (real number) the nth time of calls before fn is invoked
>
> ##### `fn` the function to be invoked

#### Return value

> ##### new function with nth time call restriction

##### Available since: 1.0.5

#### Examples

```ts
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

```ts
invokeOn(nthTime, fn)
```

#### Parameters

> ##### `nthTime` (real number) the nth time of calls before fn is invoked
>
> ##### `fn` the function to be invoked

#### Return value

> ##### new function with nth time call restriction

##### Available since: 1.0.5

#### Examples

```ts
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

```ts
invokeOnce(fn)
```

#### Parameters

> ##### `fn` the function to be invoked

#### Return value

> ##### new function with one time call restriction

##### Available since: 1.0.5

#### Examples

```ts
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
