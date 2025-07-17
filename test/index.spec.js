const assert = require("node:assert");
const { suite, it } = require("node:test");

suite('test', () => {
    it('should sum two numbers', () => {
        const { sum } = require('../src/index.js');
        const result = sum(2, 2);
        assert.equal(result, 4);
    });

    it('should multiply two numbers', () => {
        const { multiply } = require('../src/index.js');
        const result = multiply(2, 3);
        assert.equal(result, 6);
    });
})
