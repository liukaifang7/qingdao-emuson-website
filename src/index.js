import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 先创建一个简单的测试组件
function TestComponent() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center', 
      fontSize: '24px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#0A2463', marginBottom: '20px' }}>
        青岛云归谷科技有限公司
      </h1>
      <p style={{ color: '#666', fontSize: '18px' }}>
        网站正在加载中，请稍候...
      </p>
      <p style={{ color: '#999', fontSize: '14px', marginTop: '20px' }}>
        如果您看到这个页面，说明React应用已经成功启动！
      </p>
    </div>
  );
}

function App() {
  try {
    return (
      <div className="app-container">
        <Routes>
          <Route path="/" element={<TestComponent />} />
          <Route path="*" element={<TestComponent />} />
        </Routes>
      </div>
    );
  } catch (error) {
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        应用错误: {error.message}
      </div>
    );
  }
}

export default App;
