import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 预设的常见问题和回答
  const faqData = {
    '能源管理系统': {
      answer: '我们的能源管理系统提供实时监测、智能调度和能效优化功能，可以帮助企业降低能耗成本15-30%。',
      suggestions: ['了解技术架构', '查看案例展示', '预约演示']
    },
    '能碳管理': {
      answer: '能碳管理系统覆盖Scope 1/2/3全范围碳足迹核算，自动生成合规报告，让碳管理从合规成本变为降本增效机会。',
      suggestions: ['查看解决方案', '了解技术优势', '联系咨询']
    },
    'AI优化': {
      answer: '基于机器学习的设备预测性维护和负荷预测，实现能源策略的动态调整，某制造企业通过AI优化，能耗降低18%。',
      suggestions: ['查看技术架构', '了解案例', '预约演示']
    },
    '价格': {
      answer: '我们的解决方案根据企业规模和需求定制，提供灵活的定价方案。建议您联系我们的销售团队获取详细报价。',
      suggestions: ['预约咨询', '查看案例', '了解服务']
    },
    '实施周期': {
      answer: '标准实施周期为3-6个月，具体时间取决于项目复杂度和企业规模。我们提供快速部署和定制化开发服务。',
      suggestions: ['查看实施流程', '了解服务', '预约咨询']
    }
  };

  const suggestions = [
    '了解能源管理系统',
    '查看技术优势', 
    '预约演示',
    '联系咨询',
    '查看案例展示'
  ];

  // 初始化欢迎消息
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          type: 'bot',
          content: '您好！我是云归谷科技的AI助手，很高兴为您服务。我可以帮您了解我们的能源管理解决方案、技术优势，或者为您预约演示。请问有什么可以帮助您的吗？',
          suggestions: suggestions.slice(0, 3)
        }
      ]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;

    // 添加用户消息
    const userMessage = {
      type: 'user',
      content: message,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // 模拟AI回复延迟
    setTimeout(() => {
      let botResponse = {
        type: 'bot',
        content: '',
        suggestions: []
      };

      // 简单的关键词匹配
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('能源管理') || lowerMessage.includes('能耗')) {
        botResponse.content = faqData['能源管理系统'].answer;
        botResponse.suggestions = faqData['能源管理系统'].suggestions;
      } else if (lowerMessage.includes('碳') || lowerMessage.includes('减排')) {
        botResponse.content = faqData['能碳管理'].answer;
        botResponse.suggestions = faqData['能碳管理'].suggestions;
      } else if (lowerMessage.includes('ai') || lowerMessage.includes('智能')) {
        botResponse.content = faqData['AI优化'].answer;
        botResponse.suggestions = faqData['AI优化'].suggestions;
      } else if (lowerMessage.includes('价格') || lowerMessage.includes('费用')) {
        botResponse.content = faqData['价格'].answer;
        botResponse.suggestions = faqData['价格'].suggestions;
      } else if (lowerMessage.includes('时间') || lowerMessage.includes('周期')) {
        botResponse.content = faqData['实施周期'].answer;
        botResponse.suggestions = faqData['实施周期'].suggestions;
      } else {
        botResponse.content = '感谢您的咨询！我建议您可以了解我们的核心解决方案，或者直接联系我们的专业团队获取更详细的信息。';
        botResponse.suggestions = ['预约咨询', '查看解决方案', '了解技术优势'];
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  return (
    <>
      {/* 悬浮按钮 */}
      <motion.button
        className="ai-assistant-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="ai-icon">🤖</span>
        <span className="ai-label">AI助手</span>
      </motion.button>

      {/* 聊天窗口 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="ai-chat-window"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* 聊天头部 */}
            <div className="chat-header">
              <div className="chat-title">
                <span className="ai-avatar">🤖</span>
                <div>
                  <h3>云归谷AI助手</h3>
                  <span className="status">在线</span>
                </div>
              </div>
              <button 
                className="close-button"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* 消息区域 */}
            <div className="chat-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`message ${message.type}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="message-content">
                    {message.content}
                  </div>
                  {message.suggestions && (
                    <div className="message-suggestions">
                      {message.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          className="suggestion-button"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  className="message bot typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* 输入区域 */}
            <div className="chat-input">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                placeholder="输入您的问题..."
                className="message-input"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                className="send-button"
                disabled={!inputValue.trim()}
              >
                <span>发送</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant; 