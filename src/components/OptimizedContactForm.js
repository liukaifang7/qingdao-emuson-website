import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OptimizedContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'energy-management',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const services = [
    { value: 'energy-management', label: '能源管理系统', icon: '⚡' },
    { value: 'carbon-management', label: '碳管理系统', icon: '🌱' },
    { value: 'ai-optimization', label: 'AI场景优化', icon: '🤖' },
    { value: 'consultation', label: '技术咨询', icon: '💡' },
    { value: 'other', label: '其他服务', icon: '🔧' }
  ];

  // 表单验证
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '请输入您的姓名';
    } else if (formData.name.length < 2) {
      newErrors.name = '姓名至少需要2个字符';
    }

    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱地址';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    if (formData.phone && !/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的手机号码';
    }

    if (!formData.message.trim()) {
      newErrors.message = '请输入咨询内容';
    } else if (formData.message.length < 10) {
      newErrors.message = '咨询内容至少需要10个字符';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 处理输入变化
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // 实时清除错误
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // 处理表单提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'energy-management',
        message: ''
      });
      
      // 3秒后清除成功消息
      setTimeout(() => setSubmitStatus(''), 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 输入字段组件
  const InputField = ({ name, label, type = 'text', required = false, placeholder }) => (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-800 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <motion.input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField('')}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 ${
          errors[name] 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
            : focusedField === name
            ? 'border-blue-500 focus:border-blue-500 focus:ring-blue-200'
            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
        } focus:outline-none focus:ring-2 bg-white`}
        required={required}
      />
      <AnimatePresence>
        {errors[name] && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 text-sm mt-1"
          >
            {errors[name]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 页面标题 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            联系我们
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们期待与您合作，共同实现能源管理的数字化转型和碳中和目标
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 联系表单 */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">在线咨询</h2>
            <motion.form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  name="name"
                  label="姓名"
                  required
                  placeholder="请输入您的姓名"
                />
                <InputField
                  name="company"
                  label="企业名称"
                  placeholder="请输入企业名称"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  name="email"
                  label="邮箱地址"
                  type="email"
                  required
                  placeholder="请输入邮箱地址"
                />
                <InputField
                  name="phone"
                  label="联系电话"
                  type="tel"
                  placeholder="请输入联系电话"
                />
              </div>

              {/* 服务类型选择 */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  服务类型 <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <motion.label
                      key={service.value}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        formData.service === service.value
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-gray-300 hover:border-blue-300 bg-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service.value}
                        checked={formData.service === service.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="text-xl mr-3">{service.icon}</span>
                      <span className="text-sm font-medium text-gray-800">{service.label}</span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* 咨询内容 */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  咨询内容 <span className="text-red-500">*</span>
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  placeholder="请详细描述您的需求或问题..."
                  rows="5"
                  className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                      : focusedField === 'message'
                      ? 'border-blue-500 focus:border-blue-500 focus:ring-blue-200'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                  } focus:outline-none focus:ring-2 bg-white`}
                  required
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 提交按钮 */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    提交中...
                  </div>
                ) : (
                  '提交咨询'
                )}
              </motion.button>

              {/* 状态消息 */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`mt-4 p-4 rounded-lg text-center ${
                      submitStatus === 'success'
                        ? 'bg-green-100 text-green-700 border-2 border-green-200'
                        : 'bg-red-100 text-red-700 border-2 border-red-200'
                    }`}
                  >
                    {submitStatus === 'success' 
                      ? '✅ 感谢您的咨询！我们将在24小时内与您联系。'
                      : '❌ 提交失败，请稍后重试。'
                    }
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>

          {/* 联系信息 */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">联系方式</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">公司地址</h3>
                    <p className="text-gray-600">青岛市市南区湛山三路6号</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">联系电话</h3>
                    <p className="text-gray-600">13061333195（刘先生）</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">邮箱地址</h3>
                    <p className="text-gray-600">contact@emuson.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">在线咨询</h3>
                    <p className="text-gray-600">工作日 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 关注我们 */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">关注我们</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">📱</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800">企业微信</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">📺</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800">公众号</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OptimizedContactForm;
