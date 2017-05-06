const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundl.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }]
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css')
    ]
}
