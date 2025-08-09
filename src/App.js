import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PerformanceMonitor from './components/PerformanceMonitor';
import CustomerService from './components/CustomerService';
import ContactPage from './pages/ContactPage';
import ContentManager from './components/ContentManager';
import Header from './components/Header';
import BusinessOverview from './components/BusinessOverview';
import Services from './components/Services';
import Advantages from './components/Advantages';
import CaseStudy from './components/CaseStudy';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  try {
    return (
      <div className="app-container">
        <PerformanceMonitor />
        <Navbar />
        <CustomerService />
        <Routes>
          <Route path="/" element={
            <div className="home-page-container">
              <Header />
              <BusinessOverview />
              <Services />
              <Advantages />
              <CaseStudy />
              <AboutUs />
              <Footer />
            </div>
          } />
          
          {/* 其他页面路由 */}
          <Route path="/solutions" element={
            <div className="page-container">
              <div style={{ paddingTop: '80px' }}>
                <Services />
              </div>
              <Footer />
            </div>
          } />
          
          <Route path="/advantages" element={
            <div className="page-container">
              <div style={{ paddingTop: '80px' }}>
                <Advantages />
              </div>
              <Footer />
            </div>
          } />
          
          <Route path="/cases" element={
            <div className="page-container">
              <div style={{ paddingTop: '80px' }}>
                <CaseStudy />
              </div>
              <Footer />
            </div>
          } />
          
          <Route path="/about" element={
            <div className="page-container">
              <div style={{ paddingTop: '80px' }}>
                <AboutUs />
              </div>
              <Footer />
            </div>
          } />
          
          <Route path="/contact" element={
            <div className="page-container">
              <ContactPage />
              <Footer />
            </div>
          } />
          
          {/* 内容管理页面 */}
          <Route path="/cms" element={
            <div className="page-container">
              <div style={{ paddingTop: '80px' }}>
                <ContentManager />
              </div>
              <Footer />
            </div>
          } />
          
          {/* 404页面 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  } catch (error) {
    return (
      <div style={{ padding: '20px', color: 'red', textAlign: 'center', marginTop: '50px' }}>
        <h2>应用错误</h2>
        <p>{error.message}</p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          请刷新页面重试，或联系技术支持
        </p>
      </div>
    );
  }
}

export default App;
