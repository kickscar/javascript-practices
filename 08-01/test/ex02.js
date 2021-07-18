const ex02 = require('../ex02');
const should = require('chai').should();

describe('ex02', function() {
    it('should return ok', async function() {
        const res = await ex02("param-data");
        res.should.equal('ok');
    });
});