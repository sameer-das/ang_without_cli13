const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
        chunkFilename: '[id].chunk.js',
        clean: true
        
    },
    // devtool: 'eval-cheap-source-map',

})