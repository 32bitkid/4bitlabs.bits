# @4bitlabs/vector

[![License][license]][npm]
[![NPM Version][version]][npm]
[![NPM Downloads][dl]][npm]
[![Ko-fi][kofibadge]][kofi]

[npm]: https://www.npmjs.com/package/@4bitlabs/vector
[version]: https://img.shields.io/npm/v/%404bitlabs%2Fvector
[license]: https://img.shields.io/npm/l/%404bitlabs%2Fvector
[dl]: https://img.shields.io/npm/dy/%404bitlabs%2Fvector
[kofibadge]: https://shields.io/badge/ko--fi-donate-ff5f5f?logo=ko-fi&style=for-the-badgeKo-fi
[kofi]: https://ko-fi.com/32bitkid

A simple, TypedArray-backed resizable vector data-structure.

## Installing

Using npm:

```shell
$ npm install --save @4bitlabs/vector
```

## Documentation

Full documentation for the library can be found [here](https://32bitkid.github.io/4bitlabs.bits/modules/_4bitlabs_vector.html)

## Usage

```ts
import { Vector } from '@4bitlabs/vector';

/* Create a resizable vector of float64s */
const floats = new Vector(Float64Array, { initialCapacity: 10 });
floats.push(Math.random());
console.log(floats.pop());

/* Create a resizable vector of bytes */
const bytes = new Vector(Uint8ClampedArray, { initialCapacity: 255 });
bytes.push(0x10);
console.log(bytes.pop());
```

Also included is `BigVector` for usage with `int64` and `uint64` sized integers:

```ts
import { BigVector } from '@4bitlabs/vector';

const uint64s = new BigVector(BigUint64Array);
uint64s.push(0xffff_ffff_ffff_ffffn);
```

## License

[ISC](https://github.com/32bitkid/4bitlabs.bits/blob/HEAD/libs/vector/LICENSE.txt)
