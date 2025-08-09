import React from 'react';
import ReactDOM from 'react-dom/client';

// 完全不依赖任何外部模块的简单组件
function SimpleApp() {
  return React.createElement('div', {
    style: {
      padding: '40px',
      textAlign: 'center',
      fontSize: '24px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }
  }, [
    React.createElement('h1', {
      key: 'title',
      style: { color: '#0A2463', marginBottom: '20px' }
    }, '青岛云归谷科技有限公司'),
    React.createElement('p', {
      key: 'subtitle',
      style: { color: '#666', fontSize: '18px', marginBottom: '20px' }
    }, 'React应用已成功启动！'),
    React.createElement('p', {
      key: 'info',
      style: { color: '#999', fontSize: '14px' }
    }, '测试版本 - 完全不依赖外部模块')
  ]);
}

// 添加全局错误处理
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = '<div style="padding: 20px; color: red; font-family: Arial;">错误: ' + e.error.message + '</div>';
  }
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

// 等待DOM加载完成
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function initApp() {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      throw new Error('Root element not found');
    }

    // 清除加载提示
    rootElement.innerHTML = '';
    
    // 使用最基础的React渲染方式
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(SimpleApp));
    
    console.log('React app initialized successfully');
  } catch (error) {
    console.error('Error initializing React app:', error);
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: Arial;">应用启动失败: ' + error.message + '</div>';
    }
  }
}
