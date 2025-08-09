import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    service: 'energy-management'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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
    setSubmitStatus('');

    try {
      // 创建联系记录
      const contactRecord = {
        id: Date.now(),
        ...formData,
        timestamp: new Date().toISOString(),
        processed: false
      };

      // 保存到localStorage
      const existingContacts = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      existingContacts.unshift(contactRecord); // 添加到开头
      localStorage.setItem('contactSubmissions', JSON.stringify(existingContacts));

      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        service: 'energy-management'
      });
      
      // 3秒后清除成功消息
      setTimeout(() => setSubmitStatus(''), 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: '公司地址',
      content: '青岛市市南区湛山三路6号',
      subContent: ''
    },
    {
      icon: '📞',
      title: '联系电话',
      content: '13061333195（刘先生）',
      subContent: ''
    },
    {
      icon: '✉️',
      title: '邮箱地址',
      content: 'info@emuson.com',
      subContent: 'service@emuson.com (技术支持)'
    },
    {
      icon: '🕒',
      title: '工作时间',
      content: '周一至周五 9:00-18:00',
      subContent: '周六 9:00-12:00 (技术支持)'
    }
  ];

  const services = [
    { value: 'energy-management', label: '能源管理系统' },
    { value: 'carbon-management', label: '碳管理系统' },
    { value: 'ai-optimization', label: 'AI场景优化' },
    { value: 'consultation', label: '技术咨询' },
    { value: 'other', label: '其他服务' }
  ];

  return (
    <div className="contact-page" style={{ paddingTop: '80px', minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      {/* 页面标题 */}
      <motion.div 
        className="page-header"
        style={{
          background: 'linear-gradient(135deg, #0A2463 0%, #3E92CC 100%)',
          color: 'white',
          padding: '4rem 0',
          textAlign: 'center'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            联系我们
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            我们期待与您合作，共同实现能源管理的数字化转型和碳中和目标
          </p>
        </div>
      </motion.div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* 联系信息 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#0A2463',
              marginBottom: '2rem'
            }}>
              联系信息
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: 'white',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e2e8f0'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div style={{
                    fontSize: '2rem',
                    background: 'linear-gradient(135deg, #0A2463 0%, #3E92CC 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    flexShrink: 0
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#0A2463',
                      marginBottom: '0.5rem'
                    }}>
                      {info.title}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      color: '#374151',
                      marginBottom: '0.25rem'
                    }}>
                      {info.content}
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#6b7280'
                    }}>
                      {info.subContent}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#0A2463',
              marginBottom: '2rem'
            }}>
              在线咨询
            </h2>
                         <form onSubmit={handleSubmit} style={{
               background: 'white',
               padding: '2.5rem',
               borderRadius: '24px',
               boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
               border: '1px solid #e2e8f0'
             }}>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      姓名 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      公司名称
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                      placeholder="请输入公司名称"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                      placeholder="请输入邮箱地址"
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      联系电话
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem'
                      }}
                      placeholder="请输入联系电话"
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    服务类型
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      background: 'white'
                    }}
                  >
                    {services.map(service => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    咨询内容 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                    placeholder="请详细描述您的需求或问题..."
                  />
                </div>

                                 <motion.button
                   type="submit"
                   disabled={isSubmitting}
                   style={{
                     background: 'linear-gradient(135deg, #0A2463 0%, #3E92CC 100%)',
                     color: 'white',
                     padding: '1.25rem 2rem',
                     border: 'none',
                     borderRadius: '12px',
                     fontSize: '1.1rem',
                     fontWeight: '600',
                     cursor: isSubmitting ? 'not-allowed' : 'pointer',
                     opacity: isSubmitting ? 0.7 : 1,
                     transition: 'all 0.3s ease',
                     boxShadow: '0 4px 15px rgba(10, 36, 99, 0.3)'
                   }}
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                 >
                  {isSubmitting ? '提交中...' : '提交咨询'}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      padding: '1rem',
                      background: '#d1fae5',
                      border: '1px solid #10b981',
                      borderRadius: '8px',
                      color: '#065f46',
                      textAlign: 'center'
                    }}
                  >
                    ✅ 感谢您的咨询！我们将在24小时内与您联系。
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>


      </div>
    </div>
  );
};

export default ContactPage;