const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkerPlugin = require("worker-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "../build"),
    filename: "[name].bundle.js",
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "../build"),
    compress: true,
    port: 3000,
    overlay: true,
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // transpiling our JavaScript files using Babel and webpack
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: ["img:src", ":data-src"],
            minimize: true,
          },
        },
      },
    ],
  },
  plugins: [
    // CleanWebpackPlugin will do some clean up/remove folder before build
    // In this case, this plugin will remove 'dist' and 'build' folder before re-build again
    new CleanWebpackPlugin(),
    // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new WorkerPlugin({
      sharedWorker: true,
      worker: true,
    }),
  ],
};
