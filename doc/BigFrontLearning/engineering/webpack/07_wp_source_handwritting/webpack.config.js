const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'build.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}