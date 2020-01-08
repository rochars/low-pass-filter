/**
 * @fileoverview rollup configuration file.
 * Copyright (c) 2019 Rafael da Silva Rocha.
 * @see https://github.com/rochars/low-pass-filter
 */

import compiler from '@ampproject/rollup-plugin-closure-compiler';

export default [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/low-pass-filter.js',
        name: 'lowPassFilter',
        format: 'umd'
      },
    ],
    plugins: [
      compiler({
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT3',
        compilation_level: 'ADVANCED',
        warning_level: 'VERBOSE',
        externs: ['externs/low-pass-filter.js']
      })
    ]
  }
];
