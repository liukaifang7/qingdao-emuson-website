import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PerformanceMonitor from './components/PerformanceMonitor';
import CustomerService from './components/CustomerService';

// 懒加载组件 - 按需加载
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ContentManager = lazy(() => import('./components/ContentManager'));
const Header = lazy(() => import('./components/Header'));
const BusinessOverview = lazy(() => import('./components/BusinessOverview'));
const Services = lazy(() => import('./components/Services'));
const Advantages = lazy(() => import('./components/Advantages'));
const CaseStudy = lazy(() => import('./components/CaseStudy'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Footer = lazy(() => import('./components/Footer'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  try {
    return (
      <div className="app-container">
        <PerformanceMonitor />
        <Navbar />
        <CustomerService />
        
        <Suspense fallback={
          <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '200px', 
            fontSize: '18px'
          }}>
            加载中...
          </div>
        }>
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
        </Suspense>
      </div>
    );
  } catch (error) {
    return (
      <div style={{ 
        padding: '20px', 
        color: 'red', 
        textAlign: 'center', 
        marginTop: '50px' 
      }}>
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