/**
 * Copyright (c) 2019 Rafael da Silva Rocha.
 * https://github.com/rochars/low-pass-filter
 *
 */

let lowPassFilter;

// UMD bundle
if (process.argv[3] == '--umd') {
	console.log('umd tests');
	lowPassFilter = require('../dist/low-pass-filter.js').lowPassFilter;

// Source
} else {
	require = require("esm")(module);
	global.module = module;
	console.log('Source tests');
	lowPassFilter = require('../index.js').lowPassFilter;
}

module.exports = lowPassFilter;
