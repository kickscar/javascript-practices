const assert = require('assert');
const { hello } = require('../ex01');

describe('Hello', function() {
    it('should return "Hello World"', function() {
        assert.strictEqual(hello(), "Hello World");
    });
});