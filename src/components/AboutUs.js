import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const milestones = [
    {
      year: '2020',
      title: '公司成立',
      description: '青岛云归谷科技有限公司正式成立，专注于能源管理与碳减排技术',
      icon: '🚀'
    },
    {
      year: '2021',
      title: '技术突破',
      description: '成功开发第一代能源管理系统，获得多项技术专利',
      icon: '💡'
    },
    {
      year: '2022',
      title: '市场拓展',
      description: '服务客户超过20家，涵盖制造业、商业地产等多个行业',
      icon: '📈'
    },
    {
      year: '2023',
      title: 'AI升级',
      description: '推出AI驱动的能碳管理系统，实现智能化能源优化',
      icon: '🤖'
    },
    {
      year: '2024',
      title: '行业领先',
      description: '成为能源数字化转型领域的领先企业，累计减排15,000吨',
      icon: '🏆'
    }
  ];

  const teamMembers = [
    {
      name: '张博士',
      title: '首席技术官',
      background: '清华大学能源系统博士，15年能源管理经验',
      expertise: '能源系统优化、AI算法',
      avatar: '👨‍💼'
    },
    {
      name: '李博士',
      title: '首席科学家',
      background: '中科院计算所博士，机器学习专家',
      expertise: '深度学习、预测算法',
      avatar: '👨‍🔬'
    },
    {
      name: '王总',
      title: '首席执行官',
      background: '能源行业资深专家，20年企业管理经验',
      expertise: '战略规划、市场拓展',
      avatar: '👨‍💼'
    }
  ];

  return (
    <section className="about-section" id="about" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      padding: '4rem 0'
    }}>
      <div className="about-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
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
            关于我们
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            以科技创新驱动能源革命，用数据智能构建低碳未来
          </p>
        </motion.div>

        <div className="about-content" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* 公司简介 */}
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0'
            }}
          >
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#0A2463',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '1.5rem' }}>🏢</span>
              公司简介
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: '1.7',
              marginBottom: '1.5rem'
            }}>
              青岛云归谷科技有限公司是一家专注于能源管理与碳减排技术的高科技企业。
              我们以"科技赋能能源革新，数据驱动低碳未来"为使命，致力于通过AI技术
              为企业提供智能化的能源管理解决方案。
            </p>
            <p style={{
              fontSize: '1rem',
              color: '#475569',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              公司核心团队由能源领域资深专家和AI算法专家组成，拥有丰富的行业经验
              和前沿技术能力。我们通过"云边端一体化"技术架构，为客户提供从数据采集
              到智能分析的完整解决方案。
            </p>

            {/* 统计数据 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                borderRadius: '15px',
                border: '1px solid #bae6fd'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#0A2463',
                  marginBottom: '0.5rem'
                }}>
                  5年+
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  fontWeight: '500'
                }}>
                  行业经验
                </div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                borderRadius: '15px',
                border: '1px solid #bae6fd'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#0A2463',
                  marginBottom: '0.5rem'
                }}>
                  50+
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  fontWeight: '500'
                }}>
                  成功案例
                </div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                borderRadius: '15px',
                border: '1px solid #bae6fd'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#0A2463',
                  marginBottom: '0.5rem'
                }}>
                  15+
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  fontWeight: '500'
                }}>
                  核心团队
                </div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                borderRadius: '15px',
                border: '1px solid #bae6fd'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#0A2463',
                  marginBottom: '0.5rem'
                }}>
                  12
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  fontWeight: '500'
                }}>
                  专利软著
                </div>
              </div>
            </div>
          </motion.div>

          {/* 企业愿景 */}
          <motion.div 
            className="about-vision"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #0A2463 0%, #3E92CC 100%)',
              color: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 15px 35px rgba(10, 36, 99, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
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
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '1.5rem' }}>🎯</span>
              企业愿景
            </h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.7',
              marginBottom: '2rem',
              opacity: '0.95',
              position: 'relative',
              zIndex: 1
            }}>
              成为能源数字化转型的核心驱动力，通过技术创新推动全球能源结构转型，
              助力实现碳中和目标，为人类可持续发展贡献力量。
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  2030
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  opacity: '0.9',
                  fontWeight: '500'
                }}>
                  碳中和目标
                </div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  1000+
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  opacity: '0.9',
                  fontWeight: '500'
                }}>
                  服务企业
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 发展历程 */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0'
          }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#0A2463',
            marginBottom: '2rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>📅</span>
            发展历程
          </h3>
          <div style={{ position: 'relative' }}>
            {/* 时间线 */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '4px',
              height: '100%',
              background: 'linear-gradient(to bottom, #0A2463, #3E92CC)',
              borderRadius: '2px'
            }}></div>
            
            <div style={{ position: 'relative' }}>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '3rem',
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                  }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div style={{
                    width: '45%',
                    padding: index % 2 === 0 ? '0 2rem 0 0' : '0 0 0 2rem',
                    textAlign: index % 2 === 0 ? 'right' : 'left'
                  }}>
                    <div style={{
                      background: 'white',
                      padding: '1.5rem',
                      borderRadius: '15px',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      border: '2px solid #e2e8f0',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        [index % 2 === 0 ? 'right' : 'left']: '-10px',
                        width: '0',
                        height: '0',
                        borderTop: '10px solid transparent',
                        borderBottom: '10px solid transparent',
                        [index % 2 === 0 ? 'borderLeft' : 'borderRight']: '10px solid #e2e8f0'
                      }}></div>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#0A2463',
                        marginBottom: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'
                      }}>
                        <span style={{ fontSize: '1.2rem' }}>{milestone.icon}</span>
                        {milestone.year}
                      </div>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: '#0A2463',
                        marginBottom: '0.5rem'
                      }}>
                        {milestone.title}
                      </h4>
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#64748b',
                        lineHeight: '1.5'
                      }}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* 时间线节点 */}
                  <div style={{
                    width: '10%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      background: '#4ECDC4',
                      borderRadius: '50%',
                      border: '4px solid white',
                      boxShadow: '0 4px 15px rgba(78, 205, 196, 0.4)',
                      position: 'relative',
                      zIndex: 10
                    }}></div>
                  </div>
                  
                  <div style={{ width: '45%' }}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 核心团队 */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0'
          }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#0A2463',
            marginBottom: '2rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>👥</span>
            核心团队
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #0A2463 0%, #3E92CC 100%)',
                  borderRadius: '50%',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'white',
                  fontWeight: '700'
                }}>
                  {member.avatar}
                </div>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#0A2463',
                  marginBottom: '0.5rem'
                }}>
                  {member.name}
                </h4>
                <p style={{
                  fontSize: '1rem',
                  color: '#4ECDC4',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {member.title}
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  lineHeight: '1.5',
                  marginBottom: '1rem'
                }}>
                  {member.background}
                </p>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#94a3b8',
                  background: '#f8fafc',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0'
                }}>
                  <strong style={{ color: '#0A2463' }}>专长领域：</strong>{member.expertise}
                </div>
              </motion.div>
            ))}
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

export default AboutUs;