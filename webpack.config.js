const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js|jsx|mjs)$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpe?g|gif|svg|ico)$/i, type: 'asset/resource' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs']
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './public/index.html',
      inject: true,
      minify: false
    }),
  ],
  stats: { 
    errorDetails: true, 
    colors: true, 
    chunks: false,
    children: false
  },
  mode: 'production',
};
