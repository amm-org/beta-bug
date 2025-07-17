const assert = require("node:assert");
const { suite, it } = require("node:test");

suite('test', () => {
    it('should sum two numbers', () => {
        const { sum } = require('../src/index.js');
        const result = sum(2, 2);
        assert.equal(result, 4);
    });

    it('should subtract two numbers', () => {
        const { subtract } = require('../src/index.js');
        const result = subtract(5, 3);
        assert.equal(result, 2);
    })

    it('should multiply two numbers', () => {
        const { multiply } = require('../src/index.js');
        const result = multiply(2, 3);
        assert.equal(result, 6);
    });

    it('should divide two numbers', () => {
        const { divide } = require('../src/index.js');
        const result = divide(6, 3);
        assert.equal(result, 2);
    });

    it('should return NaN when dividing by zero', () => {
        const { divide } = require('../src/index.js');
        const result = divide(6, 0);
        assert(isNaN(result));
    });
})
