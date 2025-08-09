import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="hero-section">
      {/* 动态背景 */}
      <div className="hero-background">
        {/* 流动数据线条效果 */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 600">
          <motion.path
            d="M0,300 Q250,200 500,300 T1000,300"
            stroke="var(--accent-green)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,400 Q250,300 500,400 T1000,400"
            stroke="var(--secondary-blue)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
        
        {/* 三维能源图标 */}
        <div className="absolute top-20 right-20 opacity-30">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-6xl"
          >
            ⚡
          </motion.div>
        </div>
        
        <div className="absolute bottom-20 left-20 opacity-30">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl"
          >
            🌱
          </motion.div>
        </div>
        
        {/* AI大脑虚影 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-8xl"
          >
            🧠
          </motion.div>
        </div>
      </div>

      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          云智能源 · 数碳未来
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          AI驱动的能源管理与碳足迹全链路解决方案提供商
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <Link to="/solutions" className="btn btn-primary">
            了解解决方案
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            咨询定制服务
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;