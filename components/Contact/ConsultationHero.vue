<template>
  <section class="consultation-hero">
    <!-- 背景图片 -->
    <div class="hero-background">
      <OptImage
        src="/images/comm/banner1.png"
        :auto-dark-mode="true"
        alt="背景图片"
        class="hero-bg-image"
      />
      <!-- 遮罩层 -->
      <div class="hero-overlay"></div>
    </div>

    <!-- 背景装饰 -->
    <div class="hero-decorations">
      <div class="decoration decoration--1"></div>
      <div class="decoration decoration--2"></div>
    </div>

    <div class="hero-container">
      <div class="hero-content">
        <!-- 顶部标签 -->
        <div class="hero-badge">
          <span class="hero-badge-icon">🌐</span>
          <span class="hero-badge-text">Global Talent Network Covering 100+ Cities</span>
        </div>

        <!-- 主标题 -->
        <h1 class="hero-title">
          Unlock Your
          <span class="hero-title-highlight">Talent Strategy</span>
          Journey
        </h1>

        <!-- 副标题 -->
        <p class="hero-subtitle">
          Connect with industry-leading talent consultants to create customized solutions for your
          business
        </p>

        <!-- 特点网格 -->
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg
                class="feature-icon-svg"
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
            <div class="feature-content">
              <h3 class="feature-title">100% Confidential</h3>
              <p class="feature-description">
                Multi-layer encryption protects your business secrets
              </p>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg
                class="feature-icon-svg"
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
            <div class="feature-content">
              <h3 class="feature-title">Fast Response</h3>
              <p class="feature-description">Expert team contact within 24 hours</p>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg
                class="feature-icon-svg"
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
            <div class="feature-content">
              <h3 class="feature-title">Dedicated Advisor</h3>
              <p class="feature-description">1-on-1 personalized service experience</p>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg
                class="feature-icon-svg"
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
            <div class="feature-content">
              <h3 class="feature-title">Success Guarantee</h3>
              <p class="feature-description">92% placement success rate, 6-month warranty</p>
            </div>
          </div>
        </div>

        <!-- 统计数据 -->
        <div class="stats-container">
          <div class="stats-card">
            <div class="stats-background"></div>

            <div class="stats-item">
              <div class="stats-number">
                <span class="stats-value">15,000</span>
                <span class="stats-plus">+</span>
              </div>
              <div class="stats-label">Success Stories</div>
            </div>

            <div class="stats-divider"></div>

            <div class="stats-item">
              <div class="stats-number">
                <span class="stats-value">500</span>
                <span class="stats-plus">+</span>
              </div>
              <div class="stats-label">Enterprise Clients</div>
            </div>

            <div class="stats-divider"></div>

            <div class="stats-item">
              <div class="stats-number">
                <span class="stats-value">50</span>
                <span class="stats-plus">+</span>
              </div>
              <div class="stats-label">Industries Covered</div>
            </div>
          </div>
        </div>

        <!-- 滚动提示 -->
        <div
          class="scroll-hint"
          @click="scrollToForm"
        >
          <span class="scroll-text">Fill out the form to start consultation</span>
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
  /* ===== 基础布局 ===== */
  .consultation-hero {
    position: relative;
    min-height: 100vh;
    min-height: 600px;
    padding: 60px 0;
    background: var(--tm-bg-primary);
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  /* ===== 背景系统 ===== */
  .hero-background {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
  }

  .hero-bg-image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 110%;
    height: 110%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    animation: slow-zoom 30s ease-in-out infinite alternate;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.92) 0%,
      rgba(255, 255, 255, 0.85) 50%,
      rgba(255, 255, 255, 0.92) 100%
    );
  }

  .dark .hero-overlay {
    background: linear-gradient(
      to bottom,
      rgba(10, 14, 39, 0.95) 0%,
      rgba(10, 14, 39, 0.88) 50%,
      rgba(10, 14, 39, 0.95) 100%
    );
  }

  /* ===== 背景装饰 ===== */
  .hero-decorations {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
  }

  .decoration {
    position: absolute;
    border-radius: 50%;
    opacity: 0.06;
  }

  .decoration--1 {
    top: 30%;
    left: 0;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--tm-pri-0) 0%, transparent 70%);
  }

  .decoration--2 {
    bottom: 20%;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, var(--tm-pri-1) 0%, transparent 70%);
  }

  /* ===== 容器和内容 ===== */
  .hero-container {
    position: relative;
    z-index: 2;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .hero-content {
    text-align: center;
    width: 100%;
  }

  /* ===== 顶部标签 ===== */
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    margin-bottom: 20px;
    border-radius: 50px;
    backdrop-filter: blur(20px);
    background: rgba(var(--tm-bg-secondary-rgb), 0.8);
    border: 1px solid var(--tm-bd-light);
    transition: all 0.3s ease;
  }

  .hero-badge:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .dark .hero-badge {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.12);
  }

  .dark .hero-badge:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .hero-badge-icon {
    font-size: 16px;
  }

  .hero-badge-text {
    font-size: 14px;
    font-weight: 500;
    color: var(--tm-txt-secondary);
  }

  .dark .hero-badge-text {
    color: rgba(255, 255, 255, 0.9);
  }

  /* ===== 标题系统 ===== */
  .hero-title {
    font-size: 5rem;
    font-weight: 300;
    line-height: 1.1;
    color: var(--tm-txt-primary);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .dark .hero-title {
    color: white;
  }

  .hero-title-highlight {
    font-weight: 600;
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }

  .hero-subtitle {
    font-size: 1.125rem;
    color: var(--tm-txt-secondary);
    max-width: 600px;
    margin: 0 auto 40px;
    line-height: 1.6;
  }

  .dark .hero-subtitle {
    color: rgba(255, 255, 255, 0.7);
  }

  /* ===== 特点网格 ===== */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1300px;
    margin: 0 auto 40px;
  }

  .feature-card {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 32px 24px;
    background: rgba(var(--tm-bg-secondary-rgb), 0.8);
    border: 1px solid var(--tm-bd-light);
    border-radius: 24px;
    backdrop-filter: blur(20px);
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  .dark .feature-card {
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.06);
  }

  .dark .feature-card:hover {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(var(--tm-pri-0-rgb), 0.1);
    flex-shrink: 0;
  }

  .dark .feature-icon {
    background: rgba(var(--tm-pri-0-rgb), 0.15);
  }

  .feature-icon-svg {
    width: 24px;
    height: 24px;
    color: var(--tm-pri-0);
  }

  .feature-content {
    text-align: left;
  }

  .feature-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--tm-txt-primary);
    margin: 0 0 6px;
    line-height: 1.3;
  }

  .dark .feature-title {
    color: white;
  }

  .feature-description {
    font-size: 0.875rem;
    color: var(--tm-txt-secondary);
    margin: 0;
    line-height: 1.4;
  }

  .dark .feature-description {
    color: rgba(255, 255, 255, 0.6);
  }

  /* ===== 统计数据 ===== */
  .stats-container {
    margin-bottom: 32px;
  }

  .stats-card {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 48px;
    padding: 32px 48px;
    border-radius: 20px;
    backdrop-filter: blur(20px);
    background: linear-gradient(
      135deg,
      rgba(var(--tm-bg-secondary-rgb), 0.5),
      rgba(var(--tm-bg-secondary-rgb), 0.8)
    );
    border: 1px solid var(--tm-bd-light);
    overflow: hidden;
  }

  .dark .stats-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.05));
    border-color: rgba(255, 255, 255, 0.08);
  }

  .stats-background {
    position: absolute;
    inset: -50%;
    width: 200%;
    height: 200%;
    opacity: 0.5;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      rgba(var(--tm-pri-0-rgb), 0.1) 60deg,
      transparent 120deg,
      rgba(var(--tm-pri-1-rgb), 0.1) 180deg,
      transparent 240deg,
      rgba(var(--tm-pri-0-rgb), 0.1) 300deg,
      transparent 360deg
    );
    animation: rotate 20s linear infinite;
  }

  .stats-item {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  .stats-number {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 4px;
    margin-bottom: 6px;
  }

  .stats-value {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--tm-pri-0), var(--tm-pri-1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stats-plus {
    font-size: 2rem;
    font-weight: 600;
    color: var(--tm-pri-0);
    opacity: 0.8;
  }

  .stats-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--tm-txt-secondary);
    white-space: nowrap; /* 防止换行 */
  }

  .dark .stats-label {
    color: rgba(255, 255, 255, 0.7);
  }

  .stats-divider {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, transparent, var(--tm-bd-light), transparent);
  }

  .dark .stats-divider {
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent);
  }

  /* ===== 滚动提示 ===== */
  .scroll-hint {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--tm-txt-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .scroll-hint:hover {
    color: var(--tm-txt-primary);
    transform: translateY(2px);
  }

  .dark .scroll-hint {
    color: rgba(255, 255, 255, 0.6);
  }

  .dark .scroll-hint:hover {
    color: rgba(255, 255, 255, 0.9);
  }

  .scroll-text {
    font-size: 0.875rem;
  }

  .scroll-icon {
    width: 20px;
    height: 20px;
    animation: bounce 2s infinite;
  }

  /* ===== 动画 ===== */
  @keyframes slow-zoom {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0%,
    20%,
    53%,
    80%,
    100% {
      transform: translateY(0);
    }
    40%,
    43% {
      transform: translateY(-5px);
    }
    70% {
      transform: translateY(-3px);
    }
    90% {
      transform: translateY(-2px);
    }
  }

  /* ===== 响应式设计 ===== */
  @media (max-width: 1024px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .stats-card {
      gap: 32px;
      padding: 24px 32px;
    }
  }

  @media (max-width: 768px) {
    .consultation-hero {
      min-height: auto;
      padding: 40px 0 60px;
    }

    .hero-container {
      padding: 0 16px;
    }

    .hero-badge {
      padding: 6px 16px;
      margin-bottom: 16px;
    }

    .hero-badge-text {
      font-size: 12px;
    }

    .hero-title {
      font-size: 2.5rem;
      margin-bottom: 12px;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1rem;
      margin-bottom: 32px;
      padding: 0 10px;
    }

    .features-grid {
      grid-template-columns: 1fr;
      gap: 12px;
      margin-bottom: 32px;
    }

    .feature-card {
      padding: 20px 16px;
      border-radius: 16px;
      text-align: left;
    }

    .feature-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }

    .feature-icon-svg {
      width: 20px;
      height: 20px;
    }

    .feature-title {
      font-size: 0.9rem;
    }

    .feature-description {
      font-size: 0.8rem;
    }

    /* 保持横向布局 */
    .stats-card {
      gap: 20px;
      padding: 20px 16px;
    }

    .stats-value {
      font-size: 2rem;
    }

    .stats-plus {
      font-size: 1.5rem;
    }

    .stats-label {
      font-size: 0.75rem;
    }

    .stats-divider {
      height: 30px;
    }

    .scroll-text {
      font-size: 0.8rem;
    }

    /* 取消背景动画 */
    .hero-bg-image {
      animation: none;
      transform: translate(-50%, -50%) scale(1.05);
    }
  }

  @media (max-width: 480px) {
    .consultation-hero {
      padding: 30px 0 40px;
    }

    .hero-container {
      padding: 0 12px;
    }

    .hero-badge {
      padding: 5px 12px;
      gap: 6px;
    }

    .hero-badge-icon {
      font-size: 14px;
    }

    .hero-badge-text {
      font-size: 11px;
    }

    .hero-title {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .hero-subtitle {
      font-size: 0.9rem;
      margin-bottom: 24px;
    }

    .feature-card {
      padding: 16px 14px;
      gap: 12px;
    }

    .feature-icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
    }

    .feature-icon-svg {
      width: 18px;
      height: 18px;
    }

    .feature-title {
      font-size: 0.85rem;
      margin-bottom: 4px;
    }

    .feature-description {
      font-size: 0.75rem;
    }

    /* 进一步优化统计数据 */
    .stats-card {
      padding: 16px 8px;
      gap: 12px;
    }

    .stats-value {
      font-size: 1.75rem;
    }

    .stats-plus {
      font-size: 1.25rem;
    }

    .stats-label {
      font-size: 0.65rem;
      line-height: 1.2;
    }

    .stats-divider {
      height: 25px;
    }

    .decoration--1 {
      width: 200px;
      height: 200px;
    }

    .decoration--2 {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 360px) {
    .hero-container {
      padding: 0 10px;
    }

    .hero-title {
      font-size: 1.75rem;
    }

    .feature-card {
      padding: 14px 12px;
    }

    .stats-card {
      padding: 14px 6px;
      gap: 8px;
    }

    .stats-value {
      font-size: 1.5rem;
    }

    .stats-plus {
      font-size: 1.1rem;
    }

    .stats-label {
      font-size: 0.6rem;
    }

    .stats-divider {
      height: 20px;
    }
  }
</style>
