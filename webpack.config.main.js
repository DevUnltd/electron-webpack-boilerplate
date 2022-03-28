const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  target: 'electron-main',
  devtool: 'cheap-module-source-map',
  entry: './src/main/index.ts',
  output: {
    globalObject: 'this',
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    clean: true
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(m|j|t)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};