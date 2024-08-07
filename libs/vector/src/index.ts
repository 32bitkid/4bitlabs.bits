/**
 * A simple, {@link !TypedArray}-backed resizable vector data-structure for ints, floats, and bigints
 *
 * Comes in two flavors: {@link Vector} and {@link BigVector}. Use {@link Vector} for {@link !Number} arrays, and
 * use {@link BigVector} for {@link !BigInt} arrays.
 *
 * @module
 */
export type {
  TypedArray,
  TypedArrayConstructor,
  BigTypedArray,
  BigTypedArrayConstructor,
} from './typed-array';
export type { VectorOptions, VectorFromOptions } from './vector-options';
export { Vector } from './vector';
export { BigVector } from './big-vector';
