<template>
  <section class="about-hero">
    <!-- 背景图片 -->
    <div class="hero-bg">
      <OptImage
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
        :auto-dark-mode="true"
        alt="团队协作"
        class="bg-image"
      />
      <div class="bg-overlay"></div>
      <div class="bg-pattern"></div>
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

        <!-- 标题区域 - 使用 Logo 组件 -->
        <div class="title-section">
          <h1 class="hero-title">
            <span class="about-text">About</span>
            <VMMCLogoInline
              class="highlight-logo"
              :size="'1.2em'"
              color="gradient"
            />
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
          <button class="btn-primary">
            <span>Our Services</span>
            <svg
              class="btn-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button class="btn-secondary">
            <span>Contact Us</span>
          </button>
        </div>

        <!-- 统计数据 -->
        <div class="stats-row">
          <div class="stat-item">
            <h3 class="stat-number">
              8
              <span class="stat-plus">+</span>
            </h3>
            <p class="stat-label">Global Offices</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <h3 class="stat-number">
              10
              <span class="stat-plus">+</span>
            </h3>
            <p class="stat-label">Years Experience</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <h3 class="stat-number">
              1000
              <span class="stat-plus">+</span>
            </h3>
            <p class="stat-label">Successful Placements</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <h3 class="stat-number">
              50
              <span class="stat-plus">+</span>
            </h3>
            <p class="stat-label">Industry Sectors</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import VMMCLogoInline from '~/components/Logo/VMMCLogoInline.vue'
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
  }

  /* 遮罩层 - 使用主题变量 */
  .bg-overlay {
    position: absolute;
    inset: 0;
    background: var(--tm-bg-overlay);
  }

  /* 装饰图案 */
  .bg-pattern {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 20% 50%, var(--tm-bg-accent-gradient-from) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, var(--tm-bg-accent-gradient-to) 0%, transparent 40%);
    opacity: 0.6;
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
    color: var(--tm-txt-white);
  }

  /* 公司徽章 - 使用主题变量 */
  .company-badge {
    display: inline-flex;
    margin-bottom: 30px;
  }

  .badge-icon {
    width: 60px;
    height: 60px;
    background: var(--tm-bg-badge);
    border: 2px solid var(--tm-bd-white-alpha30);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--tm-accent-primary);
    transition: all 0.3s ease;
  }

  .badge-icon:hover {
    transform: scale(1.1) rotate(5deg);
    background: var(--tm-accent-primary);
    color: var(--tm-txt-white);
    border-color: var(--tm-accent-primary);
  }

  /* 标题区域 - 使用主题变量 */
  .title-section {
    margin-bottom: 40px;
  }

  .hero-title {
    font-size: 4rem;
    font-weight: 300;
    letter-spacing: -0.02em;
    margin-bottom: 10px;
    color: var(--tm-txt-white);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3em;
  }

  .about-text {
    font-weight: 300;
  }

  /* Logo 样式 */
  .highlight-logo {
    display: inline-flex;
    align-items: center;
    animation: glow 2s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      filter: drop-shadow(0 0 10px var(--tm-accent-gradient-from));
    }
    to {
      filter: drop-shadow(0 0 20px var(--tm-accent-gradient-to));
    }
  }

  .company-name {
    font-size: 1.125rem;
    color: var(--tm-txt-white-alpha85);
    margin-bottom: 30px;
    letter-spacing: 0.5px;
  }

  .hero-description {
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--tm-txt-white);
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
  }

  /* CTA按钮 - 使用主题系统 */
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
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--tm-accent-hero-from), var(--tm-accent-hero-to));
    color: var(--tm-txt-white);
    box-shadow: var(--tm-shadow-accent);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--tm-shadow-hover);
  }

  .btn-icon {
    transition: transform 0.3s ease;
  }

  .btn-primary:hover .btn-icon {
    transform: translateX(4px);
  }

  .btn-secondary {
    background: transparent;
    color: var(--tm-txt-white);
    border: 2px solid var(--tm-bd-white-alpha30);
  }

  .btn-secondary:hover {
    background: var(--tm-bg-white-alpha10);
    border-color: var(--tm-txt-white);
    color: var(--tm-txt-white);
  }

  /* 统计数据 - 使用主题变量 */
  .stats-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 40px;
    background: var(--tm-bg-white-alpha05);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--tm-bd-white-alpha10);
    box-shadow: var(--tm-shadow-white-alpha10);
    position: relative;
    overflow: hidden;
  }

  /* 添加动画背景 */
  .stats-row::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      var(--tm-bg-white-alpha10) 50%,
      transparent 70%
    );
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }

  .stat-item {
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 8px;
    background: linear-gradient(135deg, var(--tm-accent-secondary), var(--tm-accent-tertiary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }

  .stat-plus {
    font-size: 2rem;
    opacity: 0.8;
  }

  .stat-label {
    font-size: 0.9rem;
    color: var(--tm-txt-white-alpha85);
    white-space: nowrap;
  }

  .stat-divider {
    width: 1px;
    height: 50px;
    background: linear-gradient(to bottom, transparent, var(--tm-bd-white-alpha30), transparent);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
      flex-direction: column;
      gap: 0.2em;
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
  }
</style>
