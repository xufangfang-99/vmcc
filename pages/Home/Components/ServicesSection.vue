<template>
  <section class="services-section">
    <!-- 粒子效果 -->
    <div class="particle-container">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>

    <!-- 波浪效果 -->
    <div class="wave-container">
      <div class="wave"></div>
      <div class="wave"></div>
    </div>

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
    background: var(--tm-bg-primary);
    transition: background-color 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  /* 动态网格背景 */
  .services-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      linear-gradient(var(--tm-pri-0) 1px, transparent 1px),
      linear-gradient(90deg, var(--tm-pri-0) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.03;
    animation: grid-move 20s linear infinite;
    pointer-events: none;
  }

  /* 渐变覆盖层 */
  .services-section::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 50%,
      rgba(var(--tm-pri-0-rgb), 0.05) 0%,
      transparent 50%
    );
    pointer-events: none;
  }

  /* 粒子效果容器 */
  .particle-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 0;
  }

  /* 粒子样式 */
  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--tm-pri-0);
    border-radius: 50%;
    opacity: 0;
    animation: particle-float 10s infinite;
  }

  .particle:nth-child(1) {
    left: 10%;
    animation-delay: 0s;
  }
  .particle:nth-child(2) {
    left: 20%;
    animation-delay: 1s;
  }
  .particle:nth-child(3) {
    left: 30%;
    animation-delay: 2s;
  }
  .particle:nth-child(4) {
    left: 40%;
    animation-delay: 3s;
  }
  .particle:nth-child(5) {
    left: 50%;
    animation-delay: 4s;
  }
  .particle:nth-child(6) {
    left: 60%;
    animation-delay: 5s;
  }
  .particle:nth-child(7) {
    left: 70%;
    animation-delay: 6s;
  }
  .particle:nth-child(8) {
    left: 80%;
    animation-delay: 7s;
  }
  .particle:nth-child(9) {
    left: 90%;
    animation-delay: 8s;
  }
  .particle:nth-child(10) {
    left: 15%;
    animation-delay: 9s;
  }

  /* 波浪效果 */
  .wave-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    pointer-events: none;
    opacity: 0.05;
  }

  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: var(--tm-pri-0);
    animation: wave-move 10s linear infinite;
  }

  .wave:nth-child(1) {
    animation-delay: 0s;
    opacity: 0.7;
    clip-path: polygon(
      0% 60%,
      10% 55%,
      20% 65%,
      30% 58%,
      40% 68%,
      50% 60%,
      60% 70%,
      70% 62%,
      80% 72%,
      90% 65%,
      100% 60%,
      100% 100%,
      0% 100%
    );
  }

  .wave:nth-child(2) {
    animation-delay: -5s;
    opacity: 0.5;
    clip-path: polygon(
      0% 70%,
      10% 68%,
      20% 75%,
      30% 70%,
      40% 78%,
      50% 72%,
      60% 80%,
      70% 75%,
      80% 82%,
      90% 78%,
      100% 70%,
      100% 100%,
      0% 100%
    );
  }

  /* 深色模式调整 */
  .dark .services-section {
    background: var(--tm-bg-secondary);
  }

  .dark .services-section::before {
    opacity: 0.02;
  }

  .dark .services-section::after {
    background: radial-gradient(
      circle at 20% 50%,
      rgba(var(--tm-pri-0-rgb), 0.03) 0%,
      transparent 50%
    );
  }

  .dark .particle {
    opacity: 0.8;
  }

  .dark .wave-container {
    opacity: 0.03;
  }

  /* 动画定义 */
  @keyframes grid-move {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(50px, 50px);
    }
  }

  @keyframes wave-move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 1;
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
    background: linear-gradient(
      135deg,
      var(--tm-bg-primary) 0%,
      rgba(var(--tm-pri-0-rgb), 0.02) 100%
    );
    padding: 40px;
    border-radius: 12px;
    border: 1px solid rgba(var(--tm-pri-0-rgb), 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  /* 卡片内部装饰 */
  .service-card::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(var(--tm-pri-0-rgb), 0.08) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 35px rgba(0, 0, 0, 0.1);
    border-color: rgba(var(--tm-pri-0-rgb), 0.2);
    background: linear-gradient(
      135deg,
      var(--tm-bg-primary) 0%,
      rgba(var(--tm-pri-0-rgb), 0.04) 100%
    );
  }

  .service-card:hover::before {
    opacity: 1;
  }

  /* 深色模式卡片 */
  .dark .service-card {
    background: linear-gradient(
      135deg,
      var(--tm-bg-primary) 0%,
      rgba(var(--tm-pri-0-rgb), 0.03) 100%
    );
    border-color: rgba(var(--tm-pri-0-rgb), 0.15);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .dark .service-card:hover {
    background: linear-gradient(
      135deg,
      var(--tm-bg-primary) 0%,
      rgba(var(--tm-pri-0-rgb), 0.05) 100%
    );
    box-shadow: 0 8px 35px rgba(0, 0, 0, 0.3);
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
    .services-section {
      padding: 60px 0;
    }

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
