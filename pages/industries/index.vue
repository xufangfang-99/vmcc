<template>
  <div class="industries-overview">
    <!-- 头部区域 -->
    <div class="header-section">
      <div class="container">
        <h1 class="main-title">Industries We Serve</h1>
        <p class="main-subtitle">
          Delivering expert consulting services across diverse industries, with deep domain
          knowledge and proven methodologies tailored to your sector's unique challenges.
        </p>
        <div class="stats-row">
          <div class="stat-item">
            <span class="stat-number">25+</span>
            <span class="stat-label">Industries</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">98%</span>
            <span class="stat-label">Success Rate</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 行业网格区域 -->
    <div class="industries-grid-section">
      <div class="container">
        <div class="section-header">
          <h2>Explore Our Industry Expertise</h2>
          <p>
            Click on any industry to learn more about our specialized services and success stories.
          </p>
        </div>

        <div class="industries-grid">
          <NuxtLink
            v-for="industry in industries"
            :key="industry.slug"
            :to="industry.link"
            class="industry-card"
          >
            <div class="card-header">
              <div class="industry-icon">
                <span class="icon-text">{{ getIndustryIcon(industry.name) }}</span>
              </div>
              <div class="industry-category">{{ industry.category }}</div>
            </div>
            <div class="card-content">
              <h3 class="industry-title">{{ industry.name }}</h3>
              <p class="industry-description">{{ industry.description }}</p>
              <div class="industry-tags">
                <span
                  v-for="tag in industry.tags"
                  :key="tag"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="card-footer">
              <span class="learn-more">Learn More →</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 为什么选择我们 -->
    <div class="why-choose-section">
      <div class="container">
        <div class="section-header centered">
          <h2>Why Choose Our Industry Expertise</h2>
          <p>We bring unique value to every sector we serve</p>
        </div>

        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">
              <div class="icon-circle">📊</div>
            </div>
            <h3>Deep Industry Knowledge</h3>
            <p>
              Our consultants have extensive experience and specialized knowledge in each industry
              sector.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <div class="icon-circle">🎯</div>
            </div>
            <h3>Tailored Solutions</h3>
            <p>
              We customize our approach based on your industry's specific challenges and
              opportunities.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <div class="icon-circle">🚀</div>
            </div>
            <h3>Proven Results</h3>
            <p>
              Track record of successful transformations and measurable improvements across all
              sectors.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <div class="icon-circle">🔄</div>
            </div>
            <h3>Continuous Innovation</h3>
            <p>
              We stay ahead of industry trends and emerging technologies to keep you competitive.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系我们区域 -->
    <div class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Transform Your Industry?</h2>
          <p>
            Connect with our industry experts to discuss your specific challenges and opportunities.
          </p>
          <div class="cta-buttons">
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
      </div>
    </div>
    <!-- 第四屏: 页脚 -->
    <FooterSection />
  </div>
</template>

<script setup>
  import FooterSection from '~/components/Home/FooterSection.vue'
  // 行业数据
  const industries = [
    {
      name: 'Aerospace & Defense',
      slug: 'aerospace-defense',
      link: '/industries/aerospace-defense',
      description:
        'Strategic solutions for aerospace and defense organizations facing complex regulatory and operational challenges.',
      category: 'Manufacturing',
      tags: ['Strategy', 'Compliance', 'Innovation'],
    },
    {
      name: 'Agriculture',
      slug: 'agriculture',
      link: '/industries/agriculture',
      description:
        'Sustainable farming solutions and agtech innovations to improve productivity and environmental impact.',
      category: 'Agriculture',
      tags: ['Sustainability', 'Technology', 'Efficiency'],
    },
    {
      name: 'Automotive & Assembly',
      slug: 'automotive-assembly',
      link: '/industries/automotive-assembly',
      description:
        'Driving innovation and efficiency in automotive manufacturing and electric vehicle transition.',
      category: 'Manufacturing',
      tags: ['EV Strategy', 'Manufacturing', 'Digital'],
    },
    {
      name: 'Chemicals',
      slug: 'chemicals',
      link: '/industries/chemicals',
      description:
        'Optimize chemical processes, ensure safety compliance, and drive sustainable innovation.',
      category: 'Manufacturing',
      tags: ['Process Optimization', 'Safety', 'Sustainability'],
    },
    {
      name: 'Consumer Packaged Goods',
      slug: 'consumer-packaged-goods',
      link: '/industries/consumer-packaged-goods',
      description:
        'Brand strategy, supply chain optimization, and digital transformation for CPG companies.',
      category: 'Consumer',
      tags: ['Brand Strategy', 'Supply Chain', 'Digital'],
    },
    {
      name: 'Education',
      slug: 'education',
      link: '/industries/education',
      description:
        'Educational innovation, digital learning platforms, and institutional transformation.',
      category: 'Services',
      tags: ['Digital Learning', 'Innovation', 'Strategy'],
    },
    {
      name: 'Electric Power & Natural Gas',
      slug: 'electric-power-natural-gas',
      link: '/industries/electric-power-natural-gas',
      description:
        'Energy transition strategies, grid modernization, and renewable energy integration.',
      category: 'Energy',
      tags: ['Renewables', 'Grid Modernization', 'Strategy'],
    },
    {
      name: 'Energy and Materials',
      slug: 'energy-materials',
      link: '/industries/energy-materials',
      description:
        'Sustainable energy solutions and advanced materials development for the future.',
      category: 'Energy',
      tags: ['Sustainability', 'Innovation', 'Materials'],
    },
    {
      name: 'Financial Services',
      slug: 'financial-services',
      link: '/industries/financial-services',
      description: 'Digital banking, fintech innovation, and regulatory compliance solutions.',
      category: 'Financial',
      tags: ['Fintech', 'Digital Banking', 'Compliance'],
    },
    {
      name: 'Healthcare',
      slug: 'healthcare',
      link: '/industries/healthcare',
      description:
        'Transforming healthcare delivery, patient outcomes, and operational efficiency.',
      category: 'Healthcare',
      tags: ['Digital Health', 'Patient Care', 'Operations'],
    },
    {
      name: 'Life Sciences',
      slug: 'life-sciences',
      link: '/industries/life-sciences',
      description: 'Drug development, clinical trials optimization, and regulatory strategy.',
      category: 'Healthcare',
      tags: ['R&D', 'Clinical Trials', 'Regulatory'],
    },
    {
      name: 'Technology, Media & Telecommunications',
      slug: 'technology-media-telecommunications',
      link: '/industries/technology-media-telecommunications',
      description: '5G strategy, digital transformation, and emerging technology implementation.',
      category: 'Technology',
      tags: ['5G', 'Digital', 'Innovation'],
    },
    {
      name: 'Retail',
      slug: 'retail',
      link: '/industries/retail',
      description: 'Omnichannel strategy, customer experience optimization, and retail technology.',
      category: 'Consumer',
      tags: ['Omnichannel', 'CX', 'Technology'],
    },
    {
      name: 'Real Estate',
      slug: 'real-estate',
      link: '/industries/real-estate',
      description: 'Property technology, sustainable development, and investment strategy.',
      category: 'Services',
      tags: ['PropTech', 'Sustainability', 'Investment'],
    },
    {
      name: 'Logistics',
      slug: 'logistics',
      link: '/industries/logistics',
      description:
        'Supply chain optimization, warehouse automation, and last-mile delivery solutions.',
      category: 'Services',
      tags: ['Supply Chain', 'Automation', 'Optimization'],
    },
    {
      name: 'Travel',
      slug: 'travel',
      link: '/industries/travel',
      description:
        'Travel industry recovery, digital transformation, and customer experience innovation.',
      category: 'Services',
      tags: ['Recovery', 'Digital', 'CX'],
    },
  ]

  // 生成行业图标
  const getIndustryIcon = (name) => {
    const iconMap = {
      'Aerospace & Defense': '✈️',
      Agriculture: '🌱',
      'Automotive & Assembly': '🚗',
      Chemicals: '⚗️',
      'Consumer Packaged Goods': '📦',
      Education: '🎓',
      'Electric Power & Natural Gas': '⚡',
      'Energy and Materials': '🔋',
      'Financial Services': '💰',
      Healthcare: '🏥',
      'Life Sciences': '🧬',
      'Technology, Media & Telecommunications': '📱',
      Retail: '🛍️',
      'Real Estate': '🏢',
      Logistics: '🚛',
      Travel: '🌍',
    }
    return iconMap[name] || '🏭'
  }

  // SEO设置
  useHead({
    title: 'Industries - Expert Consulting Services | VMMC',
    meta: [
      {
        name: 'description',
        content:
          'Explore our industry expertise across 25+ sectors including aerospace, automotive, healthcare, technology, and more. Tailored consulting solutions for your industry.',
      },
      {
        name: 'keywords',
        content:
          'industry consulting, sector expertise, business transformation, aerospace consulting, healthcare consulting, automotive consulting, technology consulting',
      },
    ],
  })

  definePageMeta({
    layout: 'default',
  })
</script>

<style scoped>
  .industries-overview {
    min-height: 100vh;
    background: var(--tm-bg-primary);
  }

  /* 头部区域 */
  .header-section {
    background: linear-gradient(135deg, var(--tm-bg-secondary) 0%, var(--tm-bg-primary) 100%);
    padding: 5rem 0;
    text-align: center;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .main-title {
    font-size: 4rem;
    font-weight: 300;
    margin: 0 0 1.5rem 0;
    color: var(--tm-txt-primary);
    letter-spacing: -0.02em;
  }

  .main-subtitle {
    font-size: 1.375rem;
    color: var(--tm-txt-secondary);
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto 3rem;
  }

  .stats-row {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-top: 3rem;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--tm-accent-primary);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--tm-txt-light);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* 行业网格区域 */
  .industries-grid-section {
    padding: 5rem 0;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-header.centered {
    text-align: center;
  }

  .section-header h2 {
    font-size: 2.5rem;
    font-weight: 300;
    margin: 0 0 1rem 0;
    color: var(--tm-txt-primary);
  }

  .section-header p {
    font-size: 1.125rem;
    color: var(--tm-txt-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  .industries-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2rem;
  }

  .industry-card {
    background: var(--tm-bg-card);
    border-radius: 16px;
    border: 1px solid var(--tm-bd-card);
    text-decoration: none;
    transition: all 0.3s ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .industry-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--tm-shadow-hover);
    border-color: var(--tm-accent-primary);
  }

  .card-header {
    padding: 2rem 2rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .industry-icon {
    width: 60px;
    height: 60px;
    background: var(--tm-accent-light);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }

  .icon-text {
    font-size: 1.5rem;
  }

  .industry-category {
    background: var(--tm-bg-secondary);
    color: var(--tm-txt-light);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .card-content {
    padding: 0 2rem 1.5rem;
    flex-grow: 1;
  }

  .industry-title {
    font-size: 1.375rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    color: var(--tm-txt-primary);
  }

  .industry-description {
    color: var(--tm-txt-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .industry-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background: var(--tm-accent-light);
    color: var(--tm-accent-primary);
    padding: 0.25rem 0.75rem;
    border-radius: 16px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .card-footer {
    padding: 0 2rem 2rem;
    margin-top: auto;
  }

  .learn-more {
    color: var(--tm-accent-primary);
    font-weight: 500;
    font-size: 0.875rem;
    transition: all 0.2s ease;
  }

  .industry-card:hover .learn-more {
    transform: translateX(4px);
  }

  /* 为什么选择我们区域 */
  .why-choose-section {
    background: var(--tm-bg-secondary);
    padding: 5rem 0;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .benefit-card {
    background: var(--tm-bg-card);
    padding: 2.5rem 2rem;
    border-radius: 12px;
    border: 1px solid var(--tm-bd-card);
    text-align: center;
    transition: all 0.3s ease;
  }

  .benefit-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--tm-shadow-hover);
  }

  .benefit-icon {
    margin-bottom: 1.5rem;
  }

  .icon-circle {
    width: 80px;
    height: 80px;
    background: var(--tm-accent-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 0 auto;
  }

  .benefit-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    color: var(--tm-txt-primary);
  }

  .benefit-card p {
    color: var(--tm-txt-secondary);
    line-height: 1.6;
    margin: 0;
  }

  /* CTA区域 */
  .cta-section {
    padding: 5rem 0;
    background: linear-gradient(
      135deg,
      var(--tm-accent-primary) 0%,
      var(--tm-accent-secondary) 100%
    );
    color: white;
  }

  .cta-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .cta-section h2 {
    font-size: 2.5rem;
    font-weight: 300;
    margin: 0 0 1rem 0;
  }

  .cta-section p {
    font-size: 1.25rem;
    margin: 0 0 2rem 0;
    opacity: 0.9;
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .btn {
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }

  .btn-primary {
    background: white;
    color: var(--tm-accent-primary);
  }

  .btn-primary:hover {
    background: var(--tm-bg-hover);
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }

  .btn-secondary:hover {
    background: white;
    color: var(--tm-accent-primary);
    transform: translateY(-2px);
  }

  /* 响应式设计 */
  @media (max-width: 1024px) {
    .industries-grid {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }

    .stats-row {
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    .main-title {
      font-size: 2.5rem;
    }

    .main-subtitle {
      font-size: 1.125rem;
    }

    .stats-row {
      flex-direction: column;
      gap: 1.5rem;
    }

    .industries-grid {
      grid-template-columns: 1fr;
    }

    .benefits-grid {
      grid-template-columns: 1fr;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .btn {
      width: 100%;
      max-width: 300px;
    }

    .container {
      padding: 0 1rem;
    }

    .header-section,
    .industries-grid-section,
    .why-choose-section,
    .cta-section {
      padding: 3rem 0;
    }
  }

  @media (max-width: 640px) {
    .card-header {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }

    .industry-category {
      align-self: flex-start;
    }
  }
</style>
