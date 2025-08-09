import { useEffect, useState } from 'react';

const PWARegister = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    // 检查是否已经安装
    const checkIfInstalled = () => {
      try {
        if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
          setIsInstalled(true);
        }
      } catch (error) {
        console.log('Check installed error:', error);
      }
    };

    // 监听安装提示
    const handleBeforeInstallPrompt = (e) => {
      try {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowInstallPrompt(true);
      } catch (error) {
        console.log('Before install prompt error:', error);
      }
    };

    // 监听安装完成
    const handleAppInstalled = () => {
      try {
        setIsInstalled(true);
        setShowInstallPrompt(false);
        setDeferredPrompt(null);
      } catch (error) {
        console.log('App installed error:', error);
      }
    };

    // 注册Service Worker
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('SW registered: ', registration);
        } catch (registrationError) {
          console.log('SW registration failed: ', registrationError);
        }
      }
    };

    // 请求通知权限
    const requestNotificationPermission = async () => {
      if ('Notification' in window) {
        try {
          const permission = await Notification.requestPermission();
          console.log('Notification permission:', permission);
        } catch (error) {
          console.log('Notification permission error:', error);
        }
      }
    };

    // 安全地执行初始化
    const initializePWA = async () => {
      try {
        checkIfInstalled();
        await registerServiceWorker();
        await requestNotificationPermission();
      } catch (error) {
        console.log('PWA initialization error:', error);
      }
    };

    initializePWA();

    // 添加事件监听器
    try {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.addEventListener('appinstalled', handleAppInstalled);
    } catch (error) {
      console.log('Event listener error:', error);
    }

    return () => {
      try {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.removeEventListener('appinstalled', handleAppInstalled);
      } catch (error) {
        console.log('Event listener cleanup error:', error);
      }
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
      } catch (error) {
        console.log('Install click error:', error);
        setShowInstallPrompt(false);
      }
    }
  };

  const sendNotification = () => {
    try {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('云归谷科技', {
          body: '感谢您使用我们的应用！',
          icon: '/icon-192.png',
          badge: '/icon-192.png'
        });
      }
    } catch (error) {
      console.log('Send notification error:', error);
    }
  };

  if (isInstalled) {
    return null; // 已安装则不显示任何内容
  }

  return (
    <>
      {showInstallPrompt && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">安装应用</h3>
              <p className="text-sm opacity-90">将云归谷科技添加到主屏幕</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleInstallClick}
                className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100"
              >
                安装
              </button>
              <button
                onClick={() => setShowInstallPrompt(false)}
                className="text-white opacity-70 hover:opacity-100"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PWARegister;
