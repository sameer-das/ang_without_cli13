const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {

  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
    chunkFilename: '[id].chunk.js',
    clean: true

  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          compact: false,
          cacheDirectory: true,
          plugins: "@angular/compiler-cli/linker/babel"
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          esModule: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: "file-loader?name=assets/[name].[hash].[ext]",
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "raw-loader",
            options: {
              esModule: false,
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },],
      },
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '..', "./src"), // location of your src
      {} // a map of your routes
    ),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "src", "index.html"),
    }),
  ],
};
