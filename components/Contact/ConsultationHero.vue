<template>
  <section class="consultation-hero">
    <!-- 背景图片 -->
    <div class="hero-image-bg">
      <img
        src="/images/comm/banner1.webp"
        alt="Background image"
        class="bg-image"
      />
      <!-- 遮罩层 -->
      <div class="bg-overlay"></div>
    </div>

    <!-- 背景装饰 -->
    <div class="hero-background">
      <div class="gradient-bg"></div>
      <div class="pattern-overlay"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <!-- 顶部标签 -->
        <div class="hero-badge">
          <span class="badge-icon">🌍</span>
          <span class="badge-text">Global Talent Network Covering 100+ Cities</span>
        </div>

        <!-- 主标题 -->
        <h1 class="hero-title">
          Unlock Your
          <span class="highlight">Talent Strategy</span>
          Journey
        </h1>

        <!-- 副标题 -->
        <p class="hero-subtitle">
          Connect with industry-leading talent consultants to create customized solutions for your
          business
        </p>

        <!-- 特点列表 - 新设计 -->
        <!-- 特点列表 - 调整结构 -->
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-icon-wrapper">
                <svg
                  class="feature-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 2L2 7v10c0 5.5 3.84 10.74 9 12 5.16-1.26 9-6.5 9-12V7l-10-5z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <h3 class="feature-title">100% Confidential</h3>
            </div>
            <p class="feature-desc">Multi-layer encryption protects your business secrets</p>
          </div>

          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-icon-wrapper">
                <svg
                  class="feature-icon"
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
                    r="10"
                  ></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 class="feature-title">Fast Response</h3>
            </div>
            <p class="feature-desc">Expert team contact within 24 hours</p>
          </div>

          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-icon-wrapper">
                <svg
                  class="feature-icon"
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
                </svg>
              </div>
              <h3 class="feature-title">Dedicated Advisor</h3>
            </div>
            <p class="feature-desc">1-on-1 personalized service experience</p>
          </div>

          <div class="feature-card">
            <div class="feature-header">
              <div class="feature-icon-wrapper">
                <svg
                  class="feature-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 class="feature-title">Success Guarantee</h3>
            </div>
            <p class="feature-desc">92% placement success rate, 6-month warranty</p>
          </div>
        </div>

        <!-- 信任指标 - 新设计 -->
        <div class="stats-section">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">
                <span class="number">15,000</span>
                <span class="plus">+</span>
              </div>
              <div class="stat-label">Success Stories</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">
                <span class="number">500</span>
                <span class="plus">+</span>
              </div>
              <div class="stat-label">Enterprise Clients</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">
                <span class="number">50</span>
                <span class="plus">+</span>
              </div>
              <div class="stat-label">Industries Covered</div>
            </div>
          </div>
        </div>

        <!-- 滚动提示 -->
        <div
          class="scroll-hint"
          @click="scrollToForm"
        >
          <span>Fill out the form to start consultation</span>
          <svg
            class="scroll-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // 滚动到表单
  const scrollToForm = () => {
    const formElement = document.querySelector('.consultation-section')
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
</script>

<style scoped>
  .consultation-hero {
    position: relative;
    height: 100vh; /* 设置为视口高度 */
    min-height: 600px; /* 最小高度保证内容不被挤压 */
    padding: 60px 0 40px; /* 减少上下padding */
    overflow: hidden;
    background: var(--tm-bg-primary);
    display: flex;
    align-items: center;
  }

  /* 背景图片容器 */
  .hero-image-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
  }

  /* 背景图片 */
  .bg-image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 110%;
    height: 110%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    animation: slowZoom 30s ease-in-out infinite alternate;
  }

  @keyframes slowZoom {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  /* 遮罩层 */
  .bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* 浅色模式遮罩 */
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.92) 0%,
      rgba(255, 255, 255, 0.85) 50%,
      rgba(255, 255, 255, 0.92) 100%
    );
  }

  /* 深色模式遮罩 */
  .dark .bg-overlay {
    background: linear-gradient(
      135deg,
      rgba(10, 14, 39, 0.95) 0%,
      rgba(10, 14, 39, 0.88) 50%,
      rgba(10, 14, 39, 0.95) 100%
    );
  }

  /* 背景装饰 */
  .hero-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
  }

  .gradient-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 30% 50%,
      rgba(var(--tm-pri-0-rgb), 0.08) 0%,
      transparent 50%
    );
  }

  .pattern-overlay {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 70% 30%, rgba(var(--tm-pri-1-rgb), 0.06) 0%, transparent 40%),
      radial-gradient(circle at 20% 80%, rgba(var(--tm-pri-0-rgb), 0.06) 0%, transparent 40%);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .hero-content {
    text-align: center;
    width: 100%;
  }

  /* 顶部标签 - 玻璃态设计 */
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px; /* 减小padding */
    background: rgba(var(--tm-bg-secondary-rgb), 0.8);
    border: 1px solid var(--tm-bd-light);
    border-radius: 50px;
    margin-bottom: 20px; /* 减小间距 */
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: all 0.3s ease;
  }

  .dark .hero-badge {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .hero-badge:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .dark .hero-badge:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .badge-icon {
    font-size: 1rem; /* 减小图标 */
  }

  .badge-text {
    font-size: 0.85rem; /* 减小文字 */
    color: var(--tm-txt-secondary);
    font-weight: 500;
  }

  .dark .badge-text {
    color: rgba(255, 255, 255, 0.9);
  }

  /* 主标题 */
  .hero-title {
    font-size: 3rem; /* 减小标题 */
    font-weight: 300;
    line-height: 1.2;
    color: var(--tm-txt-primary);
    margin-bottom: 16px; /* 减小间距 */
    letter-spacing: -0.02em;
  }

  .dark .hero-title {
    color: white;
  }

  .hero-title .highlight {
    font-weight: 600;
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }

  /* 副标题 */
  .hero-subtitle {
    font-size: 1.125rem; /* 减小字体 */
    color: var(--tm-txt-secondary);
    max-width: 600px;
    margin: 0 auto 40px; /* 减小间距 */
    line-height: 1.5;
  }

  .dark .hero-subtitle {
    color: rgba(255, 255, 255, 0.7);
  }

  /* 特点网格 - 全新设计 */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 强制4列 */
    gap: 20px; /* 减小间距 */
    margin-bottom: 40px; /* 减小间距 */
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  .feature-card {
    position: relative;
    padding: 24px 16px; /* 减小padding */
    background: rgba(var(--tm-bg-secondary-rgb), 0.8);
    border: 1px solid var(--tm-bd-light);
    border-radius: 16px; /* 减小圆角 */
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .dark .feature-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  /* 悬停效果 */
  .feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(var(--tm-pri-0-rgb), 0.1) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .feature-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  .dark .feature-card:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }

  .feature-card:hover::before {
    opacity: 1;
  }

  .feature-icon-wrapper {
    width: 48px; /* 减小图标容器 */
    height: 48px;
    margin: 0 auto 16px; /* 减小间距 */
    background: linear-gradient(
      135deg,
      rgba(var(--tm-pri-0-rgb), 0.1),
      rgba(var(--tm-pri-1-rgb), 0.1)
    );
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .dark .feature-icon-wrapper {
    background: linear-gradient(
      135deg,
      rgba(var(--tm-pri-0-rgb), 0.15),
      rgba(var(--tm-pri-1-rgb), 0.15)
    );
  }

  .feature-icon {
    color: var(--tm-pri-0);
    width: 24px; /* 减小图标 */
    height: 24px;
  }

  .feature-title {
    font-size: 1rem; /* 减小标题 */
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin-bottom: 6px;
  }

  .dark .feature-title {
    color: white;
  }

  .feature-desc {
    font-size: 0.85rem; /* 减小描述文字 */
    color: var(--tm-txt-secondary);
    line-height: 1.4;
  }

  .dark .feature-desc {
    color: rgba(255, 255, 255, 0.6);
  }

  /* 统计数据部分 - 全新设计 */
  .stats-section {
    margin-bottom: 30px; /* 减小间距 */
  }

  .stats-grid {
    display: inline-flex; /* 改为inline-flex */
    justify-content: center;
    align-items: center;
    gap: 50px; /* 减小间距 */
    padding: 30px 50px; /* 减小padding */
    background: linear-gradient(
      135deg,
      rgba(var(--tm-bg-secondary-rgb), 0.5) 0%,
      rgba(var(--tm-bg-secondary-rgb), 0.8) 100%
    );
    border: 1px solid var(--tm-bd-light);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    position: relative;
    overflow: hidden;
  }

  .dark .stats-grid {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.02) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  /* 背景动画光效 */
  .stats-grid::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg at 50% 50%,
      transparent 0deg,
      rgba(var(--tm-pri-0-rgb), 0.1) 60deg,
      transparent 120deg,
      rgba(var(--tm-pri-1-rgb), 0.1) 180deg,
      transparent 240deg,
      rgba(var(--tm-pri-0-rgb), 0.1) 300deg,
      transparent 360deg
    );
    animation: rotate 20s linear infinite;
    opacity: 0.5;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .stat-item {
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .stat-number {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 2px;
    margin-bottom: 6px; /* 减小间距 */
  }

  .stat-number .number {
    font-size: 2rem; /* 减小数字 */
    font-weight: 700;
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-number .plus {
    font-size: 1.6rem; /* 减小加号 */
    font-weight: 600;
    color: var(--tm-pri-0);
    opacity: 0.8;
  }

  .stat-label {
    font-size: 0.9rem; /* 减小标签 */
    color: var(--tm-txt-secondary);
    font-weight: 500;
  }

  .dark .stat-label {
    color: rgba(255, 255, 255, 0.7);
  }

  .stat-divider {
    width: 1px;
    height: 40px; /* 减小高度 */
    background: linear-gradient(to bottom, transparent, var(--tm-bd-light), transparent);
  }

  .dark .stat-divider {
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent);
  }

  /* 滚动提示 */
  .scroll-hint {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--tm-txt-secondary);
    font-size: 0.85rem; /* 减小字体 */
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .dark .scroll-hint {
    color: rgba(255, 255, 255, 0.6);
  }

  .scroll-hint:hover {
    transform: translateY(2px);
  }

  .dark .scroll-hint:hover {
    color: rgba(255, 255, 255, 0.9);
  }

  .scroll-icon {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(3px);
    }
  }

  /* 响应式设计 - 大屏优化 */
  @media (min-width: 1400px) {
    .hero-title {
      font-size: 3.5rem;
    }

    .hero-subtitle {
      font-size: 1.25rem;
    }
  }

  /* 笔记本屏幕 */
  @media (max-width: 1366px) and (max-height: 800px) {
    .consultation-hero {
      padding: 40px 0 30px;
    }

    .hero-title {
      font-size: 2.5rem;
    }

    .features-grid {
      gap: 16px;
    }

    .feature-card {
      padding: 20px 14px;
    }
  }

  /* 响应式设计 - 平板 */
  @media (max-width: 1024px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .stats-grid {
      padding: 24px 30px;
      gap: 40px;
    }
  }

  /* 手机端特殊样式 */
  @media (max-width: 768px) {
    .consultation-hero {
      min-height: auto;
      height: auto;
      padding: 60px 0 40px;
    }

    .bg-image {
      animation: none;
      transform: translate(-50%, -50%) scale(1.05);
    }

    .hero-badge {
      padding: 6px 16px;
      margin-bottom: 16px;
    }

    .badge-text {
      font-size: 0.75rem;
    }

    .hero-title {
      font-size: 1.75rem;
      margin-bottom: 12px;
    }

    .hero-subtitle {
      font-size: 1rem;
      margin-bottom: 30px;
    }

    /* 特点网格 - 保持单列 */
    .features-grid {
      grid-template-columns: 1fr;
      gap: 12px;
      margin-bottom: 30px;
    }

    .feature-card {
      padding: 16px;
      text-align: left; /* 改为左对齐 */
    }

    /* 调整1: 图标和标题横向排列 */
    .feature-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .feature-icon-wrapper {
      width: 36px;
      height: 36px;
      margin: 0; /* 移除原有的margin */
      flex-shrink: 0;
    }

    .feature-icon {
      width: 18px;
      height: 18px;
    }

    .feature-title {
      font-size: 0.95rem;
      margin-bottom: 0; /* 移除底部间距 */
    }

    .feature-desc {
      font-size: 0.8rem;
      line-height: 1.3;
      color: var(--tm-txt-secondary);
    }

    /* 调整2: 统计数据保持横向一排 */
    .stats-grid {
      flex-direction: row !important; /* 强制横向 */
      gap: 0;
      padding: 20px 16px;
      justify-content: space-between;
    }

    .stat-item {
      flex: 1;
      padding: 0 8px;
    }

    .stat-number .number {
      font-size: 1.75rem;
    }

    .stat-number .plus {
      font-size: 1.4rem;
    }

    .stat-label {
      font-size: 0.85rem;
    }

    /* 显示分隔线 */
    .stat-divider {
      display: block !important;
      width: 1px;
      height: 40px;
      margin: 0;
      background: var(--tm-bd-light);
      opacity: 0.3;
    }

    .dark .stat-divider {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  @media (max-width: 480px) {
    .consultation-hero {
      padding: 50px 0 30px;
    }

    .hero-title {
      font-size: 1.5rem;
    }

    .hero-subtitle {
      font-size: 0.9rem;
      margin-bottom: 24px;
    }

    .features-grid {
      gap: 10px;
    }

    .feature-card {
      padding: 14px;
    }

    .feature-header {
      gap: 10px;
    }

    .feature-icon-wrapper {
      width: 32px;
      height: 32px;
    }

    .feature-icon {
      width: 16px;
      height: 16px;
    }

    .feature-title {
      font-size: 0.9rem;
    }

    .feature-desc {
      font-size: 0.75rem;
    }

    .stats-grid {
      padding: 18px 12px;
    }

    .stat-item {
      padding: 0 6px;
    }

    .stat-number .number {
      font-size: 1.5rem;
    }

    .stat-number .plus {
      font-size: 1.2rem;
    }

    .stat-label {
      font-size: 0.75rem;
    }

    .stat-divider {
      height: 35px;
    }
  }
</style>
