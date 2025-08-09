import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const solutions = [
    {
      id: 'energy-management',
      icon: '⚡',
      title: '能源管理系统',
      subtitle: '智能调度，能效优化',
      description: '通过全链路数据采集和AI算法调度，实现企业能耗的实时监测与智能优化，显著降低运营成本。',
      highlights: [
        {
          title: '全链路数据采集',
          description: '对接电表、水表、设备传感器，实现能耗数据实时可视化'
        },
        {
          title: '智能算法调度',
          description: '通过AI模型优化设备运行策略，减少无效能耗'
        },
        {
          title: '移动端监控',
          description: '支持手机APP实时查看能耗报表与异常预警'
        }
      ],
      applications: ['工业厂区', '商业楼宇', '园区综合体'],
      value: '降低企业能耗成本15-30%'
    },
    {
      id: 'carbon-management',
      icon: '🌱',
      title: '能碳管理系统',
      subtitle: '碳足迹追踪，合规管理',
      description: '覆盖Scope 1/2/3全范围的碳足迹核算，自动生成合规报告，让碳管理从合规成本变为降本增效机会。',
      highlights: [
        {
          title: '碳足迹核算',
          description: '覆盖Scope 1/2/3全范围，符合ISO 14064、GHG Protocol标准'
        },
        {
          title: '合规管理',
          description: '自动生成碳披露报告（CDP）、ESG评级数据，适配政策更新'
        },
        {
          title: '减排模拟',
          description: '通过AI预测不同减排方案的效果，提供最优路径建议'
        }
      ],
      applications: ['制造业', '能源行业', '服务业'],
      value: '让碳管理从合规成本变为降本增效机会'
    },
    {
      id: 'ai-optimization',
      icon: '🤖',
      title: 'AI场景优化',
      subtitle: '预测维护，动态调整',
      description: '基于机器学习的设备预测性维护和负荷预测，实现能源策略的动态调整，提升设备运行效率。',
      highlights: [
        {
          title: '数据训练',
          description: '基于历史能耗、设备状态、环境参数构建预测模型'
        },
        {
          title: '动态优化',
          description: '实时调整设备运行参数（如空调负荷、生产线节拍）'
        },
        {
          title: '故障预警',
          description: '通过异常数据识别潜在设备故障，降低停机损失'
        }
      ],
      applications: ['制造业', '数据中心', '智能建筑'],
      value: '某制造企业通过AI优化，能耗降低18%，设备维护成本减少25%'
    }
  ];

  return (
    <section className="solutions-section" id="solutions-detail">
      <div className="solutions-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          解决方案详情
        </motion.h2>

        {solutions.map((solution, index) => (
          <motion.div
            key={solution.id}
            className="solution-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="solution-header">
              <div className="solution-icon">
                <span style={{ fontSize: '2rem' }}>{solution.icon}</span>
              </div>
              <div>
                <h3 className="solution-title">{solution.title}</h3>
                <p className="text-lg text-gray-600">{solution.subtitle}</p>
              </div>
            </div>

            <p className="text-lg mb-6">{solution.description}</p>

            <div className="solution-features">
              {solution.highlights.map((highlight, highlightIndex) => (
                <div key={highlightIndex} className="feature-item">
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
              <div className="flex flex-wrap gap-4">
                <div>
                  <h4 className="font-semibold text-primary-blue mb-2">应用场景</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app, appIndex) => (
                      <span key={appIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-green mb-2">价值体现</h4>
                  <p className="text-sm text-gray-700">{solution.value}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;