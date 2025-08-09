import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgAnimation from '../assets/bg-animation.svg';

function Hero() {
  return (
    <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 背景动画 */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img src={bgAnimation} alt="背景动画" className="w-full h-full object-cover" />
      </div>
      {/* 科技线条装饰 */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-color to-primary-dark"></div>
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(62, 146, 204, 0.1) 0%, transparent 20%),
            radial-gradient(circle at 90% 30%, rgba(78, 205, 196, 0.1) 0%, transparent 25%),
            radial-gradient(circle at 50% 80%, rgba(62, 146, 204, 0.1) 0%, transparent 30%)
          `
        }}
      ></motion.div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            云智能源 · 数碳未来
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto">
            AI驱动的能源管理与碳足迹全链路解决方案提供商
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-secondary-color hover:bg-secondary-color/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg"
            >
              <Link to="/solutions">了解解决方案</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
            >
              <Link to="/about#contact">咨询定制服务</Link>
            </motion.button>
          </div>
        </motion.div>

        {/* 滚动指示器 */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [0.5, 1, 0.5], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="text-sm block mt-2">向下滚动探索更多</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;