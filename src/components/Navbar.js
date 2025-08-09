import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          云归谷科技
        </Link>
        
        <ul className="navbar-menu">
          <li><Link to="/">首页</Link></li>
          <li><Link to="/solutions">解决方案</Link></li>
          <li><Link to="/advantages">技术优势</Link></li>
          <li><Link to="/cases">案例展示</Link></li>
          <li><Link to="/about">关于我们</Link></li>
          <li><Link to="/contact">联系咨询</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;