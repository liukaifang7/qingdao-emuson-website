import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CaseStudy = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const cases = [
    {
      id: 1,
      title: '某大型制造企业',
      industry: '制造业',
      category: 'energy-management',
      painPoint: '能耗成本高，设备维护效率低',
      solution: '部署能源管理系统，实现设备预测性维护',
      results: {
        energyReduction: '18%',
        costReduction: '25%',
        carbonReduction: '1200吨'
      },
      image: '🏭'
    },
    {
      id: 2,
      title: '某商业综合体',
      industry: '商业地产',
      category: 'carbon-management',
      painPoint: '碳排放核算复杂，合规报告困难',
      solution: '建立碳管理平台，自动化合规报告',
      results: {
        energyReduction: '12%',
        costReduction: '15%',
        carbonReduction: '800吨'
      },
      image: '🏢'
    },
    {
      id: 3,
      title: '某工业园区',
      industry: '工业园区',
      category: 'ai-optimization',
      painPoint: '园区能耗管理分散，缺乏统一调度',
      solution: 'AI场景优化，实现园区级能源调度',
      results: {
        energyReduction: '22%',
        costReduction: '30%',
        carbonReduction: '2000吨'
      },
      image: '🏭'
    },
    {
      id: 4,
      title: '某数据中心',
      industry: '数据中心',
      category: 'energy-management',
      painPoint: 'PUE值高，散热效率低',
      solution: '智能散热系统优化，AI负载预测',
      results: {
        energyReduction: '25%',
        costReduction: '28%',
        carbonReduction: '1500吨'
      },
      image: '🖥️'
    },
    {
      id: 5,
      title: '某钢铁企业',
      industry: '钢铁行业',
      category: 'carbon-management',
      painPoint: '碳排放量大，减排路径不清晰',
      solution: '碳排放全链路追踪，减排路径可视化',
      results: {
        energyReduction: '15%',
        costReduction: '20%',
        carbonReduction: '5000吨'
      },
      image: '🏭'
    },
    {
      id: 6,
      title: '某智能建筑',
      industry: '智能建筑',
      category: 'ai-optimization',
      painPoint: '建筑能耗高，用户体验差',
      solution: 'AI驱动的建筑能源管理系统',
      results: {
        energyReduction: '20%',
        costReduction: '18%',
        carbonReduction: '600吨'
      },
      image: '🏗️'
    }
  ];

  const filters = [
    { id: 'all', label: '全部案例', icon: '📊' },
    { id: 'energy-management', label: '能源管理', icon: '⚡' },
    { id: 'carbon-management', label: '碳管理', icon: '🌱' },
    { id: 'ai-optimization', label: 'AI优化', icon: '🤖' }
  ];

  const filteredCases = activeFilter === 'all' 
    ? cases 
    : cases.filter(caseItem => caseItem.category === activeFilter);

  return (
    <section className="cases-section" id="cases" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '4rem 0'
    }}>
      <div className="cases-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* 标题区域 */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title" style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#0A2463',
            marginBottom: '1rem'
          }}>
            成功案例
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            我们的案例展示了如何通过AI驱动的能源管理解决方案，帮助众多企业实现数字化转型和碳中和目标
          </p>
        </motion.div>

        {/* 筛选按钮 */}
        <motion.div 
          className="case-filters"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: activeFilter === filter.id 
                  ? 'linear-gradient(135deg, #0A2463 0%, #3E92CC 100%)'
                  : 'white',
                color: activeFilter === filter.id ? 'white' : '#64748b',
                boxShadow: activeFilter === filter.id 
                  ? '0 8px 25px rgba(10, 36, 99, 0.3)'
                  : '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span style={{ fontSize: '1.1rem' }}>{filter.icon}</span>
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* 案例网格 */}
        <motion.div 
          className="cases-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
          layout
        >
          {filteredCases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              className="case-card"
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid #e2e8f0',
                height: 'fit-content'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* 卡片头部 */}
              <div style={{
                background: 'linear-gradient(135deg, #0A2463 0%, #3E92CC 100%)',
                padding: '2rem',
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* 背景装饰 */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                  animation: 'float 6s ease-in-out infinite'
                }}></div>
                
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {caseItem.image}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  marginBottom: '0.5rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {caseItem.title}
                </h3>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '0.25rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  display: 'inline-block',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {caseItem.industry}
                </div>
              </div>

              {/* 卡片内容 */}
              <div style={{ padding: '2rem' }}>
                {/* 核心痛点 */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#0A2463',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ 
                      color: '#ef4444',
                      fontSize: '1.1rem'
                    }}>💡</span>
                    核心痛点
                  </h4>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: '#64748b', 
                    lineHeight: '1.6',
                    padding: '0.75rem',
                    background: '#fef2f2',
                    borderRadius: '8px',
                    border: '1px solid #fecaca'
                  }}>
                    {caseItem.painPoint}
                  </p>
                </div>

                {/* 解决方案 */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#0A2463',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ 
                      color: '#3b82f6',
                      fontSize: '1.1rem'
                    }}>🔧</span>
                    解决方案
                  </h4>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: '#64748b', 
                    lineHeight: '1.6',
                    padding: '0.75rem',
                    background: '#eff6ff',
                    borderRadius: '8px',
                    border: '1px solid #bfdbfe'
                  }}>
                    {caseItem.solution}
                  </p>
                </div>

                {/* 实施效果 */}
                <div style={{
                  background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  border: '1px solid #bbf7d0'
                }}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#0A2463',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ 
                      color: '#10b981',
                      fontSize: '1.1rem'
                    }}>📈</span>
                    实施效果
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1rem',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      background: 'white',
                      padding: '1rem',
                      borderRadius: '10px',
                      border: '1px solid #d1fae5'
                    }}>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#10b981',
                        marginBottom: '0.25rem'
                      }}>
                        {caseItem.results.energyReduction}
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#64748b',
                        fontWeight: '500'
                      }}>
                        能源减量
                      </div>
                    </div>
                    <div style={{
                      background: 'white',
                      padding: '1rem',
                      borderRadius: '10px',
                      border: '1px solid #d1fae5'
                    }}>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#10b981',
                        marginBottom: '0.25rem'
                      }}>
                        {caseItem.results.costReduction}
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#64748b',
                        fontWeight: '500'
                      }}>
                        成本节约
                      </div>
                    </div>
                    <div style={{
                      background: 'white',
                      padding: '1rem',
                      borderRadius: '10px',
                      border: '1px solid #d1fae5'
                    }}>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#10b981',
                        marginBottom: '0.25rem'
                      }}>
                        {caseItem.results.carbonReduction}
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#64748b',
                        fontWeight: '500'
                      }}>
                        碳减排
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 案例统计 */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #0A2463 0%, #3E92CC 100%)',
            color: 'white',
            padding: '3rem',
            borderRadius: '25px',
            boxShadow: '0 20px 40px rgba(10, 36, 99, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* 背景装饰 */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              animation: 'float 6s ease-in-out infinite'
            }}></div>
            
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: '2rem',
              position: 'relative',
              zIndex: 1
            }}>
              成功案例数据
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              position: 'relative',
              zIndex: 1
            }}>
              <div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  50+
                </div>
                <div style={{
                  fontSize: '1rem',
                  opacity: '0.9',
                  fontWeight: '500'
                }}>
                  成功案例
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  20%
                </div>
                <div style={{
                  fontSize: '1rem',
                  opacity: '0.9',
                  fontWeight: '500'
                }}>
                  平均能源减量
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  15,000吨
                </div>
                <div style={{
                  fontSize: '1rem',
                  opacity: '0.9',
                  fontWeight: '500'
                }}>
                  累计碳减排
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default CaseStudy;
