import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="not-found-container" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0A2463 0%, #3E92CC 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ fontSize: '8rem', marginBottom: '1rem' }}>404</div>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>页面未找到</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
          抱歉，您访问的页面不存在或已被移动。
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/" 
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4ECDC4',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#3DB8B0'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4ECDC4'}
          >
            返回首页
          </Link>
          <Link 
            to="/contact" 
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'transparent',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              border: '2px solid white',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#0A2463';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            联系我们
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound; 