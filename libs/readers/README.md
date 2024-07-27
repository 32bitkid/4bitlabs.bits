# @4bitlabs/readers [![License][license]][npm] [![NPM Version][version]][npm] [![NPM Downloads][dl]][npm]

[npm]: https://www.npmjs.com/package/@4bitlabs/readers
[version]: https://img.shields.io/npm/v/%404bitlabs%2Freaders
[license]: https://img.shields.io/npm/l/%404bitlabs%2Freaders
[dl]: https://img.shields.io/npm/dy/%404bitlabs%2Freaders

A collection of bit-readers for javascript and typescript.

## Installation

Using npm:

```shell
$ npm install --save @4bitlabs/readers
```

Using yarn:

```shell
$ yarn add @4bitlabs/readers
```

Using pnpm:

```shell
$ pnpm add @4bitlabs/readers
```

## Documentation

Full documentation for the library can be found [here](https://32bitkid.github.io/4bitlabs.bits/modules/_4bitlabs_readers.html)

## Usage

```js
import { createBitReader } from '@4bitlabs/readers';
const reader = createBitReader(sourceData);

// ...

const firstTenBits = reader.read32(10);
```

## What is a bit-reader?

A bit-reader allows for bits level access to a sequence of bytes, allowing bit-level reads that easily cross byte-level
boundaries. You can think of a bit-reader like a long sequence of bits that can be _shifted_ off, providing access to
later bits. Consider:

```js
const source = Uint8Array.of(0b1111_0011, 0b1100_1111, 0b1010_1010);
```

If you wanted the _most-significant_ 4-bits of this byte sequence, you could use a bitmask and a bitwise shifts:

```js
const value = (source[0] & 0b1111_0000) >>> 4; // 15
```

This can be useful for simple encoded data, however, can become unweildly when crossing multiple bytes. Let's say you
wanted to get the bits

```text
        From           To
         |-------------|
         v             v
0b1111_0011_1100_1111_1010_1010
```

With bitwise operators on a `Uint8Array`, you'd have to:

```js
const value =
  // select and shift the most-significant bits
  ((source[0] & 0b0000_0011) << 10) |
  // select and shift the middle bits
  (source[1] << 2) |
  // select and shift the least-significant bits
  ((source[2] & 0b1100_0000) >>> 6);
```

With a bit-reader, you can instead say:

```js
const reader = createBitReader(source);
reader.skip(6); // skip the first 6 bits
const value = reader.read(12); // take the next 12 bits
```

This can be very useful when parsing densely-packed data-structures, especially when they use _variable-length_ encoding.

## Limitations

As of the _initial_ version, both `MsbReader` and `AsyncBitReader` only support a maximum of **32-bit** reads at time.
However, those **32-bits** do not need to be _byte-aligned_ bits, and can occur anywhere in the bitstream. This limitation
is due to the precision of the bitwise operators in javascript. In the future, this might be addressed to allow for
53-bit reads, the maximum-safe integer size for double-precision numbers.

## License

[ISC](https://github.com/32bitkid/4bitlabs.bits/blob/HEAD/libs/readers/LICENSE.txt)