exports.PI = 3.14;

exports.max = function() {
    let max = Number.MIN_SAFE_INTEGER;
    Array.from(arguments).forEach(arg => max = arg > max ? arg : max);
    return max;
}

exports.min = function() {
    let min = Number.MAX_SAFE_INTEGER;
    Array.from(arguments).forEach(arg => min = arg < min ? arg : min);
    return min;
}
