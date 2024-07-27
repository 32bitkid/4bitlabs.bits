/**
 * A bit-reader allows for bits level access to a sequence of bytes, allowing bit-level reads that easily cross byte-level
 * boundaries. You can think of a bit-reader like a long sequence of bits that can be _shifted_ off, providing access to
 * later bits. Consider:
 *
 * ```js
 * const source = Uint8Array.of(0b1111_0011, 0b1100_1111, 0b1010_1010);
 * ```
 *
 * If you wanted the _most-significant_ 4-bits of this byte sequence, you could use a bitmask and a bitwise shifts:
 *
 * ```js
 * const value = (source[0] & 0b1111_0000) >>> 4; // 15
 * ```
 *
 * This can be useful for simple encoded data, however, can become unweildly when crossing multiple bytes. Let's say you
 * wanted to get the bits
 *
 * ```text
 *         From           To
 *          |-------------|
 *          v             v
 * 0b1111_0011_1100_1111_1010_1010
 * ```
 *
 * With bitwise operators on a `Uint8Array`, you'd have to:
 *
 * ```js
 * const value =
 *   // select and shift the most-significant bits
 *   ((source[0] & 0b0000_0011) << 10) |
 *   // select and shift the middle bits
 *   (source[1] << 2) |
 *   // select and shift the least-significant bits
 *   ((source[2] & 0b1100_0000) >>> 6);
 * ```
 *
 * With a {@link BitReader}, you can instead say:
 *
 * ```js
 * const reader = createBitReader(source);
 * reader.skip(6); // skip the first 6 bits
 * const value = reader.read(12); // take the next 12 bits
 * ```
 *
 * This can be very useful when parsing densely-packed data-structures, especially when they use _variable-length_ encoding.
 *
 * @see {@link createBitReader}
 *
 * @module
 */
export { createBitReader } from './create-bit-reader';
export { AsyncBitReader } from './async-bit-reader';
export { AsyncFileByteReader, SyncByteReader } from './byte-reader';
export type { ByteReaderOptions, ByteReader } from './byte-reader';
export type { BitReader } from './bit-reader';
export type { TypedArray } from './typed-array';
export type { BitReaderOptions } from './bit-reader-options';
