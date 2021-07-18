const assert = require('assert');
const { add } = require('./ex02');

try {
    assert.equal(add(10, 20), '30');
    assert.strictEqual(add(10, 20), '30');
} catch(error) {
    console.log(error.message);
}