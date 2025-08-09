import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAnalyticsData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAnalyticsData({
        pageViews: Math.floor(Math.random() * 10000) + 5000,
        uniqueVisitors: Math.floor(Math.random() * 3000) + 1500,
        bounceRate: (Math.random() * 30 + 40).toFixed(1),
        avgSessionDuration: Math.floor(Math.random() * 300 + 120)
      });
      
      setIsLoading(false);
    };

    loadAnalyticsData();
  }, []);

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, []);

  const trackEvent = (eventName) => {
    if (window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'user_engagement'
      });
    }
  };

  const StatCard = ({ title, value, subtitle, icon }) => (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </motion.div>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">数据分析</h1>
        <p className="text-gray-600">实时监控网站访问数据</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="页面浏览量"
          value={analyticsData.pageViews.toLocaleString()}
          subtitle="本月总浏览量"
          icon="👁️"
        />
        <StatCard
          title="独立访客"
          value={analyticsData.uniqueVisitors.toLocaleString()}
          subtitle="本月独立访客数"
          icon="👥"
        />
        <StatCard
          title="跳出率"
          value={`${analyticsData.bounceRate}%`}
          subtitle="平均跳出率"
          icon="📊"
        />
        <StatCard
          title="平均会话时长"
          value={`${Math.floor(analyticsData.avgSessionDuration / 60)}分${analyticsData.avgSessionDuration % 60}秒`}
          subtitle="用户平均停留时间"
          icon="⏱️"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">事件追踪</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => trackEvent('contact_form_submit')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            跟踪联系表单
          </button>
          <button
            onClick={() => trackEvent('file_download')}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            跟踪文件下载
          </button>
          <button
            onClick={() => trackEvent('phone_call')}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            跟踪电话咨询
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
