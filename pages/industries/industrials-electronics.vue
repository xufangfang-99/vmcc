<template>
  <div class="industry-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-container">
        <h1 class="page-title">{{ industryName }}</h1>
        <p class="page-description">{{ industryDescription }}</p>
        <div class="breadcrumb">
          <NuxtLink
            to="/"
            class="breadcrumb-link"
            @click="handleHomeClick"
          >
            Home
          </NuxtLink>
          <span class="separator">/</span>
          <NuxtLink
            to="/industries"
            class="breadcrumb-link"
          >
            Industries
          </NuxtLink>
          <span class="separator">/</span>
          <span class="current">{{ industryName }}</span>
        </div>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <div class="content-container">
        <!-- 侧边导航 -->
        <nav class="side-navigation">
          <h2 class="nav-title">{{ industryName }} Services</h2>
          <ul class="nav-list">
            <li
              v-for="service in services"
              :key="service.name"
              class="nav-item"
            >
              <a
                :href="service.anchor"
                class="nav-link"
              >
                {{ service.name }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- 主要内容 -->
        <div class="main-section">
          <!-- 行业概述 -->
          <section
            id="overview"
            class="content-section"
          >
            <h2>Industry Overview</h2>
            <div class="content-card">
              <p>{{ industryOverview }}</p>
            </div>
          </section>

          <!-- 我们的服务 -->
          <section
            id="services"
            class="content-section"
          >
            <h2>Our Services</h2>
            <div class="services-grid">
              <div
                v-for="service in services"
                :key="service.name"
                class="service-card"
              >
                <div class="service-icon">
                  <div class="icon-placeholder">{{ service.name.charAt(0) }}</div>
                </div>
                <h3>{{ service.name }}</h3>
                <p>{{ service.description }}</p>
              </div>
            </div>
          </section>

          <!-- 案例研究 -->
          <section
            id="case-studies"
            class="content-section"
          >
            <h2>Case Studies</h2>
            <div class="case-studies-grid">
              <div
                v-for="study in caseStudies"
                :key="study.title"
                class="case-study-card"
              >
                <h3>{{ study.title }}</h3>
                <p class="case-client">{{ study.client }}</p>
                <p>{{ study.description }}</p>
                <div class="case-results">
                  <span
                    v-for="result in study.results"
                    :key="result"
                    class="result-tag"
                  >
                    {{ result }}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- 联系我们 -->
          <section
            id="contact"
            class="content-section"
          >
            <h2>Get Started</h2>
            <div class="contact-card">
              <h3>Ready to transform your {{ industryName.toLowerCase() }} business?</h3>
              <p>Contact our experts to discuss how we can help you achieve your goals.</p>
              <div class="contact-actions">
                <NuxtLink
                  to="/contact"
                  class="btn btn-primary"
                >
                  Schedule Consultation
                </NuxtLink>
                <a
                  href="mailto:contact@vmmc.com"
                  class="btn btn-secondary"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
  import { useMenuHandler } from '~/composables/useMenuHandler'
  // 获取统一的菜单处理方法
  const { resetToHome } = useMenuHandler()

  // 处理 Home 点击，使用统一的重置方法
  const handleHomeClick = resetToHome

  // 处理 Home 点击，使用统一的重置方法
  // 页面数据 - 每个静态页面都可以自定义这些内容
  const industryName = 'Aerospace & Defense'
  const industryDescription =
    'Leading aerospace and defense companies to operational excellence and strategic growth'

  const industryOverview = `The aerospace and defense industry faces unique challenges including stringent regulatory requirements, complex supply chains, and the need for continuous innovation. Our team brings deep expertise in helping organizations navigate these complexities while driving growth and efficiency.`

  // 服务列表
  const services = [
    {
      name: 'Strategy & Planning',
      description: 'Strategic roadmaps for sustainable growth and market positioning',
      anchor: '#strategy',
    },
    {
      name: 'Operations Excellence',
      description: 'Streamline operations and improve efficiency across the value chain',
      anchor: '#operations',
    },
    {
      name: 'Supply Chain Optimization',
      description: 'End-to-end supply chain transformation and risk management',
      anchor: '#supply-chain',
    },
    {
      name: 'Digital Transformation',
      description: 'Leverage technology to enhance capabilities and customer experience',
      anchor: '#digital',
    },
    {
      name: 'Regulatory Compliance',
      description: 'Navigate complex regulatory environments with confidence',
      anchor: '#compliance',
    },
    {
      name: 'Talent & Organization',
      description: 'Build high-performing teams and organizational capabilities',
      anchor: '#talent',
    },
  ]

  // 案例研究
  const caseStudies = [
    {
      title: 'Global Defense Contractor Transformation',
      client: 'Fortune 500 Defense Company',
      description:
        'Implemented comprehensive digital transformation strategy resulting in significant operational improvements.',
      results: ['25% Cost Reduction', '40% Faster Delivery', 'Enhanced Security'],
    },
    {
      title: 'Aerospace Supply Chain Optimization',
      client: 'Leading Aerospace Manufacturer',
      description: 'Redesigned supply chain operations to improve resilience and reduce costs.',
      results: ['30% Inventory Reduction', '95% On-time Delivery', 'Risk Mitigation'],
    },
  ]

  // SEO 设置
  useHead({
    title: `${industryName} Solutions - VMMC`,
    meta: [
      {
        name: 'description',
        content: `${industryDescription}. Expert consulting services for ${industryName.toLowerCase()} companies.`,
      },
      {
        name: 'keywords',
        content: `${industryName.toLowerCase()}, consulting, strategy, operations, digital transformation`,
      },
    ],
  })

  // 页面配置
  definePageMeta({
    layout: 'default',
  })
</script>

<style scoped>
  .industry-page {
    min-height: 100vh;
    background: var(--tm-bg-primary);
  }

  .page-header {
    background: var(--tm-bg-secondary);
    padding: 3rem 0;
    border-bottom: 1px solid var(--tm-bd-primary);
  }

  .header-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .page-title {
    font-size: 3.5rem;
    font-weight: 300;
    margin: 0 0 1rem 0;
    color: var(--tm-txt-primary);
    letter-spacing: -0.02em;
  }

  .page-description {
    font-size: 1.25rem;
    color: var(--tm-txt-secondary);
    margin: 0 0 1.5rem 0;
    max-width: 600px;
    line-height: 1.6;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
  }

  .breadcrumb-link {
    color: var(--tm-txt-light);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .breadcrumb-link:hover {
    color: var(--tm-accent-primary);
  }

  .separator {
    color: var(--tm-txt-light);
    opacity: 0.5;
  }

  .current {
    color: var(--tm-accent-primary);
    font-weight: 500;
  }

  .main-content {
    padding: 4rem 0;
  }

  .content-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 4rem;
  }

  .side-navigation {
    position: sticky;
    top: 2rem;
    height: fit-content;
    background: var(--tm-bg-card);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--tm-bd-card);
  }

  .nav-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 1.5rem 0;
    color: var(--tm-txt-primary);
  }

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-item {
    margin-bottom: 0.5rem;
  }

  .nav-link {
    display: block;
    padding: 0.75rem 1rem;
    color: var(--tm-txt-secondary);
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.2s ease;
    font-size: 0.875rem;
  }

  .nav-link:hover {
    background: var(--tm-bg-hover);
    color: var(--tm-txt-primary);
  }

  .main-section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .content-section {
    scroll-margin-top: 100px;
  }

  .content-section h2 {
    font-size: 2.5rem;
    font-weight: 300;
    margin: 0 0 2rem 0;
    color: var(--tm-txt-primary);
    border-bottom: 2px solid var(--tm-accent-primary);
    padding-bottom: 1rem;
  }

  .content-card {
    background: var(--tm-bg-card);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--tm-bd-card);
  }

  .content-card p {
    color: var(--tm-txt-secondary);
    line-height: 1.7;
    font-size: 1.125rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .service-card {
    background: var(--tm-bg-card);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--tm-bd-card);
    transition: all 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--tm-shadow-hover);
  }

  .service-icon {
    margin-bottom: 1.5rem;
  }

  .icon-placeholder {
    width: 60px;
    height: 60px;
    background: var(--tm-accent-primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .service-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    color: var(--tm-txt-primary);
  }

  .service-card p {
    color: var(--tm-txt-secondary);
    line-height: 1.6;
  }

  .case-studies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
  }

  .case-study-card {
    background: var(--tm-bg-card);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--tm-bd-card);
    border-left: 4px solid var(--tm-accent-primary);
  }

  .case-study-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    color: var(--tm-txt-primary);
  }

  .case-client {
    color: var(--tm-accent-primary);
    font-weight: 500;
    margin: 0 0 1rem 0;
    font-size: 0.875rem;
  }

  .case-study-card > p {
    color: var(--tm-txt-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .case-results {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .result-tag {
    background: var(--tm-accent-light);
    color: var(--tm-accent-primary);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .contact-card {
    background: var(--tm-bg-card);
    padding: 3rem;
    border-radius: 12px;
    border: 1px solid var(--tm-bd-card);
    text-align: center;
  }

  .contact-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    color: var(--tm-txt-primary);
  }

  .contact-card p {
    color: var(--tm-txt-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 1.125rem;
  }

  .contact-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .btn {
    padding: 1rem 2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }

  .btn-primary {
    background: var(--tm-accent-primary);
    color: white;
  }

  .btn-primary:hover {
    background: var(--tm-accent-dark);
  }

  .btn-secondary {
    background: transparent;
    color: var(--tm-accent-primary);
    border: 1px solid var(--tm-accent-primary);
  }

  .btn-secondary:hover {
    background: var(--tm-accent-primary);
    color: white;
  }

  /* 响应式设计 */
  @media (max-width: 1024px) {
    .content-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .side-navigation {
      position: static;
      order: 1;
    }

    .main-section {
      order: 2;
    }
  }

  @media (max-width: 768px) {
    .page-title {
      font-size: 2.5rem;
    }

    .header-container,
    .content-container {
      padding: 0 1rem;
    }

    .main-content {
      padding: 2rem 0;
    }

    .services-grid,
    .case-studies-grid {
      grid-template-columns: 1fr;
    }

    .contact-actions {
      flex-direction: column;
      align-items: center;
    }

    .btn {
      width: 100%;
      max-width: 300px;
    }
  }
</style>
