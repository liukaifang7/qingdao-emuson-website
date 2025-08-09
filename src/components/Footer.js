import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    demandType: '',
    contact: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    setTimeout(() => {
      alert('感谢您的咨询！我们会尽快与您联系。');
      setFormData({
        name: '',
        company: '',
        demandType: '',
        contact: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const demandTypes = [
    '能源管理系统',
    '能碳管理系统', 
    'AI场景优化',
    '技术咨询',
    '其他需求'
  ];

  return (
    <>
      {/* 联系咨询部分 */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <motion.h2 
            className="section-title text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            联系咨询
          </motion.h2>

          <div className="contact-content">
            {/* 联系表单 */}
            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">在线咨询</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">姓名 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">企业名称 *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    placeholder="请输入企业名称"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="demandType">需求类型 *</label>
                  <select
                    id="demandType"
                    name="demandType"
                    value={formData.demandType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">请选择需求类型</option>
                    {demandTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact">联系方式 *</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                    placeholder="请输入电话或邮箱"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">详细需求</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="请详细描述您的需求..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="loading mr-2"></div>
                      提交中...
                    </span>
                  ) : (
                    '提交咨询'
                  )}
                </button>
              </form>
            </motion.div>

            {/* 联系信息 */}
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">联系方式</h3>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <span>📍</span>
                </div>
                <div>
                              <h4 className="font-semibold mb-1">公司地址</h4>
            <p>青岛市市南区湛山三路6号</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <span>📞</span>
                </div>
                <div>
                              <h4 className="font-semibold mb-1">联系电话</h4>
            <p>13061333195（刘先生）</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <span>✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">邮箱地址</h4>
                  <p>contact@emuson.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <span>💬</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">在线咨询</h4>
                  <p>工作日 9:00-18:00</p>
                </div>
              </div>

              {/* 二维码 */}
              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-3">关注我们</h4>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-2">
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="text-sm">企业微信</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-2">
                      <span className="text-2xl">📺</span>
                    </div>
                    <p className="text-sm">公众号</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>


        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>云归谷科技</h3>
              <p>科技赋能能源革新，数据驱动低碳未来</p>
              <p>专注于能源管理与碳减排技术的高科技企业</p>
            </div>
            
            <div className="footer-section">
              <h3>核心业务</h3>
              <p>能源管理系统</p>
              <p>能碳管理系统</p>
              <p>AI场景优化</p>
            </div>
            
            <div className="footer-section">
              <h3>联系我们</h3>
              <p>地址：青岛市市南区湛山三路6号</p>
                      <p>电话：13061333195（刘先生）</p>
        <p>邮箱：contact@emuson.com</p>
            </div>
            
            <div className="footer-section">
              <h3>关注我们</h3>
              <p>企业微信</p>
              <p>公众号</p>
              <p>官方网站</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 青岛云归谷科技有限公司. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;