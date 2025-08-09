const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '青岛云归谷科技有限公司 - 云智能源 · 数碳未来',
      meta: {
        viewport: 'width=device-width, initial-scale=1.0',
        charset: 'UTF-8',
        description: '青岛云归谷科技有限公司专注于能源管理与碳减排技术，提供AI驱动的能源管理系统、能碳管理系统及AI场景优化解决方案'
      },
      templateContent: `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>青岛云归谷科技有限公司 - 云智能源 · 数碳未来</title>
  <meta name="description" content="青岛云归谷科技有限公司专注于能源管理与碳减排技术，提供AI驱动的能源管理系统、能碳管理系统及AI场景优化解决方案">
  <meta name="keywords" content="青岛云归谷科技, 能源管理, 碳减排, AI优化, 能源管理系统">
  <meta name="author" content="青岛云归谷科技有限公司">
</head>
<body>
  <div id="root"></div>
</body>
</html>
      `
    })
  ]
};
