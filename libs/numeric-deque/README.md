# @4bitlabs/numeric-deque [![License][license]][npm] [![NPM Version][version]][npm] [![NPM Downloads][dl]][npm]

[npm]: https://www.npmjs.com/package/@4bitlabs/numeric-deque
[version]: https://img.shields.io/npm/v/%404bitlabs%2Fnumeric-deque
[license]: https://img.shields.io/npm/l/%404bitlabs%2Fnumeric-deque
[dl]: https://img.shields.io/npm/dy/%404bitlabs%2Fnumeric-deque

A numeric-container backed by a TypedArray ring-buffer. Implements both stack (FILO) and queue (FIFO) methods, a.k.a. _a [deque](https://en.wikipedia.org/wiki/Double-ended_queue)_.

## Installation

Using npm:

```shell
$ npm install --save @4bitlabs/numeric-deque
```

Using yarn:

```shell
$ yarn add @4bitlabs/numeric-deque
```

Using pnpm:

```shell
$ pnpm add @4bitlabs/numeric-deque
```

## Documentation

Full documentation for the library can be found [here](https://32bitkid.github.io/4bitlabs.bits/modules/_4bitlabs_numeric_deque.html)

## Basic Usage

```ts
import { NumericDeque } from '@4bitlabs/numeric-deque';

// Create a numeric deque to hold *atleast* 10 items.
const deque = new NumericDeque(10);

deque.push(2);
deque.push(3);
deque.push(4);
deque.unshift(1);

while (!deque.isEmpty()) {
  console.log(deque.shift());
}

// Output: 1, 2, 3, 4
```

Note, the capacity given to the constructor is the minimum _required_ capacity. The _actual_ capacity of the deque
_may_ be larger.

### Peek

```ts
const deque = new NumericDeque(10);

deque.push(1);
deque.push(2);
deque.push(3);
deque.push(4);

console.log(deque.peekHead()); // 1
console.log(deque.peekTail()); // 4
```

## `TypedArray` backed deques

By the default, the ring-buffer is backed by `Float64Array`, however, you can any of the numeric `TypedArrays` for your
backing buffer:

```ts
import { NumericDeque } from '@4bitlabs/numeric-deque';

const bytes = new NumericDeque(300, Uint8ClampedArray);
const signedData = new NumericDeque(16, Int16Array);
const buffer = new NumericDeque(2_000, Uint32Array);
```

## License

[ISC](https://github.com/32bitkid/4bitlabs.bits/blob/HEAD/libs/numeric-deque/LICENSE.txt)