import React from 'react';
import { motion } from 'framer-motion';

const BusinessOverview = () => {
  const businessCards = [
    {
      icon: '⚡',
      title: '能源管理系统',
      description: '实时监测、智能调度、能效优化，降低企业能耗成本',
      features: ['全链路数据采集', '智能算法调度', '移动端监控']
    },
    {
      icon: '🌱',
      title: '能碳管理系统',
      description: '全周期碳足迹追踪、合规报告、减排路径规划，助力双碳目标',
      features: ['碳足迹核算', '合规管理', '减排模拟']
    },
    {
      icon: '🤖',
      title: 'AI场景优化',
      description: '基于机器学习的设备预测性维护、负荷预测、能源策略动态调整',
      features: ['数据训练', '动态优化', '故障预警']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="business-overview" id="solutions">
      <div className="business-overview-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          核心业务概览
        </motion.h2>
        
        <motion.div 
          className="business-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {businessCards.map((card, index) => (
            <motion.div
              key={index}
              className="business-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="business-card-icon">
                <span style={{ fontSize: '2rem' }}>{card.icon}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="mt-4">
                {card.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="text-sm text-gray-600 mb-1">
                    • {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessOverview;