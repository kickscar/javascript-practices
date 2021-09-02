module.exports = function(source) {
    console.log('text-loader preprocessing...:' + source);
    return `module.exports = { text: '${ source }'}`;
}