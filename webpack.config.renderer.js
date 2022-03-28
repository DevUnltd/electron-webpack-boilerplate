const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  target: 'electron-renderer',
  devtool: 'cheap-module-source-map',
  entry: './src/renderer/index.tsx',
  output: {
    globalObject: 'this',
    filename: 'renderer-index.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: ''
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|json|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: ['file-loader'],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'css/index.css'
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};