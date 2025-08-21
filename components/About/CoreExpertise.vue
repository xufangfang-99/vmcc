<!-- components/about/CoreExpertise.vue -->
<template>
  <section class="core-expertise">
    <div class="container">
      <!-- 标题 -->
      <div class="section-header">
        <h2 class="section-title">Our Core Expertise</h2>
        <p class="section-subtitle">
          Comprehensive service portfolio designed to address every aspect of your human capital and
          business development needs
        </p>
      </div>

      <!-- 服务网格 -->
      <div class="services-grid">
        <!-- 高管搜寻 -->
        <div class="service-card">
          <div class="service-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle
                cx="11"
                cy="11"
                r="8"
              ></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
          <h3 class="service-title">Executive Search</h3>
          <p class="service-desc">
            Premium headhunting services for C-level and senior leadership positions across
            industries
          </p>
          <ul class="service-features">
            <li>C-Suite Recruitment</li>
            <li>Board Directors</li>
            <li>Senior Management</li>
            <li>Specialized Roles</li>
          </ul>
        </div>

        <!-- 人力资源外包 -->
        <div class="service-card">
          <div class="service-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle
                cx="9"
                cy="7"
                r="4"
              ></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 class="service-title">HR Outsourcing</h3>
          <p class="service-desc">
            Comprehensive human resources management solutions to streamline operations
          </p>
          <ul class="service-features">
            <li>Payroll Management</li>
            <li>Benefits Administration</li>
            <li>Compliance Support</li>
            <li>HR Technology</li>
          </ul>
        </div>

        <!-- 移民服务 -->
        <div class="service-card">
          <div class="service-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <h3 class="service-title">Immigration Services</h3>
          <p class="service-desc">
            Expert immigration consultation and processing for individuals and corporations
          </p>
          <ul class="service-features">
            <li>Work Permits</li>
            <li>Residency Applications</li>
            <li>Corporate Immigration</li>
            <li>Family Reunification</li>
          </ul>
        </div>

        <!-- 留学服务 -->
        <div class="service-card">
          <div class="service-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <h3 class="service-title">Study Abroad</h3>
          <p class="service-desc">
            Complete educational consulting for international study opportunities
          </p>
          <ul class="service-features">
            <li>University Applications</li>
            <li>Scholarship Guidance</li>
            <li>Student Visas</li>
            <li>Academic Planning</li>
          </ul>
        </div>

        <!-- 战略咨询 -->
        <div class="service-card">
          <div class="service-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle
                cx="12"
                cy="12"
                r="3"
              ></circle>
              <path d="M12 1v6m0 6v6m11-11h-6m-6 0H1"></path>
              <path
                d="m20.5 7.5L16 12l4.5 4.5L16 12l4.5-4.5m-17 0L8 12l-4.5 4.5L8 12 3.5 7.5"
              ></path>
            </svg>
          </div>
          <h3 class="service-title">Strategic Consulting</h3>
          <p class="service-desc">
            Business strategy and organizational development advisory services
          </p>
          <ul class="service-features">
            <li>Business Strategy</li>
            <li>Organizational Design</li>
            <li>Change Management</li>
            <li>Market Entry</li>
          </ul>
        </div>

        <!-- 综合解决方案 -->
        <div class="service-card featured">
          <div class="service-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              ></path>
            </svg>
          </div>
          <h3 class="service-title">Integrated Solutions</h3>
          <p class="service-desc">
            Seamlessly combine multiple services for comprehensive business transformation and
            growth.
          </p>
          <button class="explore-btn">Explore Integration</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style scoped>
  .core-expertise {
    padding: 100px 0;
    background: var(--tm-bg-primary);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* 标题区域 */
  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 300;
    color: var(--tm-txt-primary);
    margin-bottom: 20px;
  }

  .section-subtitle {
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--tm-txt-secondary);
    max-width: 700px;
    margin: 0 auto;
  }

  /* 服务网格 */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 30px;
  }

  .service-card {
    background: var(--tm-bg-secondary);
    border-radius: 20px;
    padding: 40px 30px;
    transition: all 0.3s ease;
    border: 1px solid var(--tm-bd-light);
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  /* 特色卡片 */
  .service-card.featured {
    background: linear-gradient(135deg, #5b6cff 0%, #7b8cff 100%);
    color: white;
  }

  .service-icon {
    width: 64px;
    height: 64px;
    background: rgba(91, 108, 255, 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    color: #5b6cff;
  }

  .featured .service-icon {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }

  .service-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 16px;
  }

  .featured .service-title {
    color: white;
  }

  .service-desc {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--tm-txt-secondary);
    margin-bottom: 24px;
  }

  .featured .service-desc {
    color: rgba(255, 255, 255, 0.9);
  }

  .service-features {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .service-features li {
    position: relative;
    padding-left: 24px;
    margin-bottom: 12px;
    font-size: 0.95rem;
    color: var(--tm-txt-secondary);
  }

  .service-features li::before {
    content: '•';
    position: absolute;
    left: 8px;
    color: #5b6cff;
  }

  .featured .service-features li {
    color: rgba(255, 255, 255, 0.8);
  }

  .featured .service-features li::before {
    color: white;
  }

  /* 探索按钮 */
  .explore-btn {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    padding: 12px 32px;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 20px;
  }

  .explore-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateX(5px);
  }

  /* 深色模式 */
  .dark .core-expertise {
    background: var(--tm-bg-secondary);
  }

  .dark .service-card {
    background: var(--tm-bg-primary);
    border-color: var(--tm-bd-secondary);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .core-expertise {
      padding: 60px 0;
    }

    .section-title {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 1.1rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .service-card {
      padding: 30px 24px;
    }

    .service-icon {
      width: 56px;
      height: 56px;
    }

    .service-title {
      font-size: 1.25rem;
    }
  }
</style>
