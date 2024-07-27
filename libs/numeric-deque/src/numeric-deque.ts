export type TypeArrayConstructor =
  | Uint8ArrayConstructor
  | Uint8ClampedArrayConstructor
  | Uint16ArrayConstructor
  | Uint32ArrayConstructor
  | Int8ArrayConstructor
  | Int16ArrayConstructor
  | Int32ArrayConstructor
  | Float32ArrayConstructor
  | Float64ArrayConstructor;

type BufferType =
  | Uint8Array
  | Uint8ClampedArray
  | Uint16Array
  | Uint32Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Float32Array
  | Float64Array;

const MAX_SAFE_DWORD = ~0 >>> 0;

/**
 * A **double-ended queue**, or [deque](https://en.wikipedia.org/wiki/Double-ended_queue), is a data-structure that
 * support both stack and queue semantics. This {@link NumericDeque} is implemented as fixed-length circular buffer that
 * is backed by a {@link !TypedArray} for fast, efficient performance.
 *
 * @example A basic deque of numbers
 *
 * ```ts
 * import { NumericDeque } from '@4bitlabs/numeric-deque';
 *
 * // Create a numeric deque to hold *atleast* 10 items.
 * const deque = new NumericDeque(10);
 *
 * deque.push(2);
 * deque.push(3);
 * deque.push(4);
 * deque.unshift(1);
 *
 * while (!deque.isEmpty()) {
 *   console.log(deque.shift());
 * }
 *
 * // Output: 1, 2, 3, 4
 * ```
 *
 * @example A deque of 1,024 bytes
 *
 * ```ts
 * const bytes = new NumericDeque(1_024, Uint8ClampedArray);
 * bytes.push(0xFF);
 * bytes.push(0x7f);
 * bytes.push(0x00);
 *
 * bytes.shift()
 * bytes.pop()
 * bytes.shift()
 * ```
 */
export class NumericDeque {
  private head = 0;
  private tail = 0;
  private size = 0;
  private readonly mask: number;
  private readonly capacity: number;
  private readonly buffer: BufferType;

  /**
   *
   * @param minSize The minimum size required by the deque. The actual capacity will be the next largest power-of-two.
   * @param Buffer The {@link !TypedArray} backing store for the deque. Defaults to {@link !Float64Array}, making it naturally compatible with the native {@link !Number} type.
   */
  constructor(minSize: number, Buffer: TypeArrayConstructor = Float64Array) {
    if (minSize <= 1)
      throw new Error(`Out of bounds: ${minSize.toString(10)} <= 1`);
    if (minSize > MAX_SAFE_DWORD)
      throw new Error(
        `Out of bounds: ${minSize.toString(10)} > ${MAX_SAFE_DWORD.toString(10)}`,
      );

    this.capacity = 2 ** (32 - Math.clz32(minSize - 1));
    this.mask = ~0 >>> Math.clz32(minSize - 1);
    this.buffer = new Buffer(this.capacity);
  }

  /**
   * Get the current length of elements in the deque.
   */
  get length() {
    return this.size;
  }

  /**
   * Returns `true` if the deque is empty
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Push an element on the `TAIL` of the deque.
   *
   * @param value The value to add to the `TAIL` of the deque.
   * @throws Error if the deque is full.
   */
  push(value: number) {
    if (this.size + 1 > this.capacity)
      throw new Error('overflow: deque is full');

    this.buffer[this.tail] = value;
    this.tail = (this.tail + 1) & this.mask;
    this.size++;
  }

  /**
   * Pop an element off the `TAIL` of the deque
   * @returns The value at the `TAIL` of the deque.
   * @throws Error if the deque is empty.
   */
  pop(): number {
    if (this.size === 0) throw new Error('underflow: deque is empty');
    this.tail = (this.tail - 1) & this.mask;
    this.size--;
    return this.buffer[this.tail];
  }

  /**
   * Prepend an element to the `HEAD` of the deque
   * @param value The value to append to the `HEAD` of the deque.
   * @throws Error if the deque is full.
   */
  unshift(value: number) {
    if (this.size + 1 > this.capacity)
      throw new Error('overflow: deque is full');

    this.head = (this.head - 1) & this.mask;
    this.size++;
    this.buffer[this.head] = value;
  }

  /**
   * Shift an element off the `HEAD` of the deque.
   * @returns The value at the `HEAD` of the deque.
   * @throws Error if the deque is empty.
   */
  shift(): number {
    if (this.size === 0) throw new Error('underflow: deque is empty');
    const value = this.buffer[this.head];
    this.head = (this.head + 1) & this.mask;
    this.size--;
    return value;
  }

  /**
   * Peek at the element at the `HEAD` of the deque.
   * @returns The value at the `HEAD` of the deque.
   * @throws Error if the deque is empty.
   */
  peekHead(): number {
    if (this.size === 0) throw new Error('underflow: deque is empty');
    return this.buffer[this.head];
  }

  /**
   * Peek at the element at the `TAIL` of the deque.
   * @returns The value at the `TAIL` of the deque.
   * @throws Error if the deque is empty.
   */
  peekTail(): number {
    if (this.size === 0) throw new Error('underflow: deque is empty');
    return this.buffer[(this.tail - 1) & this.mask];
  }

  /**
   * Remove all elements from the deque.
   */
  clear(): void {
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }
}
