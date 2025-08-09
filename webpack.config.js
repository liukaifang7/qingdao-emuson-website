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
      { test: /\.(png|jpe?g|gif|svg)$/i, type: 'asset/resource' },
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
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/',
      serveIndex: false
    },
    port: process.env.PORT || 3006,
    open: true,
    hot: true,
    historyApiFallback: true,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    setupMiddlewares: (middlewares, devServer) => {
      // 禁用serve-index中间件
      return middlewares.filter(middleware => 
        !middleware.name || !middleware.name.includes('serve-index')
      );
    },
  },
  stats: { errorDetails: true, colors: true, chunks: false },
  mode: 'development',
};