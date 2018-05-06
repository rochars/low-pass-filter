/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * MIT License.
 */
 
let lowPassFilter = require('../index.js');

if (process.argv[3] == '--dist') {
    require('browser-env')();let assert = require('assert');
    require('../dist/low-pass-filter-min.js');
    lowPassFilter = window.lowPassFilter;
}

module.exports = lowPassFilter;
