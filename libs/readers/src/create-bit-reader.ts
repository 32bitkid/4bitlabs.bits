import { BitReader } from './bit-reader';
import { BitReaderOptions } from './bit-reader-options';
import { FastLsbReader } from './fast-lsb-reader';
import { FastMsbReader } from './fast-msb-reader';
import { LsbReader } from './lsb-reader';
import { MsbReader } from './msb-reader';
import { TypedArray } from './typed-array';

const safeReaders = { msb: MsbReader, lsb: LsbReader } as const;
const fastReaders = { msb: FastMsbReader, lsb: FastLsbReader } as const;

/**
 * Create a new {@link BitReader} from `source` bytes.
 *
 * @param source The source data for the reader.
 * @param options
 *
 * @example Reading in most-significant bits first mode.
 * ```js
 * const source = Uint8Array.of(0b1110_0001);
 * const br = createBitReader(source, { mode: 'msb' });
 *
 * br.read32(3); // 0b111
 * br.read32(1); // 0b0
 * br.read32(3); // 0b000
 * br.read32(1); // 0b1
 * ```
 *
 * @example Reading in least-significant bits first mode.
 *
 * ```js
 * const source = Uint8Array.of(0b1110_0001);
 * const r = createBitReader(source, { mode: 'lsb' });
 *
 * br.read32(3); // 0b001
 * br.read32(1); // 0b0
 * br.read32(3); // 0b110
 * br.read32(1); // 0b1
 * ```
 */
export function createBitReader(
  source: TypedArray | ArrayBuffer,
  options: BitReaderOptions = {},
): BitReader {
  const { fast = false, mode = 'msb' } = options;
  const BitReaderImpl = (fast ? fastReaders : safeReaders)[mode];
  return new BitReaderImpl(source);
}
