// Type definitions for low-pass-filter 1.0.0
// Project: https://github.com/rochars/low-pass-filter
// Definitions by: Rafael da Silva Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/low-pass-filter

/**
 * Low pass filter.
 * @param {!Array<number>|TypedArray} samples The samples.
 * @param {number} cutoff The cutoff frequency.
 * @param {number} sampleRate The sample rate.
 * @param {number} numChannels The number of channels.
 */
export function lowPassFilter(
	samples: number[]|ArrayLike<any>,
	cutoff: number,
	sampleRate: number,
	numChannels: number): void;
