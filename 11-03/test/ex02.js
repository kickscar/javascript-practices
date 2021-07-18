const assert = require('assert').strict;
const { add, na, X  } = require('../ex02.js');

describe('Module ex02 Test', function() {

    it('add() test01', function() {
        assert.equal(add(10, 20), 30, 'equal: fail');
    });

    it('add() test02', function() {
        assert.notEqual(add(10, 20), '30', 'notEqual: fail');
    });

    it('na() test01', function() {
        assert.deepEqual(na(), [1, 2, 3], 'deepEqual: fail');
    });

    it('na() test02', function() {
        assert.notEqual(na(), [1, 2, 3], 'notEqual: fail');
    });

    it('constructor X() test01', function() {
        const a = new X();
        const c = a;
        assert.equal(a, c,'a === c : fail');
    });

    it('constructor X() test02', function() {
        const a = new X();
        const b = new X();
        assert.notEqual(a, b, 'a !== b : fail');
    });

    it('constructor X() test03', function() {
        const a = new X();
        const c = a;
        assert.deepEqual(a, c, 'deepEqual: fail');
    });

    it('constructor X() test04', function() {
        const a = new X();
        const b = new X();
        assert.deepEqual(a, b, 'deepEqual: fail');
    });

    it('constructor X() test05', function() {
        const a = new X();
        const b = new X();
        b.bar = 'foo';
        assert.notDeepEqual(a, b, 'notDeepEqual: fail');
    });
});