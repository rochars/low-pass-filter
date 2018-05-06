# low-pass-filter
Copyright (c) 2018 Rafael da Silva Rocha.  
MIT License.

## About
LPF. This is a audio FX.

## Install
```
npm install low-pass-filter
```

## Use
```javascript

/**
 * Apply LPF to an array of samples.
 * @param {!Array<number>} samples The samples.
 * @param {!number} cutoff The cutoff frequency.
 * @param {!number} sampleRate The sample rate.
 * @param {!number} numChannels The number of channels.
 */
function lowPassFilter(samples, cutoff, sampleRate, numChannels) {}
```

### References
https://github.com/jiaaro/pydub/blob/master/pydub/effects.py#L187  
http://stackoverflow.com/questions/13882038/implementing-simple-high-and-low-pass-filters-in-c

## LICENSE
Copyright (c) 2018 Rafael da Silva Rocha.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
