/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * MIT License.
 *
 * References:
 * https://github.com/jiaaro/pydub/blob/master/pydub/effects.py#L187
 * http://stackoverflow.com/questions/13882038/implementing-simple-high-and-low-pass-filters-in-c
 *
 */

/**
 * Apply LPF to an array of samples.
 * @param {!Array<number>} samples The samples.
 * @param {!number} cutoff The cutoff frequency.
 * @param {!number} sampleRate The sample rate.
 * @param {!number} numChannels The number of channels.
 */
function lowPassFilter(samples, cutoff, sampleRate, numChannels) {
    var rc = 1.0 / (cutoff * 2 * Math.PI);
    var dt = 1.0 / sampleRate;
    var alpha = dt / (rc + dt);
    var last_val = [];
    var offset;
    for (let i=0; i<numChannels; i++) {
        last_val[i] = samples[i];
    }
    for (let i=0; i<samples.length; i++) {
        for (let j=0; j< numChannels; j++) {
            offset = (i * numChannels) + j;
            last_val[j] = last_val[j] + (alpha * (samples[offset] - last_val[j]));
            samples[offset] = last_val[j];
        }
    }
}

module.exports = lowPassFilter;
