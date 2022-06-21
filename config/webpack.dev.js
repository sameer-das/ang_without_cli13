const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
    mode: "development",
    entry: {
        polyfills: path.resolve(__dirname, "..", "src", "polyfills"),
        main: path.resolve(__dirname, "..", "src", "main"),
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["babel-loader", "ts-loader", "angular2-template-loader"],
                exclude: [/node_modules/],
            },
        ]
    },
    devtool: 'eval-cheap-source-map',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, '..', 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
    }
})