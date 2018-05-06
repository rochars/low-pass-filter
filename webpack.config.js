/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * MIT License.
 */
const ClosureCompiler = require('google-closure-compiler-js').webpack;
module.exports = {
  entry: './compile.js',
  output: {
    filename: './dist/low-pass-filter-min.js'
  },
  plugins: [
    new ClosureCompiler({
      options: {
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED',
        warningLevel: 'VERBOSE'
      }
    })
  ]
};