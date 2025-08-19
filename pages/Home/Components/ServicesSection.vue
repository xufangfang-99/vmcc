<template>
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">我们的优质服务</h2>
        <p class="section-subtitle">旨在提升您组织的人力资本战略的综合人才解决方案</p>
      </div>

      <div class="services-grid">
        <!-- 服务卡片 -->
        <div
          v-for="service in services"
          :key="service.id"
          class="service-card"
        >
          <div class="service-icon">
            <div :class="`icon-${service.icon}`"></div>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li
              v-for="(feature, index) in service.features"
              :key="index"
            >
              {{ feature }}
            </li>
          </ul>
          <a
            :href="service.link"
            class="service-link"
          >
            了解更多 →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // 服务数据
  const services = ref([
    {
      id: 1,
      icon: 'search',
      title: '高管猎头',
      description: '为各行各业的C级职位和高级领导职位提供优质的高管搜索服务。',
      features: ['高管招聘', '董事会', '高级管理层', '专业知识'],
      link: '/services/executive-search',
    },
    {
      id: 2,
      icon: 'package',
      title: '人力资源外包',
      description: '全面的人力资源外包解决方案，简化您的人力资源运营。',
      features: ['薪资管理', '福利管理', '合规支持', '人力资源技术'],
      link: '/services/hr-outsourcing',
    },
    {
      id: 3,
      icon: 'users',
      title: '人才派遣',
      description: '满足动态业务需求的战略人才部署和劳动力管理解决方案。',
      features: ['灵活的人员配置', '项目团队', '专业技能', '快速部署'],
      link: '/services/talent-deployment',
    },
    {
      id: 4,
      icon: 'chart',
      title: '组织咨询',
      description: '组织发展、人才战略优化的专家咨询服务。',
      features: ['组织设计', '人才战略', '变革管理', '文化转型'],
      link: '/services/organizational-consulting',
    },
    {
      id: 5,
      icon: 'globe',
      title: '跨境支持',
      description: '为全球扩张和跨境运营提供无缝的国际业务支持。',
      features: ['全球合规', '国际招聘', '市场进入', '文化适应'],
      link: '/services/cross-border-support',
    },
    {
      id: 6,
      icon: 'strategy',
      title: '战略咨询',
      description: '实现可持续增长的战略劳动力规划和人才管理咨询服务。',
      features: ['劳动力规划', '继任计划', '人才分析', '绩效优化'],
      link: '/services/strategic-consulting',
    },
  ])
</script>

<style scoped>
  .services-section {
    padding: 100px 0;
    background: var(--tm-bg-secondary);
    transition: background-color 0.3s ease;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 80px;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 1rem;
    color: var(--tm-txt-primary);
    transition: color 0.3s ease;
  }

  .section-subtitle {
    font-size: 1.25rem;
    color: var(--tm-txt-secondary);
    max-width: 600px;
    margin: 0 auto;
    transition: color 0.3s ease;
  }

  /* 服务网格 */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
  }

  .service-card {
    background: var(--tm-bg-primary);
    padding: 40px;
    border-radius: 8px;
    border: 1px solid var(--tm-bd-light);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
    border-color: var(--tm-bd-primary);
  }

  /* 服务图标 */
  .service-icon {
    width: 80px;
    height: 80px;
    background: var(--tm-pri-0);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    transition: background-color 0.3s ease;
  }

  .service-icon div {
    width: 40px;
    height: 40px;
    background-color: white;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
  }

  /* 深色模式下调整图标颜色 */
  .dark .service-icon div {
    background-color: var(--tm-bg-primary);
  }

  .icon-search {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E");
  }
  .icon-package {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'/%3E%3Cpolyline points='3.27 6.96 12 12.01 20.73 6.96'/%3E%3Cline x1='12' y1='22.08' x2='12' y2='12'/%3E%3C/svg%3E");
  }
  .icon-users {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='9' cy='7' r='4'/%3E%3Cpath d='M23 21v-2a4 4 0 0 0-3-3.87'/%3E%3Cpath d='M16 3.13a4 4 0 0 1 0 7.75'/%3E%3C/svg%3E");
  }
  .icon-chart {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cline x1='18' y1='20' x2='18' y2='10'/%3E%3Cline x1='12' y1='20' x2='12' y2='4'/%3E%3Cline x1='6' y1='20' x2='6' y2='14'/%3E%3C/svg%3E");
  }
  .icon-globe {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cline x1='2' y1='12' x2='22' y2='12'/%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/%3E%3C/svg%3E");
  }
  .icon-strategy {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E");
  }

  .service-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--tm-txt-primary);
    transition: color 0.3s ease;
  }

  .service-description {
    color: var(--tm-txt-secondary);
    line-height: 1.6;
    margin-bottom: 24px;
    transition: color 0.3s ease;
  }

  .service-features {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
  }

  .service-features li {
    padding: 8px 0;
    color: var(--tm-txt-secondary);
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
  }

  .service-features li::before {
    content: '•';
    color: var(--tm-pri-0);
    font-weight: bold;
    margin-right: 10px;
  }

  .service-link {
    color: var(--tm-pri-0);
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }

  .service-link:hover {
    gap: 1rem;
    opacity: 0.8;
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .service-card {
      padding: 30px;
    }

    .section-title {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 1.1rem;
    }
  }

  /* 平板适配 */
  @media (min-width: 769px) and (max-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
