/**
 * A simple, {@link !TypedArray}-backed resizable vector data-structure for ints, floats, and bigints
 *
 * Comes in two flavors: {@link Vector} and {@link BigVector}. Use {@link Vector} for {@link !Number} arrays, and
 * use {@link BigVector} for {@link !BigInt} arrays.
 *
 * @module
 */

export { BigVector } from './big-vector';
export type {
  BigTypedArray,
  BigTypedArrayConstructor,
  TypedArray,
  TypedArrayConstructor,
} from './typed-array';
export { Vector } from './vector';
export type { VectorFromOptions, VectorOptions } from './vector-options';
