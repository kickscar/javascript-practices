const ex02 = function(param) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            if(param === 'param-data') {
                resolve('ok');
            } else {
                reject(new Error('fail'));
            }
        }, 1000);
    });
}

if(require.main === module) {
    // test01
    ex02("param-data").then(function (result) {
        console.log(result);
    })

    // test02
    ex02("param-error").catch(function (error) {
        console.error(error);
    });

    console.log('waits..');
} else {
    module.exports = ex02;
}