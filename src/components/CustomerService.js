import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomerService = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 预设的欢迎消息
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addMessage({
          id: Date.now(),
          text: '您好！欢迎咨询云归谷科技，我是您的专属客服助手。请问有什么可以帮助您的吗？',
          sender: 'bot',
          timestamp: new Date()
        });
      }, 500);
    }
  }, [isOpen, messages.length]);

  const addMessage = (message) => {
    setMessages(prev => [...prev, message]);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    addMessage(userMessage);
    setInputMessage('');
    setIsTyping(true);

    // 模拟客服回复
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      addMessage({
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      });
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateBotResponse = (userMessage) => {
    const responses = {
      '你好': '您好！很高兴为您服务，请问有什么可以帮助您的吗？',
      '联系方式': '您可以通过以下方式联系我们：\n📞 电话：13061333195（刘先生）\n📧 邮箱：contact@emuson.com\n📍 地址：青岛市市南区湛山三路6号',
      '价格': '我们的价格根据具体项目需求而定，建议您留下联系方式，我们的专业顾问会尽快与您联系，为您提供详细的报价方案。',
      '服务': '我们提供以下服务：\n⚡ 能源管理系统\n🌱 碳管理系统\n🤖 AI场景优化\n💡 技术咨询',
      '案例': '我们已成功为多家企业提供服务，包括制造业、商业地产、工业园区等。具体案例可以在我们的案例展示页面查看。',
      '时间': '我们的服务周期根据项目复杂度而定，一般从需求分析到系统上线需要2-6个月。',
      '技术': '我们采用最新的AI技术和物联网技术，确保系统的先进性和可靠性。',
      '合作': '我们欢迎各种形式的合作，包括技术合作、项目合作等。请留下您的具体需求。'
    };

    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    return '感谢您的咨询！为了更好地为您服务，建议您：\n1. 留下联系方式，我们的专业顾问会尽快联系您\n2. 或者直接拨打我们的客服热线：13061333195（刘先生）\n3. 发送邮件至：contact@emuson.com';
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies = [
    '联系方式',
    '服务介绍',
    '价格咨询',
    '成功案例',
    '技术优势'
  ];

  return (
    <>
      {/* 客服按钮 */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>

      {/* 客服聊天窗口 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
          >
            {/* 聊天头部 */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">云归谷科技客服</h3>
                  <p className="text-sm opacity-90">在线为您服务</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs">在线</span>
                </div>
              </div>
            </div>

            {/* 消息区域 */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-800 shadow-sm'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="bg-white text-gray-800 shadow-sm px-4 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </div>

            {/* 快捷回复 */}
            {messages.length === 1 && (
              <div className="p-3 bg-gray-100 border-t">
                <p className="text-xs text-gray-600 mb-2">快捷回复：</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => setInputMessage(reply)}
                      className="text-xs bg-white px-2 py-1 rounded border hover:bg-gray-50"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 输入区域 */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="请输入您的问题..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="2"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  发送
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomerService;
