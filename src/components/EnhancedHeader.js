import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EnhancedHeader = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // 视差滚动效果
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const y3 = useTransform(scrollY, [0, 300], [0, -150]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = [
    { icon: '⚡', delay: 0, y: y1 },
    { icon: '🌱', delay: 0.5, y: y2 },
    { icon: '🤖', delay: 1, y: y3 },
    { icon: '📊', delay: 1.5, y: y1 },
    { icon: '🔋', delay: 2, y: y2 }
  ];

  return (
    <section 
      ref={containerRef}
      className="enhanced-hero-section"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 动态背景网格 */}
      <div className="hero-grid-background">
        <svg className="grid-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* 鼠标跟随光点 */}
      <motion.div
        className="cursor-follower"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* 浮动元素 */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="floating-element"
          style={{ y: element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-4xl">{element.icon}</span>
        </motion.div>
      ))}

      {/* 主要内容 */}
      <div className="hero-content">
        <motion.div
          className="hero-text-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="title-highlight">云智能源</span>
            <br />
            <span className="title-sub">数碳未来</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            AI驱动的能源管理与碳足迹全链路解决方案提供商
          </motion.p>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="stat-item">
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                50+
              </motion.div>
              <div className="stat-label">成功案例</div>
            </div>
            <div className="stat-item">
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                20%
              </motion.div>
              <div className="stat-label">平均能耗降低</div>
            </div>
            <div className="stat-item">
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                15,000吨
              </motion.div>
              <div className="stat-label">累计碳减排</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.button
            className="btn btn-primary btn-large"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-icon">🚀</span>
            了解解决方案
          </motion.button>
          
          <motion.button
            className="btn btn-secondary btn-large"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-icon">💬</span>
            咨询定制服务
          </motion.button>

          <motion.button
            className="btn btn-outline btn-large"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-icon">▶️</span>
            观看演示视频
          </motion.button>
        </motion.div>

        {/* 滚动提示 */}
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-text">向下滚动了解更多</div>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </div>

      {/* 背景装饰 */}
      <div className="hero-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </section>
  );
};

export default EnhancedHeader; 