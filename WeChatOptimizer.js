import React, { useEffect, useState } from 'react';
import '../styles/wechat-optimization.css';

const WeChatOptimizer = ({ children }) => {
  const [isWeChat, setIsWeChat] = useState(false);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // 检测是否为微信内置浏览器
    const checkWeChat = () => {
      const ua = navigator.userAgent.toLowerCase();
      const isWeChatBrowser = ua.indexOf('micromessenger') > -1;
      setIsWeChat(isWeChatBrowser);
      
      if (isWeChatBrowser) {
        optimizeForWeChat();
      }
    };

    // 微信浏览器优化
    const optimizeForWeChat = () => {
      // 添加微信浏览器专用样式类
      document.documentElement.classList.add('wechat-browser');
      document.body.classList.add('wechat-browser');
      
      // 设置微信浏览器的特殊配置
      document.documentElement.style.fontSize = '16px';
      
      // 禁用微信浏览器的默认行为
      if (window.WeixinJSBridge) {
        window.WeixinJSBridge.call('hideOptionMenu');
        window.WeixinJSBridge.call('hideToolbar');
      } else {
        document.addEventListener('WeixinJSBridgeReady', function() {
          window.WeixinJSBridge.call('hideOptionMenu');
          window.WeixinJSBridge.call('hideToolbar');
        });
      }
      
      // 优化触摸事件
      document.addEventListener('touchstart', function() {}, {passive: true});
      document.addEventListener('touchmove', function() {}, {passive: true});
      
      // 设置微信分享信息
      if (window.wx) {
        window.wx.ready(() => {
          window.wx.updateAppMessageShareData({
            title: '青岛云归谷科技有限公司 - 云智能源 · 数碳未来',
            desc: 'AI驱动的能源管理与碳足迹全链路解决方案提供商',
            link: window.location.href,
            imgUrl: window.location.origin + '/og-image.jpg',
            success: function() {
              console.log('微信分享设置成功');
            }
          });
        });
      }
      
      setIsOptimized(true);
    };

    checkWeChat();
    
    // 清理函数
    return () => {
      if (isWeChat) {
        document.documentElement.classList.remove('wechat-browser');
        document.body.classList.remove('wechat-browser');
      }
    };
  }, [isWeChat]);

  // 微信浏览器提示组件
  const WeChatNotice = () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #dee2e6',
      padding: '8px 16px',
      fontSize: '14px',
      color: '#6c757d',
      textAlign: 'center',
      zIndex: 9999
    }}>
      <span>💡 微信浏览器已优化，体验更佳</span>
    </div>
  );

  return (
    <>
      {isWeChat && isOptimized && <WeChatNotice />}
      {children}
    </>
  );
};

export default WeChatOptimizer;
