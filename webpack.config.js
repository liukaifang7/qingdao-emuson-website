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
  <style>
    body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
    #root { min-height: 100vh; }
    .loading { display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; font-size: 18px; }
    .debug { margin-top: 20px; font-size: 14px; color: #666; }
  </style>
  <script>
    console.log('HTML loaded at:', new Date().toLocaleTimeString());
    
    // 添加调试信息到页面
    function addDebugInfo(message) {
      const debugDiv = document.getElementById('debug-info') || (() => {
        const div = document.createElement('div');
        div.id = 'debug-info';
        div.className = 'debug';
        document.querySelector('.loading').appendChild(div);
        return div;
      })();
      debugDiv.innerHTML += '<div>' + new Date().toLocaleTimeString() + ': ' + message + '</div>';
      console.log(message);
    }
    
    // 监听所有错误
    window.addEventListener('error', function(e) {
      addDebugInfo('JavaScript错误: ' + e.message);
    });
    
    window.addEventListener('unhandledrejection', function(e) {
      addDebugInfo('Promise错误: ' + e.reason);
    });
    
    // DOM加载完成
    document.addEventListener('DOMContentLoaded', function() {
      addDebugInfo('DOM加载完成');
    });
    
    // 页面完全加载
    window.addEventListener('load', function() {
      addDebugInfo('页面完全加载完成');
      
      // 5秒后检查React是否启动
      setTimeout(function() {
        const root = document.getElementById('root');
        if (root && root.innerHTML.includes('正在加载中')) {
          addDebugInfo('React应用未启动 - bundle.js可能未加载或执行失败');
        }
      }, 5000);
    });
  </script>
</head>
<body>
  <div id="root">
    <div class="loading">
      <div>正在加载中...</div>
      <div id="debug-info" class="debug"></div>
    </div>
  </div>
</body>
</html>
      `
    })
  ]
};
