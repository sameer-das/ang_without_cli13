const path = require("path");
const webpack = require("webpack");
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { AngularWebpackPlugin } = require('@ngtools/webpack');

module.exports = merge(common, {
    mode: "production",
    entry: {
        polyfills: path.resolve(__dirname, "..", "src", "polyfills"),
        main: path.resolve(__dirname, "..", "src", "main-prod"),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "@ngtools/webpack",
                exclude: [],
            },
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new AngularWebpackPlugin({
            tsConfigPath: path.resolve(__dirname, '..', 'tsconfig-prod.json'),
            entryModule: path.resolve(__dirname, '..', 'src/app/app.module#AppModule')
        })
    ]

})