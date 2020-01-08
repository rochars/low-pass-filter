/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * MIT License.
 */

var assert = require("assert");

describe("interface", function() {
	
    const lowPassFilter = require("../../test/loader.js");

    it("Should have the lowPassFilter function available", function() {
        const samples = [1,-1];
        lowPassFilter(samples, 0, 1, 1);
        assert.ok(lowPassFilter);
    });

});
