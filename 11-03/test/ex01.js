const assert = require('assert');
const { hello } = require('../ex01');

describe('Hello World', function() {
    it('hello() test', function() {
        assert.strictEqual(hello(), "Hello World");
    });
});