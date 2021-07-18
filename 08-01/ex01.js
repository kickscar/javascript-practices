const ex01 = function(param, callback) {
    setTimeout(function() {
        if(param === 'param-data') {
            callback(null, 'ok');
        } else {
            callback(new Error('fail'), null);
        }
    }, 1000);
}

if(require.main === module) {
    // test01: ok
    ex01('param-data', function (err, res) {
        if(err) {
            console.error(err);
        } else {
            console.log(res);
        }
    });

    // test02: fail
    ex01('param-fail', function (err, res) {
        if(err) {
            console.error(err);
        } else {
            console.log(res);
        }
    });

    console.log('waits..');
} else {
    module.exports = ex01;
}