/**
 * The interface for both <abbr title="most-significant bits">MSB</abbr> and
 * <abbr title="least-significant bits">LSB</abbr> bit-readers. Provides a bit-level information extraction from
 * densely-packed bitstreams. This interface provides up to a maximum of 32-bit reads at a time, the largest
 * _bitwise-safe_ integer size.
 */
export interface BitReader {
  /**
   * Peek at the next `n` bits in the bitstream. `n` must be &leq; 32.
   *
   * @throws Error if n &gt; 32
   */
  peek32(n: number): number;

  /**
   * Read the next `n` bits from the bitstream, and then advance the bitstream by `n` bits. Equivalent to a
   * {@link BitReader.peek32} following by a {@link BitReader.skip}. `n` must be &leq; 32.
   *
   * @param n The number of bits to read.
   * @throws Error if n &gt; 32
   */
  read32(n: number): number;

  /**
   * Advance the bitstream by `n` bytes. `n` may be larger than 32 bits.
   * @param n
   */
  skip(n: number): BitReader;

  /**
   * Advance the bitstream until it's aligned with the next byte-boundary. If the bitstream is already _at_ a
   * byte-boundary, then this is a _noop_.
   */
  align(): BitReader;

  /**
   * Returns true if the bytestream is aligned with a byte-boundary.
   */
  isByteAligned(): boolean;

  /**
   * Seek to an arbitrary byte-offset in the bitstream, from the beginning of the bitstream.
   */
  seek(offset: number): BitReader;
}
