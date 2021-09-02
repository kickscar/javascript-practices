const assert = require('assert').strict;
const { add, na, X  } = require('../ex02.js');

describe('ex02', function() {
    describe('add(10, 20)', function () {
        it('should equal to 30', function () {
            assert.equal(add(10, 20), 30);
        });

        it('should not equal to "30"', function () {
            assert.notEqual(add(10, 20), '30');
        });
    });

    describe('na()', function () {
        it('should equal to [1, 2, 3] deeply', function () {
            assert.deepEqual(na(), [1, 2, 3]);
        });

        it('shoud not equals to [1, 2, 3]', function () {
            assert.notEqual(na(), [1, 2, 3]);
        });
    });

    describe('X() constructor', function () {
        it('a === c', function () {
            const a = new X();
            const c = a;
            assert.equal(a, c, 'a === c : fail');
        });

        it('a !== b', function () {
            const a = new X();
            const b = new X();
            assert.notEqual(a, b);
        });

        it('equantity between a and c', function () {
            const a = new X();
            const c = a;
            assert.deepEqual(a, c);
        });

        it('equantity between a and b', function () {
            const a = new X();
            const b = new X();
            assert.deepEqual(a, b);
        });

        it('not equantity between a and b', function() {
            const a = new X();
            const b = new X();
            b.bar = 'foo';
            assert.notDeepEqual(a, b);
        });
    });
});