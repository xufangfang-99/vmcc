<!-- components/about/AboutHero.vue -->
<template>
  <section class="about-hero">
    <!-- 背景图片 -->
    <div class="hero-bg">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
        alt="团队协作"
        class="bg-image"
      />
      <div class="bg-overlay"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <!-- Logo区域 -->
        <div class="company-badge">
          <div class="badge-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M12 3v18"></path>
            </svg>
          </div>
        </div>

        <!-- 标题区域 -->
        <div class="title-section">
          <h1 class="hero-title">
            About
            <span class="highlight">VMMC</span>
          </h1>
          <p class="company-name">Victor Meridian Management Consultancies L.L.C</p>

          <p class="hero-description">
            A global comprehensive human resources and consulting firm headquartered in Singapore,
            delivering exceptional one-stop services across executive search, HR outsourcing,
            immigration, study abroad, and strategic consulting.
          </p>
        </div>

        <!-- CTA按钮 -->
        <div class="cta-buttons">
          <button class="btn-primary">Our Services</button>
          <button class="btn-secondary">Contact Us</button>
        </div>

        <!-- 统计数据 -->
        <div class="stats-row">
          <div class="stat-item">
            <h3 class="stat-number">8+</h3>
            <p class="stat-label">Global Offices</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <h3 class="stat-number">10+</h3>
            <p class="stat-label">Years Experience</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <h3 class="stat-number">1000+</h3>
            <p class="stat-label">Successful Placements</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <h3 class="stat-number">50+</h3>
            <p class="stat-label">Industry Sectors</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 设计署名
    <div class="design-credit">
      <span>Designed by</span>
      <img
        src="/images/readdy-logo.png"
        alt="Readdy"
        class="readdy-logo"
      />
    </div>
    -->
  </section>
</template>

<script setup lang="ts">
  // 组件逻辑
</script>

<style scoped>
  .about-hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  /* 背景样式 */
  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.4);
  }

  .bg-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(16, 24, 40, 0.9) 0%,
      rgba(16, 24, 40, 0.7) 50%,
      rgba(16, 24, 40, 0.9) 100%
    );
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
  }

  .hero-content {
    text-align: center;
    color: white;
  }

  /* 公司徽章 */
  .company-badge {
    display: inline-flex;
    margin-bottom: 30px;
  }

  .badge-icon {
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  }

  /* 标题区域 */
  .title-section {
    margin-bottom: 40px;
  }

  .hero-title {
    font-size: 4rem;
    font-weight: 300;
    letter-spacing: -0.02em;
    margin-bottom: 10px;
  }

  .highlight {
    color: #5b6cff;
    font-weight: 600;
  }

  .company-name {
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
  }

  .hero-description {
    font-size: 1.25rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    max-width: 800px;
    margin: 0 auto;
  }

  /* CTA按钮 */
  .cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 60px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 12px 32px;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-primary {
    background: #5b6cff;
    color: white;
  }

  .btn-primary:hover {
    background: #4a5bee;
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }

  /* 统计数据 */
  .stats-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 40px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #5b6cff;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .stat-divider {
    width: 1px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
  }

  /* 设计署名 */
  .design-credit {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
  }

  .readdy-logo {
    height: 20px;
    opacity: 0.7;
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }

    .company-name {
      font-size: 1rem;
    }

    .hero-description {
      font-size: 1.1rem;
    }

    .cta-buttons {
      flex-direction: column;
      width: 100%;
      max-width: 300px;
      margin: 0 auto 40px;
    }

    .btn-primary,
    .btn-secondary {
      width: 100%;
    }

    .stats-row {
      flex-wrap: wrap;
      gap: 20px;
      padding: 20px;
    }

    .stat-item {
      flex: 1 1 40%;
      min-width: 120px;
    }

    .stat-divider {
      display: none;
    }

    .stat-number {
      font-size: 2rem;
    }

    .design-credit {
      bottom: 10px;
      right: 10px;
      font-size: 0.75rem;
    }
  }
</style>
