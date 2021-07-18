const assert = require('assert').strict;
const { na } = require('./ex02');

try {
    assert.deepEqual(na(), [1, 2, 3], 'deepEqual: fail');
    assert.equal(na(), [1, 2, 3], 'equal: fail');
} catch (error) {
    console.log(error.message);
}
