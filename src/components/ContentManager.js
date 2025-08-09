import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContentManager = () => {
  const [contents, setContents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    type: 'news',
    content: '',
    status: 'draft'
  });

  const contentTypes = [
    { value: 'news', label: '新闻动态', icon: '📰' },
    { value: 'case', label: '案例展示', icon: '📊' },
    { value: 'service', label: '服务介绍', icon: '⚡' }
  ];

  useEffect(() => {
    const savedContents = localStorage.getItem('emuson-cms-contents');
    if (savedContents) {
      setContents(JSON.parse(savedContents));
    }
  }, []);

  const saveToStorage = (newContents) => {
    localStorage.setItem('emuson-cms-contents', JSON.stringify(newContents));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newContent = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const newContents = [...contents, newContent];
    setContents(newContents);
    saveToStorage(newContents);
    setShowForm(false);
    setFormData({ title: '', type: 'news', content: '', status: 'draft' });
  };

  const handleDelete = (id) => {
    if (window.confirm('确定要删除这个内容吗？')) {
      const newContents = contents.filter(item => item.id !== id);
      setContents(newContents);
      saveToStorage(newContents);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">内容管理系统</h1>
        <motion.button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          + 新建内容
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contents.map((content) => (
          <motion.div
            key={content.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">
                {contentTypes.find(t => t.value === content.type)?.icon || '📄'}
              </span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {content.status === 'draft' ? '草稿' : '已发布'}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{content.title}</h3>
            <p className="text-gray-600 text-sm mb-4">
              {content.content.substring(0, 100)}...
            </p>
            
            <div className="text-xs text-gray-500 mb-4">
              创建于: {new Date(content.createdAt).toLocaleDateString()}
            </div>
            
            <button
              onClick={() => handleDelete(content.id)}
              className="w-full bg-red-100 text-red-600 px-3 py-1 rounded text-sm hover:bg-red-200"
            >
              删除
            </button>
          </motion.div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">新建内容</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">标题</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">类型</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {contentTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.icon} {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">内容</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows="6"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  创建
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                >
                  取消
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentManager;
