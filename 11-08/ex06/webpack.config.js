const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { modules: true } }
            ]
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.svg$/i,
            loader: 'file-loader',
            options: {
                outputPath: '/assets/images',
                publicPath: '/assets/images',
                name: '[name].[ext]'
            }
        }]
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}