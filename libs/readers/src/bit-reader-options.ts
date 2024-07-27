/**
 * The advanced options for configuring the type of {@link BitReader} that is constructed.
 */
export interface BitReaderOptions {
  /**
   * Select the bit-ordering mode for the bitstream: either most-significant bits first _or_ least-significant bits first.
   *
   * @defaultValue `msb`
   */
  mode?: 'msb' | 'lsb';

  /**
   * Copy the source data into a `uint32` aligned backing {@link ArrayBuffer} to facilitate slightly faster bitwise maths and OOB checks.
   *
   * @defaultValue `false`.
   *
   * @remarks
   * In certain cases this *can* be faster, but its also needs
   * to copy the source array buffer to avoid buffer overruns, making
   * it less memory efficient. Generally, a normal {@link BitReader} is
   * negligibly slower, generally safer, and doesn't incur the memory/copy penalty.
   */
  fast?: boolean;
}
