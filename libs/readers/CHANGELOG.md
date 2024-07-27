# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.7](https://github.com/32bitkid/4bitlabs.bits/compare/@4bitlabs/readers@2.0.6...@4bitlabs/readers@2.0.7) (2024-07-27)

### Chore

- updating homepage, repo and bugs links in package.json ([a405edf](https://github.com/32bitkid/4bitlabs.bits/commit/a405edfe3ceb4e8ea90a00f8ab14da9a9ad42f93))

### Docs

- adding documentation for @4bitlabs/numeric-deque ([4af2dfe](https://github.com/32bitkid/4bitlabs.bits/commit/4af2dfee1c4d7dd179b140f23d088a277bd9fe6f))
- fixing links to license in README.md ([3242f7a](https://github.com/32bitkid/4bitlabs.bits/commit/3242f7a30d3c5932a696c561d72431421195709c))
- formalizing documentation for @4bitlabs/readers ([235c4b3](https://github.com/32bitkid/4bitlabs.bits/commit/235c4b310868a99211269d728856f2af8dc260fc))
- Replacing top-level documentation for @4bitlabs/readers ([e0ba0a7](https://github.com/32bitkid/4bitlabs.bits/commit/e0ba0a7a1ebb74aa2c86e6d9c49233c842e338ef))

## [2.0.6](https://github.com/32bitkid/sci.js/compare/@4bitlabs/readers@2.0.5...@4bitlabs/readers@2.0.6) (2024-06-16)

### Chore

- Cleaning up package.json repo links ([787872b](https://github.com/32bitkid/sci.js/commit/787872b5c232e9e14112ab3dfe09cde059987b75))

## [2.0.5](https://github.com/32bitkid/sci.js/compare/@4bitlabs/readers@2.0.4...@4bitlabs/readers@2.0.5) (2024-05-13)

### Chore

- Ensure numbers are properly stringified before emitting ([3a007ad](https://github.com/32bitkid/sci.js/commit/3a007ad7a200d9b2c11fa50b7287ecf28a81f7b4))
- Removing "size" badge. Not a very good metric/representation. ([a5fc9f8](https://github.com/32bitkid/sci.js/commit/a5fc9f8a9d65a64a8ce9330c620e359cf2b17ac7))
- updating README files ([095d19a](https://github.com/32bitkid/sci.js/commit/095d19af411d091c4315da129312e1d063bd2e39))
- Use "this" return type for method chaining ([cf350f8](https://github.com/32bitkid/sci.js/commit/cf350f881f29379fd7ed29055c8a63d3708babc3))

## [2.0.4](https://github.com/32bitkid/sci.js/compare/@4bitlabs/readers@2.0.3...@4bitlabs/readers@2.0.4) (2024-04-05)

### Chore

- enable no-shadow rule ([2ea836a](https://github.com/32bitkid/sci.js/commit/2ea836add49b0a30810a2241d400ca38e0b0b1ed))
- rely on lerna/nx for build asset better caching ([ae1ae1e](https://github.com/32bitkid/sci.js/commit/ae1ae1eb4ead8e89a4d53ea0bcfcbc8e107b1488))

## <small>2.0.3 (2024-03-22)</small>

- Chore: small tweak to reader CHANGELOG ([5ba6796](https://github.com/32bitkid/sci.js/commit/5ba6796))
- Chore: update repo and bugs properties in package.json ([d426943](https://github.com/32bitkid/sci.js/commit/d426943))

## <small>2.0.2 (2024-03-14)</small>

- Chore: add "clean:wipe" script ([016a33f](https://github.com/32bitkid/sci.js/commit/016a33f))

## <small>2.0.0</small>

### Changed

- `BitReader` class has been replaced with an interface
- `createBitReader()` method now handles using the proper implementation based on configuration flags

### Added

- `fast` flag when creating a bit-reader. Uses an implementation that is slightly faster, at the cost of memory
  efficiency/duplication.

  ```ts
  import { createBitReader } from '@4bitlabs/readers';

  const br = createBitReader(data, { fast: true });
  ```

## <small>1.2.0</small>

### Fixed

- Fixed bug in _least-significant_ byte ordering reads across byte-boundaries.

## <small>1.1.0</small>

### Changed

- Performance improvements to `BitReader`. Using single DWORD reads when possible.
- Loosen the `bytes` typescript type to be any _typed-array_ or `DataView`.

## <small>1.0.0</small>

Initial release.

### Added

- `BitReader` implementation.
- `AsyncBitReader` implementation.
