import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // 监控页面加载性能
    const monitorPerformance = () => {
      // 获取性能指标
      const navigation = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');
      
      // 计算关键性能指标
      const metrics = {
        // DNS解析时间
        dnsTime: navigation.domainLookupEnd - navigation.domainLookupStart,
        
        // TCP连接时间
        tcpTime: navigation.connectEnd - navigation.connectStart,
        
        // 首字节时间 (TTFB)
        ttfb: navigation.responseStart - navigation.requestStart,
        
        // DOM内容加载时间
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        
        // 页面完全加载时间
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        
        // 首次内容绘制 (FCP)
        fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
        
        // 最大内容绘制 (LCP)
        lcp: 0, // 需要单独监控
      };

      // 发送性能数据到分析服务
      sendPerformanceData(metrics);
    };

    // 监控用户交互
    const monitorUserInteraction = () => {
      let firstInteraction = true;
      
      const handleInteraction = () => {
        if (firstInteraction) {
          const timeToInteractive = performance.now();
          sendUserInteractionData({ timeToInteractive });
          firstInteraction = false;
        }
      };

      // 监听用户交互事件
      ['click', 'scroll', 'keydown', 'touchstart'].forEach(event => {
        document.addEventListener(event, handleInteraction, { once: true });
      });
    };

    // 监控错误
    const monitorErrors = () => {
      window.addEventListener('error', (event) => {
        sendErrorData({
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          timestamp: Date.now()
        });
      });

      window.addEventListener('unhandledrejection', (event) => {
        sendErrorData({
          type: 'unhandledrejection',
          reason: event.reason,
          timestamp: Date.now()
        });
      });
    };

    // 监控网络状态
    const monitorNetwork = () => {
      if ('connection' in navigator) {
        const connection = navigator.connection;
        
        sendNetworkData({
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        });
      }
    };

    // 监控Core Web Vitals
    const monitorCoreWebVitals = () => {
      // 监控LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          sendCoreWebVitalsData({
            lcp: lastEntry.startTime,
            timestamp: Date.now()
          });
        });
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // 监控FID (First Input Delay)
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            sendCoreWebVitalsData({
              fid: entry.processingStart - entry.startTime,
              timestamp: Date.now()
            });
          });
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // 监控CLS (Cumulative Layout Shift)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          sendCoreWebVitalsData({
            cls: clsValue,
            timestamp: Date.now()
          });
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // 发送性能数据
    const sendPerformanceData = (data) => {
      // 这里可以发送到您的分析服务
      console.log('Performance Data:', data);
      
      // 示例：发送到Google Analytics
      if (window.gtag) {
        window.gtag('event', 'performance', {
          event_category: 'performance',
          event_label: 'page_load',
          value: Math.round(data.loadTime),
          custom_map: {
            dns_time: data.dnsTime,
            tcp_time: data.tcpTime,
            ttfb: data.ttfb,
            fcp: data.fcp
          }
        });
      }
    };

    // 发送用户交互数据
    const sendUserInteractionData = (data) => {
      console.log('User Interaction Data:', data);
      
      if (window.gtag) {
        window.gtag('event', 'user_interaction', {
          event_category: 'engagement',
          event_label: 'first_interaction',
          value: Math.round(data.timeToInteractive)
        });
      }
    };

    // 发送错误数据
    const sendErrorData = (data) => {
      console.log('Error Data:', data);
      
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: data.message,
          fatal: false
        });
      }
    };

    // 发送网络数据
    const sendNetworkData = (data) => {
      console.log('Network Data:', data);
      
      if (window.gtag) {
        window.gtag('event', 'network_info', {
          event_category: 'technical',
          effective_type: data.effectiveType,
          downlink: data.downlink,
          rtt: data.rtt
        });
      }
    };

    // 发送Core Web Vitals数据
    const sendCoreWebVitalsData = (data) => {
      console.log('Core Web Vitals Data:', data);
      
      if (window.gtag) {
        if (data.lcp) {
          window.gtag('event', 'lcp', {
            value: Math.round(data.lcp)
          });
        }
        if (data.fid) {
          window.gtag('event', 'fid', {
            value: Math.round(data.fid)
          });
        }
        if (data.cls) {
          window.gtag('event', 'cls', {
            value: data.cls
          });
        }
      }
    };

    // 初始化监控
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        monitorPerformance();
        monitorUserInteraction();
        monitorErrors();
        monitorNetwork();
        monitorCoreWebVitals();
      });
    } else {
      monitorPerformance();
      monitorUserInteraction();
      monitorErrors();
      monitorNetwork();
      monitorCoreWebVitals();
    }

    // 页面卸载时发送最终数据
    window.addEventListener('beforeunload', () => {
      const sessionDuration = performance.now();
      sendPerformanceData({ sessionDuration });
    });

  }, []);

  return null; // 这个组件不渲染任何内容
};

export default PerformanceMonitor;
