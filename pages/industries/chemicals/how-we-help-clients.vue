<template>
  <div class="how-we-help-page">
    <!-- 头部区域 -->
    <div class="hero-section">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/industries">Industries</NuxtLink>
          <span>/</span>
          <NuxtLink to="/industries/chemicals">Chemicals</NuxtLink>
          <span>/</span>
          <span class="current">How We Help Clients</span>
        </div>

        <h1 class="hero-title">How VMMC Helps Chemical Companies Transform</h1>
        <p class="hero-subtitle">
          We partner with chemical companies to navigate industry transformation, optimize
          operations, and build sustainable competitive advantages in an evolving market.
        </p>
      </div>
    </div>

    <!-- 核心服务概述 -->
    <div class="overview-section">
      <div class="container">
        <div class="overview-content">
          <div class="overview-text">
            <h2>Driving Performance Across the Chemical Value Chain</h2>
            <p>
              The chemical industry faces unprecedented challenges: sustainability mandates, supply
              chain disruptions, digital transformation demands, and evolving customer expectations.
              VMMC's chemical industry experts work alongside leadership teams to address these
              complex challenges while unlocking new growth opportunities.
            </p>
            <p>
              Our integrated approach combines deep industry knowledge with proven methodologies to
              deliver measurable results across strategy, operations, technology, and
              sustainability.
            </p>
          </div>
          <div class="overview-stats">
            <div class="stat-card">
              <span class="stat-number">150+</span>
              <span class="stat-label">Chemical Projects</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">$2.5B+</span>
              <span class="stat-label">Value Created</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">25+</span>
              <span class="stat-label">Countries Served</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 服务领域 -->
    <div class="services-section">
      <div class="container">
        <h2 class="section-title">Our Chemical Industry Services</h2>

        <div class="services-grid">
          <div
            v-for="service in services"
            :key="service.title"
            class="service-card"
          >
            <div class="service-icon">
              <span>{{ service.icon }}</span>
            </div>
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
              <ul class="service-capabilities">
                <li
                  v-for="capability in service.capabilities"
                  :key="capability"
                >
                  {{ capability }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 客户成功案例 -->
    <div class="case-studies-section">
      <div class="container">
        <h2 class="section-title">Client Success Stories</h2>
        <div class="case-studies-grid">
          <div
            v-for="caseStudy in caseStudies"
            :key="caseStudy.title"
            class="case-study-card"
          >
            <div class="case-header">
              <h3>{{ caseStudy.title }}</h3>
              <span class="case-category">{{ caseStudy.category }}</span>
            </div>
            <div class="case-content">
              <p>
                <strong>Challenge:</strong>
                {{ caseStudy.challenge }}
              </p>
              <p>
                <strong>Solution:</strong>
                {{ caseStudy.solution }}
              </p>
              <div class="case-results">
                <h4>Results:</h4>
                <div class="results-grid">
                  <div
                    v-for="result in caseStudy.results"
                    :key="result.metric"
                    class="result-item"
                  >
                    <span class="result-value">{{ result.value }}</span>
                    <span class="result-metric">{{ result.metric }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 行业趋势与洞察 -->
    <div class="insights-section">
      <div class="container">
        <h2 class="section-title">Chemical Industry Insights</h2>
        <div class="insights-grid">
          <div
            v-for="insight in insights"
            :key="insight.title"
            class="insight-card"
          >
            <div class="insight-header">
              <span class="insight-category">{{ insight.category }}</span>
              <h3>{{ insight.title }}</h3>
            </div>
            <p>{{ insight.description }}</p>
            <div class="insight-footer">
              <a
                href="#"
                class="insight-link"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 专家团队 -->
    <div class="experts-section">
      <div class="container">
        <h2 class="section-title">Meet Our Chemical Industry Experts</h2>
        <div class="experts-grid">
          <div
            v-for="expert in experts"
            :key="expert.name"
            class="expert-card"
          >
            <div class="expert-avatar">
              <span>{{ expert.initials }}</span>
            </div>
            <div class="expert-info">
              <h3>{{ expert.name }}</h3>
              <p class="expert-title">{{ expert.title }}</p>
              <p class="expert-description">{{ expert.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系我们 -->
    <div class="contact-section">
      <div class="container">
        <div class="contact-content">
          <h2>Ready to Transform Your Chemical Business?</h2>
          <p>
            Connect with our chemical industry experts to discuss your specific challenges and
            opportunities.
          </p>
          <div class="contact-buttons">
            <NuxtLink
              to="/contact"
              class="btn btn-primary"
            >
              Schedule a Consultation
            </NuxtLink>
            <a
              href="mailto:chemicals@vmmc.com"
              class="btn btn-secondary"
            >
              Email Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // 服务数据
  const services = [
    {
      icon: '🔬',
      title: 'Strategy & Growth',
      description:
        'Develop winning strategies for sustainable growth in the evolving chemical landscape.',
      capabilities: [
        'Market entry and expansion strategies',
        'Portfolio optimization and rationalization',
        'Mergers, acquisitions, and partnerships',
        'Business model innovation',
        'Competitive positioning',
      ],
    },
    {
      icon: '🏭',
      title: 'Operational Excellence',
      description:
        'Optimize manufacturing operations and drive continuous improvement across facilities.',
      capabilities: [
        'Production optimization and debottlenecking',
        'Lean manufacturing implementation',
        'Quality management systems',
        'Maintenance optimization',
        'Cost reduction initiatives',
      ],
    },
    {
      icon: '🌱',
      title: 'Sustainability & ESG',
      description:
        'Build sustainable chemical processes and meet environmental compliance requirements.',
      capabilities: [
        'Carbon footprint reduction strategies',
        'Circular economy implementation',
        'Sustainable chemistry innovation',
        'Environmental compliance',
        'ESG reporting and governance',
      ],
    },
    {
      icon: '🔗',
      title: 'Supply Chain & Procurement',
      description:
        'Create resilient and efficient supply networks for complex chemical operations.',
      capabilities: [
        'Supply chain network optimization',
        'Strategic sourcing and procurement',
        'Supplier relationship management',
        'Risk management and resilience',
        'Logistics and distribution optimization',
      ],
    },
    {
      icon: '💻',
      title: 'Digital & Technology',
      description: 'Leverage digital technologies to enhance chemical operations and innovation.',
      capabilities: [
        'Process automation and control systems',
        'Predictive maintenance and IoT',
        'Data analytics and AI applications',
        'Digital twin implementation',
        'R&D digitalization',
      ],
    },
    {
      icon: '⚖️',
      title: 'Regulatory & Compliance',
      description: 'Navigate complex regulatory environments and ensure compliance across markets.',
      capabilities: [
        'Regulatory strategy development',
        'REACH and global compliance',
        'Product stewardship programs',
        'Risk assessment and management',
        'Regulatory change management',
      ],
    },
  ]

  // 案例研究数据
  const caseStudies = [
    {
      title: 'Global Specialty Chemicals Transformation',
      category: 'Digital Transformation',
      challenge:
        'A leading specialty chemicals company faced declining margins, outdated processes, and increasing sustainability pressures from customers and regulators.',
      solution:
        'VMMC implemented a comprehensive digital transformation program including process automation, predictive maintenance, and sustainability tracking systems.',
      results: [
        { value: '25%', metric: 'Cost Reduction' },
        { value: '40%', metric: 'Productivity Increase' },
        { value: '30%', metric: 'Carbon Footprint Reduction' },
      ],
    },
    {
      title: 'Petrochemical Supply Chain Optimization',
      category: 'Operations Excellence',
      challenge:
        'A major petrochemical producer struggled with supply chain inefficiencies and volatile raw material costs affecting profitability.',
      solution:
        'Redesigned the entire supply chain network, implemented advanced planning systems, and established strategic supplier partnerships.',
      results: [
        { value: '$150M', metric: 'Annual Savings' },
        { value: '35%', metric: 'Inventory Reduction' },
        { value: '99.2%', metric: 'On-time Delivery' },
      ],
    },
  ]

  // 行业洞察数据
  const insights = [
    {
      category: 'Sustainability',
      title: 'The Future of Green Chemistry',
      description:
        'How chemical companies are innovating sustainable processes and products to meet evolving environmental regulations and customer demands.',
    },
    {
      category: 'Digital Innovation',
      title: 'AI in Chemical Manufacturing',
      description:
        'Exploring the applications of artificial intelligence and machine learning in optimizing chemical processes and product development.',
    },
    {
      category: 'Market Trends',
      title: 'Post-Pandemic Chemical Market Dynamics',
      description:
        'Understanding the structural changes in chemical markets and supply chains following global disruptions.',
    },
  ]

  // 专家团队数据
  const experts = [
    {
      name: 'Dr. Sarah Chen',
      initials: 'SC',
      title: 'Chemical Industry Practice Lead',
      description:
        '20+ years experience in chemical process optimization and sustainability transformation. Former R&D director at major chemical company.',
    },
    {
      name: 'Michael Rodriguez',
      initials: 'MR',
      title: 'Operations Excellence Director',
      description:
        'Expert in lean manufacturing and operational transformation with extensive experience in petrochemical and specialty chemical operations.',
    },
    {
      name: 'Dr. Lisa Wang',
      initials: 'LW',
      title: 'Sustainability & ESG Advisor',
      description:
        'Leading authority on sustainable chemistry and circular economy implementation in industrial chemical processes.',
    },
  ]

  // SEO设置
  useHead({
    title: 'How We Help Chemical Companies | VMMC Chemical Industry Consulting',
    meta: [
      {
        name: 'description',
        content:
          'VMMC helps chemical companies transform operations, optimize sustainability, and drive growth through expert consulting services. Learn how we deliver results.',
      },
      {
        name: 'keywords',
        content:
          'chemical consulting, chemical industry transformation, sustainability consulting, process optimization, chemical strategy',
      },
    ],
  })

  definePageMeta({
    layout: 'default',
  })
</script>

<style scoped>
  .how-we-help-page {
    background: var(--tm-bg-primary);
    min-height: 100vh;
  }

  /* Hero Section */
  .hero-section {
    background: linear-gradient(135deg, var(--tm-bg-secondary) 0%, var(--tm-bg-primary) 100%);
    padding: 2rem 0 4rem;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    font-size: 0.875rem;
    color: var(--tm-txt-light);
  }

  .breadcrumb a {
    color: var(--tm-txt-light);
    text-decoration: none;
    transition: color 0.2s;
  }

  .breadcrumb a:hover {
    color: var(--tm-accent-primary);
  }

  .breadcrumb .current {
    color: var(--tm-accent-primary);
    font-weight: 500;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.1;
    color: var(--tm-txt-primary);
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }

  .hero-subtitle {
    font-size: 1.375rem;
    color: var(--tm-txt-secondary);
    line-height: 1.5;
    max-width: 800px;
  }

  /* Overview Section */
  .overview-section {
    padding: 5rem 0;
  }

  .overview-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .overview-text h2 {
    font-size: 2.5rem;
    font-weight: 300;
    color: var(--tm-txt-primary);
    margin-bottom: 2rem;
  }

  .overview-text p {
    font-size: 1.125rem;
    color: var(--tm-txt-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .overview-stats {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .stat-card {
    background: var(--tm-bg-card);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--tm-bd-card);
    text-align: center;
  }

  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 600;
    color: var(--tm-accent-primary);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: var(--tm-txt-secondary);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Services Section */
  .services-section {
    background: var(--tm-bg-secondary);
    padding: 5rem 0;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 300;
    color: var(--tm-txt-primary);
    text-align: center;
    margin-bottom: 3rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
  }

  .service-card {
    background: var(--tm-bg-card);
    padding: 2.5rem;
    border-radius: 16px;
    border: 1px solid var(--tm-bd-card);
    transition: all 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--tm-shadow-hover);
  }

  .service-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  .service-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 1rem;
  }

  .service-description {
    color: var(--tm-txt-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .service-capabilities {
    list-style: none;
    padding: 0;
  }

  .service-capabilities li {
    color: var(--tm-txt-secondary);
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--tm-bd-light);
    position: relative;
    padding-left: 1.5rem;
  }

  .service-capabilities li:before {
    content: '→';
    color: var(--tm-accent-primary);
    position: absolute;
    left: 0;
  }

  .service-capabilities li:last-child {
    border-bottom: none;
  }

  /* Case Studies Section */
  .case-studies-section {
    padding: 5rem 0;
  }

  .case-studies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 2rem;
  }

  .case-study-card {
    background: var(--tm-bg-card);
    border: 1px solid var(--tm-bd-card);
    border-radius: 16px;
    padding: 2.5rem;
  }

  .case-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
  }

  .case-header h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin: 0;
  }

  .case-category {
    background: var(--tm-accent-light);
    color: var(--tm-accent-primary);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
  }

  .case-content p {
    color: var(--tm-txt-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .case-results h4 {
    color: var(--tm-txt-primary);
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  .result-item {
    text-align: center;
    padding: 1rem;
    background: var(--tm-bg-secondary);
    border-radius: 8px;
  }

  .result-value {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--tm-accent-primary);
    margin-bottom: 0.25rem;
  }

  .result-metric {
    color: var(--tm-txt-secondary);
    font-size: 0.875rem;
  }

  /* Insights Section */
  .insights-section {
    background: var(--tm-bg-secondary);
    padding: 5rem 0;
  }

  .insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .insight-card {
    background: var(--tm-bg-card);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--tm-bd-card);
    transition: all 0.3s ease;
  }

  .insight-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--tm-shadow-hover);
  }

  .insight-header {
    margin-bottom: 1rem;
  }

  .insight-category {
    background: var(--tm-accent-light);
    color: var(--tm-accent-primary);
    padding: 0.25rem 0.75rem;
    border-radius: 16px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  .insight-header h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-top: 1rem;
    margin-bottom: 0;
  }

  .insight-card p {
    color: var(--tm-txt-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .insight-link {
    color: var(--tm-accent-primary);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .insight-link:hover {
    transform: translateX(4px);
  }

  /* Experts Section */
  .experts-section {
    padding: 5rem 0;
  }

  .experts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .expert-card {
    background: var(--tm-bg-card);
    padding: 2.5rem;
    border-radius: 16px;
    border: 1px solid var(--tm-bd-card);
    text-align: center;
  }

  .expert-avatar {
    width: 80px;
    height: 80px;
    background: var(--tm-accent-primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 auto 1.5rem;
  }

  .expert-info h3 {
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 0.5rem;
  }

  .expert-title {
    color: var(--tm-accent-primary);
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .expert-description {
    color: var(--tm-txt-secondary);
    line-height: 1.6;
  }

  /* Contact Section */
  .contact-section {
    background: linear-gradient(
      135deg,
      var(--tm-accent-primary) 0%,
      var(--tm-accent-secondary) 100%
    );
    padding: 5rem 0;
    color: white;
  }

  .contact-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .contact-section h2 {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  .contact-section p {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
  }

  .contact-buttons {
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
    font-size: 1rem;
  }

  .btn-primary {
    background: white;
    color: var(--tm-accent-primary);
    border: none;
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
    .overview-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }

    .case-studies-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }

    .hero-subtitle {
      font-size: 1.125rem;
    }

    .overview-text h2,
    .section-title {
      font-size: 2rem;
    }

    .contact-buttons {
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

    .case-header {
      flex-direction: column;
      gap: 1rem;
    }

    .case-category {
      align-self: flex-start;
    }
  }
</style>
