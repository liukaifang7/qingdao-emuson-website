import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Advantages = () => {
  const [activeTab, setActiveTab] = useState('architecture');

  const techArchitecture = [
    {
      layer: '数据采集层',
      description: 'IoT设备接入、传感器数据采集、边缘计算处理',
      icon: '📡',
      features: ['智能电表/水表数据采集', '工业设备传感器集成', '边缘计算网关', '5G/4G无线传输']
    },
    {
      layer: 'AI算法层',
      description: '机器学习模型、深度学习算法、预测分析引擎',
      icon: '🧠',
      features: ['深度学习预测模型', '强化学习优化算法', '时间序列分析', '异常检测算法']
    },
    {
      layer: '应用服务层',
      description: '微服务架构、API接口、业务逻辑处理',
      icon: '⚙️',
      features: ['能源管理系统(EMS)', '碳管理平台(CMP)', '虚拟电厂(VPP)调度', '需求响应管理']
    },
    {
      layer: '用户终端层',
      description: 'Web端、移动端、大屏展示、报表系统',
      icon: '💻',
      features: ['Web管理平台', '移动端应用', '数据大屏可视化', 'API接口服务']
    }
  ];

  const techTags = [
    { name: '物联网（IoT）数据采集技术', category: 'data' },
    { name: '机器学习（ML）预测模型', category: 'ai' },
    { name: '大数据实时分析引擎', category: 'data' },
    { name: '区块链碳数据存证', category: 'blockchain' },
    { name: '边缘计算技术', category: 'edge' },
    { name: '云计算平台', category: 'cloud' },
    { name: '微服务架构', category: 'architecture' },
    { name: 'API网关', category: 'api' }
  ];

  const teamStats = [
    { number: '15+', label: '核心团队成员', icon: '👥', color: '#4ECDC4' },
    { number: '8', label: '能源领域专家', icon: '⚡', color: '#3E92CC' },
    { number: '7', label: 'AI算法专家', icon: '🤖', color: '#0A2463' },
    { number: '12', label: '专利与软著', icon: '📜', color: '#4ECDC4' }
  ];

  const achievements = [
    { title: '技术专利', value: '8项', description: '发明专利占比65%' },
    { title: '软件著作权', value: '4项', description: '核心系统软件' },
    { title: '行业解决方案', value: '10+', description: '覆盖多个行业' },
    { title: '客户满意度', value: '95%', description: '持续服务保障' }
  ];

  return (
    <section className="advantages-section" id="advantages">
      <div className="advantages-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          技术优势
        </motion.h2>

        {/* 标签页导航 */}
        <motion.div 
          className="tab-navigation"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
              onClick={() => setActiveTab('architecture')}
            >
              <span className="tab-icon">🏗️</span>
              技术架构
            </button>
            <button
              className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
              onClick={() => setActiveTab('tech')}
            >
              <span className="tab-icon">🔧</span>
              核心技术
            </button>
            <button
              className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`}
              onClick={() => setActiveTab('team')}
            >
              <span className="tab-icon">👥</span>
              研发实力
            </button>
          </div>
        </motion.div>

        {/* 技术架构展示 */}
        {activeTab === 'architecture' && (
          <motion.div 
            className="tech-architecture"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="architecture-header">
              <h3 className="text-2xl font-bold mb-4">云边端一体化技术架构</h3>
              <p className="mb-6 opacity-90">
                采用"数据采集层→AI算法层→应用服务层→用户终端层"的全栈技术架构，
                突出"云边端一体化"技术优势，实现数据的高效处理与智能分析。
              </p>
            </div>
            
            <div className="architecture-layers">
              {techArchitecture.map((layer, index) => (
                <motion.div
                  key={index}
                  className="layer-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="layer-header">
                    <div className="layer-icon">
                      <span className="text-3xl">{layer.icon}</span>
                    </div>
                    <div className="layer-info">
                      <h4 className="layer-title">{layer.layer}</h4>
                      <p className="layer-desc">{layer.description}</p>
                    </div>
                  </div>
                  <div className="layer-features">
                    {layer.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-tag">
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 架构连接线动画 */}
            <div className="architecture-connections">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="connection-line"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* 核心技术标签 */}
        {activeTab === 'tech' && (
          <motion.div 
            className="tech-stack-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="tech-header">
              <h3 className="text-2xl font-bold text-primary-blue mb-6">核心技术栈</h3>
              <p className="text-gray-600 mb-8">
                基于前沿技术构建的完整技术生态，为能源管理提供全方位的技术支撑
              </p>
            </div>
            
            <div className="tech-categories">
              <div className="category-group">
                <h4 className="category-title">数据与AI</h4>
                <div className="tech-tags">
                  {techTags.filter(tag => ['data', 'ai'].includes(tag.category)).map((tag, index) => (
                    <motion.span
                      key={index}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tag.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="category-group">
                <h4 className="category-title">基础设施</h4>
                <div className="tech-tags">
                  {techTags.filter(tag => ['blockchain', 'edge', 'cloud'].includes(tag.category)).map((tag, index) => (
                    <motion.span
                      key={index}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tag.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="category-group">
                <h4 className="category-title">架构设计</h4>
                <div className="tech-tags">
                  {techTags.filter(tag => ['architecture', 'api'].includes(tag.category)).map((tag, index) => (
                    <motion.span
                      key={index}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tag.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 研发实力 */}
        {activeTab === 'team' && (
          <motion.div 
            className="team-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="team-header">
              <h3 className="text-2xl font-bold text-primary-blue mb-6">研发实力</h3>
              <p className="text-gray-600 mb-8">
                汇聚行业精英，构建强大的技术研发团队
              </p>
            </div>

            {/* 团队统计 */}
            <div className="team-stats">
              {teamStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="stat-icon" style={{ backgroundColor: stat.color }}>
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 团队背景 */}
            <motion.div 
              className="team-background"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="background-card">
                <h4 className="font-semibold text-primary-blue mb-4">团队背景</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  核心团队由能源领域资深专家和AI算法专家组成，拥有丰富的行业经验和前沿技术能力。
                  团队成员来自清华大学、中科院等知名院校，在能源管理、碳减排、人工智能等领域拥有深厚的技术积累。
                </p>
                <div className="expertise-tags">
                  <span className="expertise-tag">能源管理</span>
                  <span className="expertise-tag">碳减排</span>
                  <span className="expertise-tag">人工智能</span>
                  <span className="expertise-tag">物联网</span>
                </div>
              </div>
            </motion.div>

            {/* 成就展示 */}
            <motion.div 
              className="achievements-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-xl font-bold text-primary-blue mb-6">技术成就</h4>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="achievement-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="achievement-value">{achievement.value}</div>
                    <div className="achievement-title">{achievement.title}</div>
                    <div className="achievement-desc">{achievement.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* 技术优势总结 */}
        <motion.div 
          className="tech-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <div className="summary-icon">🚀</div>
            <h3 className="text-xl font-bold mb-3">技术壁垒</h3>
            <p className="opacity-90">
              通过"技术可视化+案例数据化+场景具象化"，突出公司在能源管理领域的AI技术壁垒，
              强化"降本、合规、增效"的客户价值，塑造"高科技、可信赖、前瞻性"的品牌形象。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;